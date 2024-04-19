"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";

const SUPABASE_URL =
  process.env.SUPABASE_URL || "https://xisrqxhgjztgfbeffmaf.supabase.co";
const SUPABASE_PUBLIC_KEY =
  process.env.SUPABASE_PUBLIC_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpc3JxeGhnanp0Z2ZiZWZmbWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MTk5MjIsImV4cCI6MjAyOTA5NTkyMn0.hkhFJZZXZt3j_4NtPTI9Dgqf507Y6xVZAFRAcxrYHBA";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => Promise.resolve(),
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [supabase] = useState<SupabaseClient>(
    createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY)
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw new Error(error.message);
      }

      setIsAuthenticated(true);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const logout = () => {
    supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
