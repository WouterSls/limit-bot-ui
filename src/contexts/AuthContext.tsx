"use client";
import React from "react";
import { createContext, useContext, useState } from "react";

type AuthHeader = {
  [key: string]: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  authHeader: AuthHeader | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  authHeader: null,
  login: () => Promise.resolve(),
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authHeader, setAuthHeader] = useState<AuthHeader | null>(null);

  const login = async (email: string, password: string) => {
    const body = { email, password };
    try {
      const response = await fetch("/api/authentication/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          "NOK server response during login: " + response.statusText
        );
      }
      const data = await response.json();
      const token = data.token;

      const authHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      setIsAuthenticated(true);
      setAuthHeader(authHeader);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAuthHeader(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authHeader, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
