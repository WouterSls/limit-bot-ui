"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const TradeSuccesCard = () => {
  const handleStatusButtonClick = async () => {
    try {
      const response = await fetch("/api/status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error(
          "NOK response when fetching status: ",
          response.statusText
        );
      }
    } catch (error) {
      console.error("error while getting status: ", error);
    }
  };
  //const [status, setStatus] =;
  return (
    <div className="h-full border-2 border-gray-200 rounded-lg">
      <div className="p-6">
        {/** 
        <h2>Trade Succes</h2>
*/}
        <h2>test button</h2>
        <Button
          variant="secondary"
          className="w-full"
          onClick={handleStatusButtonClick}
        >
          status
        </Button>
      </div>
    </div>
  );
};

export default TradeSuccesCard;
