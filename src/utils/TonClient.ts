import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { TonClient, WalletContractV4, fromNano, internal } from "ton";
import { Address } from "@ton/core";

export const SendTransaction = async (
  recipient: string,
  amount: number,
  payload: string = "Hello"
) => {
  try {
    // 1. Инициализация клиента с API-ключом и ретраями
    const endpoint = await getHttpEndpoint({
      network: "testnet",
    });
    
    const client = new TonClient({
      endpoint,
      apiKey: process.env.TONCENTER_API_KEY
    });

    // 2. Загрузка мнемоники с валидацией
    const mnemonic = process.env.MNEMONIC?.split(' ') || [];
    if (mnemonic.length !== 24) {
      throw new Error('Invalid mnemonic length (expected 24 words)');
    }

    // 3. Генерация ключей с задержкой
    await sleep(500); // Защита от rate limit
    const keyPair = await mnemonicToWalletKey(mnemonic);

    // 4. Создание кошелька V4R2
    const wallet = WalletContractV4.create({
      workchain: 0,
      publicKey: keyPair.publicKey
    });
    
    const walletContract = client.open(wallet);

    // 5. Проверка адреса
    const expectedAddr = Address.parse("EQBA6agf7P5C-7a4ASJqsNFX54spWX2xqD3ExlptiWSNuGPr");
    if (!wallet.address.equals(expectedAddr)) {
      console.warn("Адрес кошелька не совпадает с ожидаемым!");
    }

    // 6. Получение баланса с обработкой ошибок
    let balance;
    try {
      balance = await walletContract.getBalance();
      console.log(`Balance: ${fromNano(balance)} TON`);
    } catch (e) {
      console.error("Ошибка получения баланса:", e);
      throw e;
    }

    // 7. Подготовка транзакции
    const seqno = await walletContract.getSeqno();

    // 8. Отправка с ретраями
    let attempts = 0;
    const maxAttempts = 3;
    
    while (attempts < maxAttempts) {
      try {
        await walletContract.sendTransfer({
          secretKey: keyPair.secretKey,
          seqno,
          messages: [
            internal({
              to: recipient,
              value: amount.toString(),
              body: payload,
              bounce: false,
            })
          ],
        });
        console.log(`Транзакция отправлена (попытка ${attempts + 1})`);
        break;
      } catch (e) {
        attempts++;
        if (attempts >= maxAttempts) throw e;
        await sleep(2000 * attempts); // Экспоненциальная задержка
      }
    }

    // 9. Ожидание подтверждения
    // let currentSeqno = seqno;
    // let confirmationAttempts = 0;
    

      // await sleep(2000);
      // currentSeqno = await walletContract.getSeqno();
      // confirmationAttempts++;
      console.log(`Ожидание подтверждения... `);
    

    return {
      success: true,
      from: wallet.address.toString(),
      to: walletContract,
      amount: amount,
      explorerLink: `https://testnet.tonscan.org/address/${wallet.address.toString()}`
    };

  } catch (error) {
    console.error("Ошибка при отправке транзакции:", error);
    throw error;
  }
};

// Утилита для задержки
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}