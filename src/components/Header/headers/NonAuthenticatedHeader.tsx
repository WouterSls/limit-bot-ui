import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Megrim } from "next/font/google";
import { cn } from "@/lib/utils";
import { HeaderDataInterface } from "@/models/interfaces/HeaderDataInterface";
import parse from "html-react-parser";
import { useAuth } from "@/contexts/AuthContext";

const mergrim = Megrim({ subsets: ["latin"], weight: ["400"] });

interface HeaderProps {
  headerProps: HeaderDataInterface;
}

const NonAuhtenticatedHeader: React.FC<HeaderProps> = ({ headerProps }) => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all px-8">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 h-20">
          {/**SiteId */}
          <Link
            href="/"
            className="cols-span-1 flex flex-row align-center items-center"
          >
            <span className={cn("pl-2 font-bold text-3xl", mergrim.className)}>
              {parse(headerProps.siteId)}
            </span>
          </Link>

          {/**middle navbar */}
          <div className="col-span-1 flex flex-row items-center space-x-4 mx-auto">
            <>
              <Link
                href={headerProps.headerButton1.link}
                className={buttonVariants({
                  variant: "ghost",
                  size: "default",
                })}
              >
                {headerProps.headerButton1.text}
              </Link>
              <Link
                href={headerProps.headerButton2.link}
                className={buttonVariants({
                  variant: "ghost",
                  size: "default",
                })}
              >
                {headerProps.headerButton2.text}
              </Link>
            </>
          </div>
          {/**right navbar */}
          <div className="flex items-center align-right mx-auto">
            <Link
              href={headerProps.mainCTAButton.link}
              className={buttonVariants({
                variant: "default",
              })}
            >
              {headerProps.mainCTAButton.text}
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NonAuhtenticatedHeader;
