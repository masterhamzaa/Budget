import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function ChartStatistic(props) {
  return (
    <div className="container-fluid">
      <Bar data={props.chartdata} options={props.option} />
    </div>
  );
}
