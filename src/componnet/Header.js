import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="continer">
      <div>
        <Link to="/">
          <h1>where in the world?</h1>
        </Link>
      </div>
      <div>
        <i className="fas fa-moon"></i>
      </div>
    </div>
  );
};
