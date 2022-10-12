import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center">404</h1>
      <div className="text-center">
        <button className="bg-primary">
          <Link className="text-decoration-none text-white fw-bold" to="/">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
