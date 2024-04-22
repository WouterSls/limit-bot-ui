"use client";
import React from "react";
import { Button } from "../ui/button";

const StopBotButton = () => {
  const body = {};
  const handleStopButtonClick = async () => {
    try {
      const response = await fetch("/api/protected/stopBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log("Bot stopped successfully");
      } else {
        console.error("Failed to stop bot:", response.statusText);
      }
    } catch (error) {
      console.error("Error while starting bot:", error);
    }
  };
  return (
    <Button
      variant="destructive"
      className="w-full h-[20svh] bg-red-500 text-4xl hover:scale-105 transition-all ease"
      onClick={handleStopButtonClick}
    >
      STOP
    </Button>
  );
};

export default StopBotButton;
