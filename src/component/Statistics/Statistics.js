import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "./statistics.css";

const Statistics = () => {
  const totals = useLoaderData();
  console.log(totals.data);
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={totals.data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
