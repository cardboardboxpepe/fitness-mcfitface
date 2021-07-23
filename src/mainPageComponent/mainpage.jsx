import React from "react";
import { ExerciseRouterPrefix } from "../constants";
import AllExercises from "../data/listOfExercises";
import "./mainpage.css";

const createLinks = composites => {
  return composites.map(composite => {
    return (
      <li>
        <a href={ExerciseRouterPrefix + composite.path}>
          {composite.props.title}
        </a>
      </li>
    );
  });
};

export function MainPage(props) {
  return (
    <div className="exerciseContainer">
      <h1>"Welcome to Fitness McFitFace"</h1>
      <div className="exerciseInner">
        <h1>Main Page</h1>
        <p>"This website is powered by react."</p>
        <h2>
          Here is a list of all the exercises catalogged within this website
        </h2>
        <ul>{createLinks(AllExercises)}</ul>
      </div>
    </div>
  );
}
