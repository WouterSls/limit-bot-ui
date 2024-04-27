import React from "react";
import Link from "next/link";

interface BotProps {
  botName: string;
  botColor: string;
}

export const BotCard: React.FC<BotProps> = ({ botName, botColor }) => {
  return (
    <Link href={"/dashboard/overview"} className="">
      <div className="grid grid-rows-3 h-[30svh] hover:scale-105 transition-all ease duration-200">
        <div className={`row-span-1 bg-${botColor}-200`}></div>
        <div className="row-span-2 bg-gray-800">
          <div className="p-6 text-white">
            <h2 className="text-2xl text-white">{botName}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/** description might not be needed but add up & uptime information with minimal network tag */}
          </div>
        </div>
      </div>
    </Link>
  );
};
