import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  labels: string[];
  dataPoints: number[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  labels,
  dataPoints,
}) => {
  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Transactions",
        data: dataPoints,
        fill: true,
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Lighter red fill
        tension: 0.1,
        pointRadius: 0, // Remove points on the line
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false, // Hide legend if not needed
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw as number; // Assert type
            return `₦${value.toLocaleString()}`; // Format tooltip label
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Customers",
        },
      },
      y: {
        title: {
          display: true,
          text: "Transactions",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-96">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
