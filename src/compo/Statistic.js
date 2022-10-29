import React from "react";

export default function Statistic(props) {
  function renderSwitch(value) {
    if (value < 0) {
      return <span>0&nbsp;DH</span>;
    } else if (value > 0) {
      return <span className="text-success">{props.total}&nbsp;DH</span>;
    } else {
      return <span>{props.total}&nbsp;DH</span>;
    }
  }
  return (
    <div style={{ width: "50%", margin: "0px auto", textAlign: "center" }}>
      <h3>TOTAL : &nbsp;{renderSwitch(props.total)} </h3>
    </div>
  );
}
