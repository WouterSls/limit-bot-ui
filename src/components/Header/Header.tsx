"use client";
import React from "react";
import { Megrim } from "next/font/google";
import { HeaderDataInterface } from "@/models/interfaces/HeaderDataInterface";
import { useAuth } from "@/contexts/AuthContext";
import NonAuhtenticatedHeader from "./headers/NonAuthenticatedHeader";
import AuthenticatedHeader from "./headers/AuthenticatedHeader";

const mergrim = Megrim({ subsets: ["latin"], weight: ["400"] });

interface HeaderProps {
  headerProps: HeaderDataInterface;
}

const Header: React.FC<HeaderProps> = ({ headerProps }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <AuthenticatedHeader />
  ) : (
    <NonAuhtenticatedHeader headerProps={headerProps} />
  );
};

export default Header;
