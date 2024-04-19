"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "../ui/use-toast";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      router.push("/landing");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container flex flex-col text-center max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="email">email</Label>
          <Input
            name="email"
            id="email"
            type="text"
            onChange={handleChange}
          ></Input>
        </div>
        <div className="mb-4">
          <Label htmlFor="password">password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
          ></Input>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
