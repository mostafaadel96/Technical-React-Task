import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function LineChart({ days, cad, eur,usd }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Currency Chart",
      },
    },
  };

  const labels = days;

  const data = {
    labels,
    datasets: [
      {
        label: "CAD",
        data: cad,
        borderColor: "#e91e37",
        backgroundColor: "#e91e37",
        tension: 0.4,
        pointRadius	:".5",
      },
      {
        label: "EUR",
        data: eur,
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        tension: 0.4,
        pointRadius	:".5",
      },
      {
        label: "USD",
        data: usd,
        borderColor: "#41b144",
        backgroundColor: "#41b144",
        tension: 0.4,
        pointRadius	:".5",
      },
    ],
  };
  console.log(days);

  return (
    <div style={{ width: "500px", height: "500px", marginTop: "50px" }}>
    <h2 style={{marginTop:"-50px"}}>LineChart</h2>
      <Line data={data} options={options}></Line>
    </div>
  );
}
