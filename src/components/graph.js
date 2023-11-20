import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

function graph(props) {
  const data = [
    {
      name: "Custom",
       amount: props.data1,
    },
    {
      name: "Category 1",
       amount: props.data2,
    },
    {
      name: "Category 2",
       amount: props.data3,
    },
    {
      name: "Category 3",
       amount: props.data4,
    },
    {
      name: "Category 4",
       amount: props.data5,
    },
  ];
  return (
    <div>
      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default graph;
