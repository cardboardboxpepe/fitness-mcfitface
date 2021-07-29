import React from "react";
import "./exercise.css";

function Exercise(props) {
  return (
    <>
      <a href="/">Back to main page</a>
      <div className="Exercise-container">
        <h1>{props.title}</h1>
        <div className="Exercise-inner">
          <p>{props.innertext}</p>
        </div>
      </div>
    </>
  );
}

export default Exercise;
