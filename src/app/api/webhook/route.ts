
import { yookassa } from "@/utils/Yookassa";
import axios from "axios";

export async function POST(request: Request) {
  const event = await request.json();
  
  // 2. Обрабатываем только нужные события
  if (event.event === 'payment.waiting_for_capture') {
    const payment = event.object;
    console.log('!!!')

    try {
      console.log(payment)
        const apiResponse = await axios.post(`${process.env.NEXT_STIE}/api/buyStar`,{username:payment.metadata.username,quantity:payment.metadata.quantity})
        console.log(apiResponse.data)

      if (apiResponse.status==200) {
        await yookassa.capturePayment(payment.id,payment.amount);
      } else {
      }
    } catch (e:unknown) {
      console.error(e)
    }
  }

  return new Response("OK", { status: 200 });
}