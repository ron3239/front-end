import axios from "axios";

interface TransactionMessage {
  address: string;
  amount: number;
  payload: string;
  // Добавьте другие возможные поля при необходимости
}
interface IgetBuyStarsLink{
  req_id: string,
}
interface BuyStarsResponse {
  transaction: {
    messages: TransactionMessage[];
  };
  req_id?: string;
}

class Fragment {
  private URL: string;
  private HEADERS: object;

  constructor() {
    this.URL = `https://fragment.com/api?hash=${process.env.NEXT_FRAGMENT_HASH}`;
    this.HEADERS = {
      headers: {
        Cookie: `stel_ssid=${process.env.NEXT_FRAGMENT_SSID}; stel_dt=${process.env.NEXT_FRAGMENT_DT}; stel_token=${process.env.NEXT_FRAGMENT_TOKEN}; stel_ton_token=${process.env.NEXT_FRAGMENT_TON_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest",
        Origin: "https://fragment.com",
        Referer: "https://fragment.com/stars",
      },
      timeout: 10000,
    };
  }
  //
  private async makeRequest(data: object) {
    try {
      const response = await axios.post(this.URL, data, this.HEADERS);
      return response.data;
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  }
  //Поиск пользователя в телеграме
  async searchStarsRecipient(username: string) {
    return this.makeRequest({
      query: username,
      method: "searchStarsRecipient",
    });
  }
  //Создание запроса на покупку звезд
  async initBuyStarsRequest(username: string, quantity: string) {
    return this.makeRequest({
      recipient: username,
      quantity: quantity,
      method: "initBuyStarsRequest",
    });
  }
  //Получение ссылки для покупки звезд
  async getBuyStarsLink(buyResponse:IgetBuyStarsLink) {
    const data = {
      address: "0:1415cf499b86cbf58e04fd2c98677bb19887b7a4091d6c40976807d5f8829366",
      chain: "-3",
      walletStateInit: process.env.NEXT_FRAGMENT_WALLETS,
      publicKey: process.env.NEXT_FRAGMENTKEY,
      features: JSON.stringify([
        "SendTransaction", 
        { name: "SendTransaction", maxMessages: 255 }
      ]),
      maxProtocolVersion: 2,
      platform: "android",
      appName: "Tonkeeper",
      appVersion: "4.12.3",
      transaction: "1",
      id: buyResponse.req_id,
      show_sender: "1",
      method: "getBuyStarsLink"
    };
    return this.makeRequest(data);
  }

  //Покупка звезд (searchStarsRecipient, initBuyStarsRequest, getBuyStarsLink)
  async buyStar(userName: string, amount: string): Promise<BuyStarsResponse> {
    try {
      await this.searchStarsRecipient(userName);
      const res = await this.initBuyStarsRequest(userName, amount);
      const link = await this.getBuyStarsLink(res);
      return link;
    } catch (error) {
      console.error('Buy star failed:', error);
      throw error;
    }
  }
}

export const fragment = new Fragment();