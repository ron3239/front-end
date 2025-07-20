// app/api/findRecipient/route.ts
import { NextResponse } from "next/server";
import { SendTransaction } from "@/utils/TonClient";
import { fragment } from "@/utils/Fragment";




export async function POST(request: Request) {
  const { username, quantity } = await request.json();


  const res:any = fragment.buyStar(username,quantity)

  const recipient = res.transaction.messages[0].address
  const amount = res.transaction.messages[0].amount
  const payload = res.transaction.messages[0].payload
  console.log(recipient, amount, payload)
  
  const result = await SendTransaction(recipient, amount/ 1_000_000_000, payload)
  // getTestnetBalance('0QAUFc9Jm4bL9Y4E_SyYZ3uxmIe3pAkdbECXaAfV-IKTZprA')
  if (result.error!>500){
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
  return NextResponse.json(finish,{status:200});
}


