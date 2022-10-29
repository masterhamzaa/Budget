import React from "react";

export default function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <a className="navbar-brand" href="http://localhost:3000">
        HAMZA
      </a>

      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={props.editIncome}
      >
        Income
      </button>
    </nav>
  );
}
