"use client";

import {
  BarChart as BarChartRecharts,
  Bar,
  Rectangle,
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

type BarChartProps = {
  width?: "100%" | number;
  height?: "100%" | number;
};

export function BarChart({ width = "100%", height = "100%" }: BarChartProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChartRecharts data={data}>
        <Tooltip contentStyle={{ backgroundColor: "#101010" }} />
        <Bar
          dataKey="uv"
          fill="#4ade80"
          radius={[8, 8, 0, 0]}
          activeBar={<Rectangle fill="#16a34a" />}
        />
      </BarChartRecharts>
    </ResponsiveContainer>
  );
}
