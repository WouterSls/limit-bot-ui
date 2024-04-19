"use client";
import React from "react";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import BotCard from "@/components/Elements/BotCard";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const bots: any[] = [
  { name: "bot1", color: "green" },
  { name: "bot2", color: "red" },
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
        <nav>
          <Breadcrumb>
            <BreadcrumbList className="text-6xl my-20">
              <BreadcrumbItem>
                <BreadcrumbPage>Your Bots</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
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
