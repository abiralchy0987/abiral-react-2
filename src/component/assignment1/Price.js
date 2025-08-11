// Pricing.jsx
import React from "react";
import "./pricing.css";
// Price.js
import Title from "./Title";          // Add this import
import Subtitle from "./Subtitle";    // Add this import
import PricingBlock from "./PricingBlock"; // Add this import

// ... rest of your component code

// Main Pricing component
const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$149",
      period: "/month",
      features: [
        "3 videos per month",
        "Text content",
        "Graphics content",
        "Basic support"
      ],
      buttonText: "Get Started",
      highlight: false
    },
    {
      title: "Pro",
      price: "$299",
      period: "/month",
      features: [
        "6 videos per month",
        "Text content",
        "Graphics content",
        "Priority support"
      ],
      buttonText: "Get Started",
      highlight: true
    },
    {
      title: "Enterprise",
      price: "Contact us",
      period: "",
      features: [
        "Custom video amount",
        "Text content",
        "Graphics content",
        "Dedicated support"
      ],
      buttonText: "Contact Us",
      highlight: false
    }
  ];

  return (
    <div className="pricing-container">
      <Title>Pricing Plans</Title>
      <Subtitle>Choose a plan that fits your needs</Subtitle>
      
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <PricingBlock key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;