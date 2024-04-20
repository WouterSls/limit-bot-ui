import React from "react";
import DocumentationCard from "@/components/Elements/DocumentationCard";
import BotInfo from "@/components/Elements/BotInfo";
import StartBotButton from "@/components/Elements/StartBotButton";
import StopBotButton from "@/components/Elements/StopBotButton";
import TradeAttemptsCard from "@/components/Elements/TradeAttemptsCard";
import TradeSuccesCard from "@/components/Elements/TradeSuccesCard";

const DashboardInfoPage = () => {
  return (
    <section className="min-h-[65svh]">
      <div className="grid grid-cols-2 h-[60svh] space-x-4">
        <div className="col-span-1 h-full">
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <div className="col-span-2 row-span-1 h-[20svh]">
              <DocumentationCard
                title="Getting Started"
                description="Check out the link below for our getting started guide"
                link="/docs/gettingstarted"
              ></DocumentationCard>
            </div>
            <div className="col-span-2 row-span-1 h-[20svh]">
              <BotInfo></BotInfo>
            </div>
            <div className="col-span-1 row-span-1 h-[20svh] bg-green-200">
              <StartBotButton></StartBotButton>
            </div>
            <div className="col-span-1 row-span-1 h-[20svh] bg-red-200">
              <StopBotButton></StopBotButton>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <div className="col-span-2 row-span-1 h-[20svh]">
              <DocumentationCard
                title="Documentation"
                description="Check out our complete docs at the link below"
                link="/docs"
              ></DocumentationCard>
            </div>
            <div className="col-span-1 row-span-1 h-[20svh]">
              <TradeSuccesCard></TradeSuccesCard>
            </div>
            <div className="col-span-1 row-span-1 h-[20svh]">
              <TradeAttemptsCard></TradeAttemptsCard>
            </div>
            <div className="col-span-2 row-span-1 h-[20svh]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfoPage;
