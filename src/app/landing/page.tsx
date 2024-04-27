"use client";
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import LandingSection from "@/components/Landing/LandingSection";
import { useEffect } from "react";
import { validateBotData } from "@/lib/utils";
import { BotDataInterface } from "@/models/interfaces/BotDataInterface";

const LandingPage = () => {
  const [bots, setBots] = useState<BotDataInterface[] | null>(null);

  const router = useRouter();
  const { isAuthenticated, authHeader } = useAuth();

  if (!isAuthenticated) {
    router.push("/login");
    return;
  }

  useEffect(() => {
    if (!authHeader) {
      return;
    }
    const getBotsForUser = async () => {
      const response = await fetch("/api/protected/bots", {
        method: "GET",
        headers: authHeader,
      });

      if (!response.ok) {
        console.error("Error getting bots from server: " + response.statusText);
      }

      const data = await response.json();
      const bots = await validateBotData(data);
      setBots(bots);
    };

    getBotsForUser();
  }, []);

  if (!bots) {
    return;
  }

  return <LandingSection bots={bots}></LandingSection>;
};

export default LandingPage;
