import { PaymentStrategy } from "./PaymentStrategy";

export class PaypalPayment extends PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using PayPal.`;
  }
}
