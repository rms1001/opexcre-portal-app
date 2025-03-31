import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border hover:shadow-md transition cursor-pointer">
      <h3 className="text-lg font-semibold">{property.name}</h3>
      <p className="text-sm text-gray-500">{property.size}</p>
      <p className="text-sm text-gray-600">{property.occupancy}</p>
      <p className="text-sm text-gray-800 font-semibold mt-2">
        {property.value}
      </p>
    </div>
  );
};

export default PropertyCard;
