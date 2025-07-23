"use client";

import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import React from "react";

const Home = () => {
  // 1. Define the function to handle the checkout process
  const handleCheckout = async () => {
    try {
      // Calls your backend API route
      const response = await fetch("/api/stripe", { method: "POST" });
      const { url } = await response.json();

      // Redirects the user to the Stripe Checkout page
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Failed to redirect to Stripe:", error);
      // You could show an error message to the user here
    }
  };

  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
        <div style={{ marginTop: 32, textAlign: "center" }}>
          {/* 2. The button now calls handleCheckout directly */}
          <button
            style={{
              padding: "12px 32px",
              fontSize: 18,
              borderRadius: 8,
              background: "#635bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleCheckout}
          >
            Pay with Stripe
          </button>
        </div>
        {/* 3. The modal and the StripeCheckout component are no longer needed here */}
      </div>
    </AuthWrapper>
  );
};

export default Home;
