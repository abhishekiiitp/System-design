# Payment Processing System Using Strategy Pattern

A Next.js application demonstrating the Strategy Pattern for handling multiple payment methods in an e-commerce system.

## 🚀 Features

- **Multiple Payment Methods**: Credit Card, PayPal, and UPI
- **Strategy Pattern Implementation**: Easy to extend with new payment methods
- **TypeScript Support**: Full type safety and IntelliSense
- **Modern UI**: Beautiful, responsive interface
- **API Endpoint**: RESTful API for payment processing

## 🏗️ Architecture

The system implements the Strategy Pattern with the following components:

### 1. PaymentStrategy (Abstract Base Class)
```typescript
export abstract class PaymentStrategy {
    abstract pay(amount: number): string;
}
```

### 2. Concrete Strategies
- **CreditCardPayment**: Handles credit card payments
- **PaypalPayment**: Handles PayPal payments  
- **UPIPayment**: Handles UPI payments

### 3. PaymentContext
```typescript
export class PaymentContext {
    private strategy: PaymentStrategy;
    
    setStrategy(strategy: PaymentStrategy): void
    executePayment(amount: number): string
}
```

## 🛠️ How to Add New Payment Methods

1. Create a new class implementing `PaymentStrategy`:
```typescript
import { PaymentStrategy } from "./PaymentStrategy";

export class CryptoPayment extends PaymentStrategy {
    pay(amount: number): string {
        return `Paid ₹${amount} using Cryptocurrency.`;
    }
}
```

2. Add it to the strategies object in `lib/paymentStrategies/index.ts`:
```typescript
import { CryptoPayment } from "./CryptoPayment";

export const strategies = {
    credit: new CreditCardPayment(),
    paypal: new PaypalPayment(),
    upi: new UPIPayment(),
    crypto: new CryptoPayment(), // Add new method
};
```

3. Update the UI to include the new option (optional)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📡 API Usage

### Process Payment
**Endpoint**: `POST /api/processPayment`

**Request Body**:
```json
{
    "method": "credit|paypal|upi",
    "amount": 100.50
}
```

**Response**:
```json
{
    "message": "Paid ₹100.50 using Credit Card."
}
```

## 🎯 Benefits of Strategy Pattern

1. **Open/Closed Principle**: Open for extension, closed for modification
2. **Eliminates Conditional Logic**: No need for if-else chains
3. **Easy Testing**: Each strategy can be tested independently
4. **Runtime Strategy Selection**: Change payment methods at runtime
5. **Maintainable**: Adding new payment methods doesn't affect existing code

## 🔧 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Strategy Pattern**: Design pattern for algorithm selection
- **CSS Modules**: Scoped styling
- **REST API**: Payment processing endpoint

## 📱 Demo

The application includes a demo interface where you can:
- Enter payment amounts
- Select payment methods
- Process payments
- See the Strategy Pattern in action

Visit `http://localhost:3000` to try it out!
