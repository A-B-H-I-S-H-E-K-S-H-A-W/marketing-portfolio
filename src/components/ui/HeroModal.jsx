"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const HeroModal = ({ className }) => {
  const chartData = [
    { month: "Jan", sales: 104 },
    { month: "Feb", sales: 152 },
    { month: "Mar", sales: 208 },
    { month: "Apr", sales: 183 },
    { month: "May", sales: 291 },
    { month: "Jun", sales: 307 },
  ];

  return (
    <div
      className={`h-96 border border-foreground rounded-2xl backdrop-blur-xl shadow-2xl shadow-foreground/40 ${className}`}
    >
      <div className="py-2 px-1 text-foreground h-full">
        <h3 className="text-xl py-2">Marketing Stats</h3>
        <div className="border-t-2 border-foreground h-[80%]">
          <ResponsiveContainer width="100%" height="105%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="1 2" stroke="#8884d8" />
              <XAxis dataKey="month" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip
                cursor={{ fill: "#ffffff1A" }}
                contentStyle={{
                  backgroundColor: "#FFFFFF80",
                  borderColor: "#8884d8",
                }}
                labelStyle={{ color: "#000000" }}
                itemStyle={{ color: "#000000" }}
              />
              <Bar
                dataKey="sales"
                fill="#ffffff"
                radius={[4, 4, 0, 0]}
                activeBar={{ fill: "#ffffff80" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HeroModal;
