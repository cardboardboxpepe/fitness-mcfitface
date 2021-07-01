import React from "react";
import "./exercise.css";

export function Exercise(props) {
  return (
    <>
      <a href="/">Back to main page</a>
      <div className="exerciseContainer">
        <h1>{props.title}</h1>
        <div className="exerciseInner">
          <p>{props.innertext}</p>
        </div>
      </div>
    </>
  );
}
