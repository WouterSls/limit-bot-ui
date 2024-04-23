"use client";
import { useState, useEffect } from "react";
import React from "react";
import BotInfo from "./BotInfo";
import StartBotButton from "./StartBotButton";
import StopBotButton from "./StopBotButton";

const InfoAndButtonWrapper = () => {
  useEffect(() => {
    const fetchBotStatus = async () => {
      try {
        const response = await fetch("/api/protected/status", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("NOK server response " + response.statusText);
        }

        const data = await response.json();
        //message, running
        setBotStatus(data.running);
      } catch (error) {
        console.error("Error fetching bot status:", error);
      }
    };

    fetchBotStatus();
  }, []);

  const [botStatus, setBotStatus] = useState<boolean | null>(null);
  return (
    <>
      <div className="col-span-2 row-span-1 h-[20svh]">
        <BotInfo></BotInfo>
      </div>
      <div className="col-span-1 row-span-1 h-[20svh] bg-green-200">
        <StartBotButton setBotStatus={setBotStatus}></StartBotButton>
      </div>
      <div className="col-span-1 row-span-1 h-[20svh] bg-red-200">
        <StopBotButton setBotStatus={setBotStatus}></StopBotButton>
      </div>
    </>
  );
};

export default InfoAndButtonWrapper;
