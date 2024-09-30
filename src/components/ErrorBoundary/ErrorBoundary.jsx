import React from "react";
import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div>
      <div>
        <h1 className="text-red-600  text-3xl">Oops! Something went wrong.</h1>
        <p className="text-lg">An unexpected error occurred.</p>
        <Link
          className=" text-base font-medium text-gray-900 hover:text-gray-500"
          to={"/"}
        >
          Click hear to navigate to Home page.
        </Link>
      </div>
    </div>
  );
}

export default ErrorBoundary;
