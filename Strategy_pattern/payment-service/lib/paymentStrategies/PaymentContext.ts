import { PaymentStrategy } from "./PaymentStrategy";

export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy: PaymentStrategy): void {
      this.strategy = strategy;
    }
  
    executePayment(amount: number): string {
      return this.strategy.pay(amount);
    }
}
  