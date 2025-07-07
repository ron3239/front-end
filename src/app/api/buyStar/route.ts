// app/api/findRecipient/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import { SendTransaction } from "@/utils/TonClient";

const URL = `https://fragment.com/api?hash=${process.env.NEXT_PUBLIC_FRAGMENT_HASH}`;
  const HEADERS = {
    headers: {
      Cookie: `stel_ssid=${process.env.NEXT_PUBLIC_FRAGMENT_SSID}; stel_dt=${process.env.NEXT_PUBLIC_FRAGMENT_DT}; stel_token=${process.env.NEXT_PUBLIC_FRAGMENT_TOKEN}; stel_ton_token=${process.env.NEXT_PUBLIC_FRAGMENT_TON_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://fragment.com",
      Referer: "https://fragment.com/stars",
    },
    timeout: 10000,
  };
  

export async function POST(request: Request) {
  const { username, quantity } = await request.json();

  const responseRecipient = await axios.post(
    URL,
    {
      query: username,
      method: "searchStarsRecipient",
    },
    HEADERS
  );
  // console.log("!!!!", responseRecipient.data);
  // console.log("!!!!", quantity, typeof quantity);
  //-----------------------------------------------------------

  // const response = await axios.post()
  const buyResponse = await axios.post(
    URL,
    {
      recipient: responseRecipient.data.found.recipient,
      quantity: quantity.toString(),
      method: "initBuyStarsRequest",
    },
    HEADERS
  );
  // console.log("!!!!", buyResponse.data);

const data = {
      address: "0:1415cf499b86cbf58e04fd2c98677bb19887b7a4091d6c40976807d5f8829366",
      chain: "-3",
      walletStateInit: process.env.NEXT_PUBLIC_FRAGMENT_WALLETS,
      publicKey: process.env.NEXT_PUBLIC_FRAGMENT_PUBLICKEY,
      features: JSON.stringify([
        "SendTransaction", 
        { name: "SendTransaction", maxMessages: 255 }
      ]),
      maxProtocolVersion: 2,
      platform: "android", // или "iphone" в зависимости от платформы
      appName: "Tonkeeper",
      appVersion: "4.12.3", // актуальная версия приложения
      transaction: "1",
      id: buyResponse.data.req_id,
      show_sender: "1", // или "0" если не нужно показывать отправителя
      method: "getBuyStarsLink"
    };
  const Fetch_buy_link = await axios.post(
    URL,
    data,
    HEADERS
  )

  // console.log(Fetch_buy_link.data)

  const recipient = Fetch_buy_link.data.transaction.messages[0].address
  const amount = Fetch_buy_link.data.transaction.messages[0].amount
  const payload = Fetch_buy_link.data.transaction.messages[0].payload
  console.log(recipient, amount, payload)
  
  const result = await SendTransaction(recipient, amount/ 1_000_000_000, payload)
  // getTestnetBalance('0QAUFc9Jm4bL9Y4E_SyYZ3uxmIe3pAkdbECXaAfV-IKTZprA')
  if (result.status==500){
    return NextResponse.json(result,{status:500})
}
  const finish = {
    data: {
      transaction: result
    },
    fragment: {
      recipient,
      amount,
      payload
    }
  }
  return NextResponse.json(finish);
  //Fetch_buy_link.data.transactionc[0].address,Fetch_buy_link.data.transactionc[0].amount,Fetch_buy_link.data.transactionc[0].payload
}


