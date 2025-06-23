import CrystalPay from "crystalpay.js";
import { NextApiRequest, NextApiResponse } from "next";


const crystal = new CrystalPay({
  login: process.env.CRYSTALPAY_LOGIN,
  secret: process.env.CRYSTALPAY_KEY,
  sandbox: true, // В продакшене false
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {



  try {
    const { userNama, countStar }: IForm = req.body;

    const payment = await crystal.createInvoice({
      amount: Number(countStar),
      type: "sbp", // СБП (можно 'card', 'qiwi')
      lifetime: 15, // Время жизни счёта (мин)
      callback_url: `/api/payment/webhook`,
      extra: { userNama }, // Передаём username для webhook
    });

    res.status(200).json({
      url: payment.url,
      invoice_id: payment.id,
    });
  } catch (error:any) {
    console.error("Payment error:", error);
    res.status(500).json({ error: error.message });
  }
}
