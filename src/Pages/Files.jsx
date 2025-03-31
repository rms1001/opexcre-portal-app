import React from "react";

const Files = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Property Files</h1>
      <p>You can view or manage all files across properties here.</p>
      <ul className="mt-4 list-disc list-inside">
        <li><a href="#">Gateway Lease.pdf</a></li>
        <li><a href="#">Park Plaza CapEx.xlsx</a></li>
        <li><a href="#">Hatfield Rent Roll.pdf</a></li>
      </ul>
    </div>
  );
};

export default Files;
