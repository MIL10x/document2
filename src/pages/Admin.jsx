import React from "react";

const Admin = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 py-24 px-5">
      <p className="text-center">click to clear feedback</p>
      <button className="bg-blue-500 text-white p-2 px-3 rounded-lg">
        Clear the feedback
      </button>
    </div>
  );
};

export default Admin;
