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

const bots: any[] = [
  { name: "bot1", color: "green" },
  { name: "bot2", color: "red" },
  { name: "gene-usdc bot", color: "yellow" },
];

const LandingPage = () => {
  const router = useRouter();
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
          <Button className="w-44">
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
