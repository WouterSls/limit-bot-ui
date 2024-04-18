import React from "react";
import BotInfo from "@/components/Elements/BotInfo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const DashboardInfoPage = () => {
  return (
    <section className="min-h-[65svh]">
      <div className="grid grid-cols-2 h-[65svh]">
        <div className="col-span-1 h-full">
          <BotInfo></BotInfo>
        </div>
        <div className="col-span-1 h-full bg-green-200">
          <Link
            href={"/landing"}
            className={buttonVariants({ variant: "default" })}
          >
            landing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfoPage;
