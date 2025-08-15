import { NextApiRequest, NextApiResponse } from "next";
import { PaymentContext } from "../../lib/paymentStrategies/PaymentContext";
import { strategies } from "../../lib/paymentStrategies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { method, amount } = req.body;

  if (!method || !amount) {
    return res.status(400).json({ error: "method and amount are required" });
  }

  const strategy = strategies[method as keyof typeof strategies];
  if (!strategy) {
    return res.status(400).json({ error: "Invalid payment method" });
  }

  const paymentContext = new PaymentContext(strategy);
  const message = paymentContext.executePayment(amount);

  res.status(200).json({ message });
}
