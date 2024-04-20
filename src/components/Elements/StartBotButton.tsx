"use client";
import React from "react";
import { Button } from "../ui/button";

const StartBotButton = () => {
  const usdcAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
  const body = {
    testAddress: usdcAddress,
    sellPrice: "1",
    account: "1",
  };
  const handleStartButtonClick = async () => {
    try {
      // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint URL
      const response = await fetch("http://localhost:8080/auth/bot/start", {
        method: "POST", // or 'GET', 'PUT', 'DELETE', etc. depending on your server endpoint
        headers: {
          "Content-Type": "application/json", // Modify this if your server expects a different content type
          // Add any additional headers if needed, e.g., authorization token
        },
        body: JSON.stringify(body),
        // You can pass data in the body if required by your server
        // body: JSON.stringify({ /* your data object */ }),
      });

      if (response.ok) {
        // Handle success response from server
        console.log("Bot started successfully");
      } else {
        // Handle error response from server
        console.error("Failed to start bot:", response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error while starting bot:", error);
    }
  };

  return (
    <Button
      className="w-full h-[20svh] bg-green-500 text-4xl hover:bg-green-500/80 hover:scale-105 transition-all ease"
      onClick={handleStartButtonClick}
    >
      START
    </Button>
  );
};

export default StartBotButton;
