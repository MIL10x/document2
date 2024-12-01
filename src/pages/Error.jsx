import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="w-full flex flex-col items-center pt-32 gap-5">
      <i className="bi bi-bug text-9xl"></i>
      <p className="text-3xl font-semibold">!Oops Page Not found</p>
      <Link
        to="/"
        className="text-md p-4 bg-blue-500 text-white dark:bg-gray-900 rounded-xl"
      >
        Home 👉
      </Link>
    </div>
  );
};

export default Error;
