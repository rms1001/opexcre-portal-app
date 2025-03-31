import React from "react";
import { FaChartPie, FaBuilding, FaFolderOpen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <FaChartPie />, path: "/" },
    { label: "Properties", icon: <FaBuilding />, path: "/admin" },
    { label: "Files", icon: <FaFolderOpen />, path: "/files" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <img src={logo} alt="Logo" className="w-32 mb-8" />

        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-md ${
                location.pathname === item.path
                  ? "bg-gray-800"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default Layout;
