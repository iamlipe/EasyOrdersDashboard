"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";

import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-700 p-2 space-y-2 rounded-md">
        <p className="text-white">{`${label} : ${payload[0].value}`}</p>
        <p className="text-white">{`${label} : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export function TotalOrderPads() {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      <SwiperSlide>
        <div className="h-24 flex flex-col justify-center space-y-2">
          <p className="text-2xl font-semibold">$45,231.89</p>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <ResponsiveContainer width="100%" height={72}>
          <LineChart data={data}>
            <Tooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#16a34a"
              strokeWidth={1.4}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#4ade80"
              strokeWidth={1.4}
            />
          </LineChart>
        </ResponsiveContainer>
      </SwiperSlide>
    </Swiper>
  );
}
