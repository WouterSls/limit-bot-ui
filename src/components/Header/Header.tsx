import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "../Elements/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { Megrim } from "next/font/google";
import { cn } from "@/lib/utils";
import { HeaderDataInterface } from "@/models/interfaces/HeaderDataInterface";
import parse from "html-react-parser";

const mergrim = Megrim({ subsets: ["latin"], weight: ["400"] });

interface HeaderProps {
  headerProps: HeaderDataInterface;
}

const Header: React.FC<HeaderProps> = ({ headerProps }) => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all px-8">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 h-20">
          {/**Logo */}
          <Link
            href="/"
            className="cols-span-1 flex flex-row align-center items-center"
          >
            {/**
          <Image
            src={headerData.logoImagePath}
            alt="header-logo"
            width={50}
            height={50}
          ></Image>
        */}
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
              {/** 
               * 
               * Main CTA not needed in minimal header -> can be found on hero section
               * 
              <Link
                href={headerProps.mainCTAButton.link}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "default",
                  })
                )}
              >
                {headerProps.mainCTAButton.text}
              </Link>
              */}
            </>
          </div>
          {/**right navbar */}
          <div></div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
