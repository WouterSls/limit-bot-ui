import React from "react";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { CreateBotButton, DisplayBots } from "../Bot/BotComponents";
import { BotDataInterface } from "@/models/interfaces/BotDataInterface";

interface LandingSectionProps {
  bots: BotDataInterface[];
}

const LandingSection: React.FC<LandingSectionProps> = ({ bots }) => {
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
          <CreateBotButton></CreateBotButton>
        </div>
        <DisplayBots bots={bots}></DisplayBots>
      </MaxWidthWrapper>
    </section>
  );
};

export default LandingSection;
