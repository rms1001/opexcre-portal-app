import React from "react";
import { usePropertyContext } from "../Context/PropertyContext";
import PropertyCard from "../components/PropertyCard";
import ChartBox from "../components/ChartBox";
import FileList from "../components/FileList";

function Dashboard() {
  const { properties } = usePropertyContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome, Brian</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <ChartBox title="Occupancy Rate" dataKey="occupancy" />
        <ChartBox title="NOI YTD" dataKey="value" />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Files</h2>
        <FileList />
      </div>
    </div>
  );
}

export default Dashboard;
