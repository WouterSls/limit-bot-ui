"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
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
