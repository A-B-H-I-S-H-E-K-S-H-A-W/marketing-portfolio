"use client";

import React from "react";

const HeroModal = () => {
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];
  return (
    <div className="h-80 w-96 border border-foreground rounded-2xl backdrop-blur-xl shadow-2xl shadow-foreground/40">
      <div className="p-4 text-foreground">
        <h3 className="text-xl py-2">Marketing Stats</h3>
        <div className="border-t-2 border-foreground">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroModal;
