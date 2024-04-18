import React from "react";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import BotCard from "@/components/Elements/BotCard";

const bots: any[] = [
  { name: "bot1", color: "green" },
  { name: "bot2", color: "red" },
];

const LandingPage = () => {
  return (
    <section className="min-h-[80svh] ">
      <MaxWidthWrapper>
        <h1 className="text-5xl py-10">Your Bots</h1>
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
