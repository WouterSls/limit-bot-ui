"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const BotStatus = () => {
  const { authHeader } = useAuth();
  if (!authHeader) {
    return;
  }
  const [botStatus, setBotStatus] = useState<boolean | null>(null); // Assuming the data structure

  useEffect(() => {
    const fetchBotStatus = async () => {
      try {
        const response = await fetch("/api/protected/status", {
          method: "GET",
          headers: authHeader,
        });

        if (!response.ok) {
          throw new Error("NOK server response " + response.statusText);
        }

        const data = await response.json();
        //message, running
        console.log(data);
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
      <div>
        {botStatus ? <div>Bot is active</div> : <div>Bot is inactive</div>}
      </div>
    </>
  );
};

export default BotStatus;
