import React from "react";
import { Bar } from "react-chartjs-2";
export default function ChartStatistic(props) {
  return (
    <div className="container-fluid">
      <Bar data={props.chartdata}  />
    </div>
  );
}
