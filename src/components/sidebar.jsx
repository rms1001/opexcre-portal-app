import React from "react";
import { FaChartPie, FaBuilding, FaFolderOpen } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-900 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-8">📊 PEX</div>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <FaChartPie /> <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <FaBuilding /> <span>Properties</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <FaFolderOpen /> <span>Files</span>
        </a>
      </nav>
    </aside>
  );
}
