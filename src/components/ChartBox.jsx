import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartBox = ({ property }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: `${property.name} Occupancy %`,
        data: property.occupancyData,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow" style={{ height: "200px" }}>
      <h4 className="font-semibold text-sm mb-2">Occupancy Rate</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartBox;
