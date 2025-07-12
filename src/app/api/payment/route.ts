import { Yookassa } from "@/utils/Yookassa";
import { NextResponse } from "next/server";
import { IForm } from "@/types/IForm";

const yookassa = new Yookassa();
export async function POST(request: Request) {
  try {
    const data: IForm = await request.json();
    const description = `Покупка ${data.countStar} звезд для @${data.userName}`;
    // const returnUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/payment/status`;

    // 1. Создаем платеж (деньги замораживаются)
    const payment = await yookassa.yookassacreatePayment(data.price, description);
    
    // 2. Здесь должна быть проверка через BuyStar API
    // const buyStarOk = await checkWithBuyStar(payment.id);
    
    // 3. Подтверждаем платеж (если проверка прошла)
    await yookassa.capturePayment(payment!.id, data.price);
    
    return NextResponse.json({
      success: true,
      confirmation_url: payment!.confirmation.confirmation_url,
      payment_id: payment!.id
    });

  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Payment failed"
      },
      { status: 500 }
    );
  }
}