import React from "react";
import MaxWidthWrapper from "@/components/Elements/MaxWidthWrapper";
import Link from "next/link";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Megrim } from "next/font/google";
import { headerData } from "@/config/headerData";
import { LogOut, Settings, User, CreditCard, CircleHelp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <div className="col-span-1 flex flex-row items-center justify-end space-x-4">
            <div className="group">
              <Link
                href={headerData.headerButton1.link}
                className={buttonVariants({
                  variant: "ghost",
                  size: "default",
                })}
              >
                <CircleHelp className="mr-2 text-gray-500 group-hover:text-black"></CircleHelp>
                <span className="text-gray-500 group-hover:text-black">
                  {headerData.headerButton1.text}
                </span>
              </Link>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Pricing</span>
                </DropdownMenuItem>
                {/** 
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
*/}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default AuthenticatedHeader;
