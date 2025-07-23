// app/payment-cancelled/page.tsx

import React from "react";

const PaymentCancelledPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Cancelled</h1>
      <p>Your order has been cancelled. You have not been charged.</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
};

export default PaymentCancelledPage;
