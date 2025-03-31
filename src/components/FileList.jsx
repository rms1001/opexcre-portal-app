import React from "react";
import { FaFileAlt } from "react-icons/fa";

const FileList = ({ files }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow">
      {files.map((file, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <FaFileAlt className="text-gray-500" />
          <span>{file.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FileList;
