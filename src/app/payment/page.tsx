"use client";

import StripeCheckout from "../../components/StripeCheckout";

const PaymentPage = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
    }}
  >
    <StripeCheckout />
  </div>
);

export default PaymentPage;
