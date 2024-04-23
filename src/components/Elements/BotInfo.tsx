import React from "react";
import BotStatus from "./BotStatus";

const BotInfo = () => {
  return (
    <div className="h-full border-2 border-gray-200 rounded-lg">
      <div className="p-6">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Bot Info</h2>
            <div className="col-span-1">
              <p>up time</p>
              <p>Connection info</p>
            </div>
          </div>
          <div>
            <BotStatus></BotStatus>
            <div className="col-span-1 bg-red-200">
              <p>token</p>
              <p>token price</p>
              <p>sell price</p>
            </div>
          </div>
        </div>
      </div>

      {/** 
      <p>Recent Trades</p>
      <p>trade succesful</p>
 */}
    </div>
  );
};

export default BotInfo;
