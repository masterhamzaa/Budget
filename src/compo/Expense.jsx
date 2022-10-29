import React from "react";

export default function Expense(props) {
  return (
    <div className="container-fluid">
      {props.e.map((exp, index) => {
        return (
          <div
            className="input-group mb-3 mt-3 col-lg-12 col-sm-12"
            key={index}
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text text-success"
                style={{ backgroundColor: "white", color: "green" }}
              >
                {props.cat[index]}
              </span>
            </div>
            <input
              type="number"
              min="0"
              className="form-control"
              id={index}
              name={props.cat[index]}
              onChange={props.change}
            />
          </div>
        );
      })}
    </div>
  );
}
