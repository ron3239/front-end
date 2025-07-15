import { IForm } from "@/types/IForm";
import { YooCheckout, ICreatePayment } from "@a2seven/yoo-checkout";

export class Yookassa {
  checkout: YooCheckout;
  idempotenceKey: string;
  constructor() {
    this.checkout = new YooCheckout({
      shopId: "1123659",
      secretKey: "test_dosqwTmB9NxvFgFY91xLIfhyNmWti0Xk53zOZpU_1ww",
    });
    this.idempotenceKey = Date.now().toString();
  }

  yookassacreatePayment = async (
    amount: number,
    data:any,
    description?: string,
    idempotenceKey: string = this.idempotenceKey,
    currency: string = "RUB"
  ) => {
    const createPayload: ICreatePayment = {
      amount: {
        value: amount.toFixed(2),
        currency,
      },
      payment_method_data: {
        type: "bank_card",
      },
      confirmation: {
        type: "redirect",
        return_url: "/", // Замените на ваш URL
      },
      capture: false,
      description,
      metadata:{
        username:data.username,
        quantity:data.quantity
      }
    };
    try {
      console.log("qwe");
      return await this.checkout.createPayment(createPayload, idempotenceKey);
    } catch (error) {
      console.error("Payment creation error:", error);
    }
  };

  capturePayment = async (paymentId: string, amount: number) => {
    const capturePayload: ICreatePayment = {
      amount: {
        value: amount.toFixed(2),
        currency: "RUB",
      },
    };

    try {
      await this.checkout.capturePayment(paymentId, capturePayload);
      return true;
    } catch (error) {
      console.error("Payment capture error:", error);
      throw error;
    }
  };
  cancelPayment = async (paymentId: string, ) => {
    try {
      await this.checkout.cancelPayment(paymentId);
      return true;
    } catch (error) {
      console.error("Payment capture error:", error);
      throw error;
    }
  };
}
