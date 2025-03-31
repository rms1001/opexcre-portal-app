import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties.json";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return <p>Property not found.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <p>Type: {property.type}</p>
      <p>Square Feet: {property.squareFeet.toLocaleString()}</p>
      <p>Occupancy: {property.occupancy}%</p>
      <p>Value: ${property.value.toLocaleString()}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Files</h2>
      <ul className="list-disc list-inside">
        <li><a href="#">Lease Agreement.pdf</a></li>
        <li><a href="#">CapEx Budget.xlsx</a></li>
        <li><a href="#">Rent Roll - March.pdf</a></li>
      </ul>
    </div>
  );
};

export default PropertyDetails;
