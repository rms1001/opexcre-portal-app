import React, { createContext, useState, useContext } from "react";
import propertyData from "../data/properties.json";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(propertyData);
  const [currentUser, setCurrentUser] = useState("Brian");

  const updateProperty = (id, updatedData) => {
    const updated = properties.map((p) =>
      p.id === id ? { ...p, ...updatedData } : p
    );
    setProperties(updated);
  };

  return (
    <PropertyContext.Provider value={{ properties, updateProperty, currentUser }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => useContext(PropertyContext);
