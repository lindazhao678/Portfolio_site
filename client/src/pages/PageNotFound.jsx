import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="m-5 row">
      <div>
        <h1 className="text-dark m-5">404</h1>
        <p className="text-dark m-5">
          OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!
        </p>
        <button className="go-to-homepage-button m-5" onClick={handleClick}>
          Go to homepage {">>"}
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
