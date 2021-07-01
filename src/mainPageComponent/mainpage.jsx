import React from "react";
import "./mainpage.css";

export function MainPage(props) {
  return (
    <div className="exerciseContainer">
      <h1>{props.title}</h1>
      <div className="exerciseInner">
        <h1>Main Page</h1>
        <p>{props.innertext}</p>
      </div>
    </div>
  );
}
