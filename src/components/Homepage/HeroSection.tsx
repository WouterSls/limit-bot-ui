import React from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { HeroDataInterface } from "@/models/interfaces/HeroDataInterface";
import { cn } from "@/lib/utils";

interface HeroProps {
  heroProps: HeroDataInterface;
}

const HeroSection: React.FC<HeroProps> = ({ heroProps }) => {
  return (
    <>
      <span className="text-md font-semibold text-gray-500 my-12 rounded-full p-4 border border-b flex">
        More automation tools?{" "}
        <Link
          href="http://senter.be"
          target="_blank"
          className="text-green-500 hover:underline flex pl-2"
        >
          Get here
          <ArrowRight></ArrowRight>
        </Link>
      </span>
      <h1 className="text-6xl font-semibold max-w-lg mx-auto text-center">
        {heroProps.heroTag}
      </h1>
      <p className="mt-6">{heroProps.tagLine}</p>
      <div className="mt-12 flex flex-row space-x-4 pb-32">
        <Link
          href={heroProps.button1.link}
          className={cn(buttonVariants({ variant: "default" }), "w-32")}
        >
          Get Started
        </Link>
        <Link
          href={heroProps.button2.link}
          className={cn(buttonVariants({ variant: "outline" }), "w-32")}
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
