import React from "react";
import { ExerciseRouterPrefix } from "../constants";
import AllExercises from "../data/listOfExercises";
import "./mainpage.css";
import "../App.css";

const createLinks = composites => {
  return composites.map((composite, index) => {
    return (
      <li key={index}>
        <a className="App-link" href={ExerciseRouterPrefix + composite.path}>
          {composite.props.title}
        </a>
      </li>
    );
  });
};

function MainPage() {
  return (
    <div className="Main-container">
      <h1>"Welcome to Fitness McFitFace"</h1>
      <div className="Main-inner">
        <h1>Main Page</h1>
        <h2>
          Here is a list of all the exercises catalogged within this website
        </h2>
        <ul>{createLinks(AllExercises)}</ul>
      </div>
    </div>
  );
}

export default MainPage;
