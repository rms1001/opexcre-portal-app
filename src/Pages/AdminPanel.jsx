import React from "react";
import { usePropertyContext } from "../Context/PropertyContext";

export const AdminPanel = () => {
  const { properties, setProperties } = usePropertyContext();

  const handleChange = (e, id, key) => {
    const updated = properties.map((prop) =>
      prop.id === id ? { ...prop, [key]: e.target.value } : prop
    );
    setProperties(updated);
  };

  const handleSave = () => {
    console.log("✅ Saved properties:", properties);
    // Future: send to backend or localStorage
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Property Management</h1>
      {properties.map((property) => (
        <div key={property.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={property.name}
              onChange={(e) => handleChange(e, property.id, "name")}
              className="p-2 border rounded"
              placeholder="Name"
            />
            <input
              type="text"
              value={property.type}
              onChange={(e) => handleChange(e, property.id, "type")}
              className="p-2 border rounded"
              placeholder="Type"
            />
            <input
              type="number"
              value={property.squareFeet}
              onChange={(e) => handleChange(e, property.id, "squareFeet")}
              className="p-2 border rounded"
              placeholder="Square Feet"
            />
            <input
              type="number"
              value={property.occupancy}
              onChange={(e) => handleChange(e, property.id, "occupancy")}
              className="p-2 border rounded"
              placeholder="Occupancy %"
            />
            <input
              type="number"
              value={property.value}
              onChange={(e) => handleChange(e, property.id, "value")}
              className="p-2 border rounded"
              placeholder="Value"
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
};
export default AdminPanel;