import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { Dashboard } from "./Pages/Dashboard";  // 👈 matches named export
import Login from "./Pages/Login";
import AdminPanel from "./Pages/AdminPanel";
import PropertyDetails from "./Pages/PropertyDetails";
import Files from "./Pages/Files";
import { PropertyProvider } from "./Context/PropertyContext";

export default function App() {
  return (
    <PropertyProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/files" element={<Files />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PropertyProvider>
  );
}
