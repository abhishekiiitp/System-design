"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("credit");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setResult("Please enter a valid amount");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/processPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ method, amount: parseFloat(amount) }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.message);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult("Error processing payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Payment Processing System</h1>
        <p>Demonstrating Strategy Pattern for Multiple Payment Methods</p>

        <div className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label htmlFor="amount">Amount (₹):</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="0"
              step="0.01"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="method">Payment Method:</label>
            <select
              id="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={styles.payButton}
          >
            {loading ? "Processing..." : "Process Payment"}
          </button>

          {result && (
            <div className={styles.result}>
              <h3>Result:</h3>
              <p>{result}</p>
            </div>
          )}
        </div>

        <div className={styles.info}>
          <h3>Strategy Pattern Implementation</h3>
          <ul>
            <li><strong>PaymentStrategy:</strong> Abstract base class defining payment interface</li>
            <li><strong>Concrete Strategies:</strong> CreditCardPayment, PaypalPayment, UPIPayment</li>
            <li><strong>PaymentContext:</strong> Context class that uses the selected strategy</li>
            <li><strong>Easy Extension:</strong> Add new payment methods without changing existing code</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
