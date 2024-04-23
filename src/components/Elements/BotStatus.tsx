"use client";
import React, { useEffect, useState } from "react";

const BotStatus = () => {
  const [botStatus, setBotStatus] = useState<boolean | null>(null); // Assuming the data structure

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

  if (botStatus === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/**
      <div>
        {botStatus ? <div>Bot is active</div> : <div>Bot is inactive</div>}
      </div>
    */}
      <div>{botStatus}</div>
    </>
  );
};

export default BotStatus;
