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
      const response = await fetch("/api/protected/startBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log("Bot started successfully");
      } else {
        console.error("Failed to start bot:", response.statusText);
      }
    } catch (error) {
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
