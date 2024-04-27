"use client";
import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { BotCard } from "./BotCard";
import { BotDataInterface } from "@/models/interfaces/BotDataInterface";

export const CreateBotButton = () => {
  const handleCreateBotClick = async () => {};

  return (
    <Button className="w-44" onClick={handleCreateBotClick}>
      <Plus className="mr-2"></Plus> Create Bot
    </Button>
  );
};

interface DisplayBotsProps {
  bots: BotDataInterface[];
}

export const DisplayBots: React.FC<DisplayBotsProps> = ({ bots }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {bots.map((bot, index) => (
        <div key={index} className="col-span-1">
          <BotCard botName={bot.name} botColor="green"></BotCard>
        </div>
      ))}
    </div>
  );
};
