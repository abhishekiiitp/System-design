export abstract class PaymentStrategy {
    abstract pay(amount: number): string;
}
