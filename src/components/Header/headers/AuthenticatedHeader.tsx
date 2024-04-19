import React from "react";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import Link from "next/link";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Megrim } from "next/font/google";
import { headerData } from "@/config/headerData";

const mergrim = Megrim({ subsets: ["latin"], weight: ["400"] });

const AuthenticatedHeader = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all px-8">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 h-20">
          {/**SiteId */}
          <Link
            href="/landing"
            className="cols-span-1 flex flex-row align-center items-center"
          >
            <span className={cn("pl-2 font-bold text-3xl", mergrim.className)}>
              {parse(headerData.siteId)}
            </span>
          </Link>

          {/**middle navbar */}
          <div className="col-span-1 "></div>
          {/**right navbar */}
          <div className="col-span-1 flex flex-row items-center space-x-4 mx-auto">
            <Link
              href={headerData.headerButton1.link}
              className={buttonVariants({
                variant: "ghost",
                size: "default",
              })}
            >
              {headerData.headerButton1.text}
            </Link>
            <Link
              href={headerData.headerButton1.link}
              className={buttonVariants({
                variant: "ghost",
                size: "default",
              })}
            >
              Settings
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default AuthenticatedHeader;
