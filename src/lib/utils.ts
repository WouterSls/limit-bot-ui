import { BotDataInterface } from "@/models/interfaces/BotDataInterface";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function validateBotData(
  data: any
): Promise<BotDataInterface[] | null> {
  //check if bots exists
  if (!data) {
    return null;
  } else {
    const bots: BotDataInterface[] = [
      { name: "gene-usdc bot", sellPrice: 1, tokenAddress: "test", account: 1 },
      { name: "test bot2", sellPrice: 1, tokenAddress: "test", account: 1 },
    ];
    return bots;
  }
}
