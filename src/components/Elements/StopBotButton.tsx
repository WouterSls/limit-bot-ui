import React from "react";
import { Button } from "../ui/button";

const StopBotButton = () => {
  return (
    <Button
      variant="destructive"
      className="w-full h-[20svh] bg-red-500 text-4xl hover:scale-105 transition-all ease"
    >
      STOP
    </Button>
  );
};

export default StopBotButton;
