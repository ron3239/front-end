import { Yookassa } from "@/utils/Yookassa";
import { NextResponse } from "next/server";
import { IForm } from "@/types/IForm";

const yookassa = new Yookassa();
export async function POST(request: Request) {
  try {
    const data: IForm = await request.json();
    console.log('!!',data)
    const description = `Покупка ${data.quantity} звезд для @${data.username}`;
    // const returnUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/payment/status`;

    // 1. Создаем платеж (деньги замораживаются)
    const payment = await yookassa.yookassacreatePayment(data.price, description);
    // console.log(payment)
    return NextResponse.json({
      success: true,
      confirmation_url: payment!.confirmation.confirmation_url,
      payment_id: payment!.id
    });

  } catch (error) {
    // console.error("Payment error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Payment failed"
      },
      { status: 500 }
    );
  }
}