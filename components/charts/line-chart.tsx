"use client";

import {
  LineChart as LineChartRecharts,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

type LineChartProps = {
  width?: "100%" | number;
  height?: "100%" | number;
};

export function LineChart({ width = "100%", height = "100%" }: LineChartProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChartRecharts data={data}>
        <Tooltip content={CustomTooltip} />
        <Line type="monotone" dataKey="pv" stroke="#16a34a" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#4ade80" strokeWidth={2} />
      </LineChartRecharts>
    </ResponsiveContainer>
  );
}
