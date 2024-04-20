import React from "react";

const BotInfo = () => {
  return (
    <div className="h-full border-2 border-gray-200 rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Bot Info</h2>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <p>is up</p>
            <p>up time</p>
            <p>Connection info</p>
          </div>
          <div className="col-span-1">
            <p>token</p>
            <p>token price</p>
            <p>sell price</p>
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
