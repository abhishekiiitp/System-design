import { PaymentStrategy } from "./PaymentStrategy";

export class UPIPayment extends PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using UPI.`;
  }
}
