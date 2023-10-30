"use client";
import { useState } from "react";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePayment = (event) => {
    event.preventDefault();
    // Handle payment logic here
  };

  return (
    <div className="mt-36 bg-red-500 p-10 rounded-lg shadow-lg w-1/2 mx-auto">
      <h2 className="text-2xl mb-4">Complete Payment</h2>
      <p className="mb-4">Enter your credit or debit card details below</p>
      <form onSubmit={handlePayment} className="space-y-4">
        <label className="block">
          Card number
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </label>
        <label className="block">
          CVC
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-900 text-white rounded-md"
        >
          Confirm Payment
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl mb-2">Order Summary</h3>
        <p>Plan Name: Basic</p>
        <p>Billing Cycle: Monthly</p>
        <p>Plan price: 20.00€</p>
      </div>
    </div>
  );
}
