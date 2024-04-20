"use client";
import React from "react";
import { Button } from "../ui/button";

const StopBotButton = () => {
  const handleStopButtonClick = async () => {
    try {
      // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint URL
      const response = await fetch("http://localhost:8080/auth/bot/stop", {
        method: "POST", // or 'GET', 'PUT', 'DELETE', etc. depending on your server endpoint
        headers: {
          "Content-Type": "application/json", // Modify this if your server expects a different content type
          // Add any additional headers if needed, e.g., authorization token
        },
        // You can pass data in the body if required by your server
        // body: JSON.stringify({ /* your data object */ }),
      });

      if (response.ok) {
        // Handle success response from server
        console.log("Bot stopped successfully");
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
      variant="destructive"
      className="w-full h-[20svh] bg-red-500 text-4xl hover:scale-105 transition-all ease"
      onSubmit={handleStopButtonClick}
    >
      STOP
    </Button>
  );
};

export default StopBotButton;
