import { Yookassa } from "@/utils/Yookassa";
import axios from "axios";


const yookassa = new Yookassa()
export async function POST(request: Request) {
  const event = await request.json();
  


  // 2. Обрабатываем только нужные события
  if (event.event === 'payment.waiting_for_capture') {
    const payment = event.object;

    try {
        //todo 3. Отправляем
        const apiResponse = await axios.post('/api/buyStar',{username:payment.username,quantity:payment.amount})

      if (apiResponse.status==200) {
        // 4. Если API принял - подтверждаем платёж
        await yookassa.capturePayment(payment.id,payment.amount);
      } else {
        // 5. Если API отказал - отменяем холд
        await yookassa.cancelPayment(payment.id,payment.amount);
      }
    } catch (error) {
      // 6. При ошибке сети тоже отменяем
      await yookassa.cancelPayment(payment.id,payment.amount);
    }
  }

  return new Response("OK", { status: 200 });
}