import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardPayment extends PaymentStrategy {
    pay(amount: number): string {
        return `Paid ₹${amount} using Credit Card.`;
    }
}
