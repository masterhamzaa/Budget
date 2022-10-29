import React from "react";
import "./Animloading.css";

export default function Animloading() {
  return (
    <div>
      <div className="c">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
}
