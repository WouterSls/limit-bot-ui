"use client";
import React from "react";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import BotCard from "@/components/Elements/BotCard";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect } from "react";

const bots: any[] = [
  { name: "bot1", color: "green" },
  { name: "bot2", color: "red" },
  { name: "gene-usdc bot", color: "yellow" },
];

const LandingPage = () => {
  useEffect(() => {
    const getBotsForUser = async () => {
      try {
        const response = await fetch("/api/protected/bots", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("NOK response from server: " + response.statusText);
        }
        const data = await response.json();
      } catch (error) {}
    };
  });

  const router = useRouter();
  const handleCreateBotClick = () => {
    router.push("/dashboard/overview");
  };
  //use useEffect to call db and getting connections linked to auth user on
  //supabase UID
  //If no connection popup? you need to add a connection to use coinLiquidator
  //if saveConnection = true -> saveConnection in DB & callStartBot(rpcUrl,privateKey);
  //check if user has bots
  //initiate bot cards if true and prepare functions
  //
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <section className="min-h-[90svh] ">
      <MaxWidthWrapper>
        <div className="my-20 flex flex-row justify-between">
          <Breadcrumb>
            <BreadcrumbList className="text-6xl">
              <BreadcrumbItem>
                <BreadcrumbPage>Your Bots</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button className="w-44" onClick={handleCreateBotClick}>
            <Plus className="mr-2"></Plus> Create Bot
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {bots.map((bot, index) => (
            <div key={index} className="col-span-1">
              <BotCard botName={bot.name} botColor={bot.color}></BotCard>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LandingPage;
