import React from "react";
import { ExerciseRouterPrefix, AllTags } from "../constants";
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

/**
 * Takes an array of tags and turns them into an array of div elements to be presented on screen
 *
 * @param {String[]} tags list of tags
 * @returns an array of tags turned into <div>s
 */
const createTagButtons = tags => {
  return tags.map((tag, index) => {
    return (
      <li className="Main-tag" key={index}>
        <span>{tag}</span>
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
        <h2>Here is a list of exercises sorted by tag</h2>
        <div className="Main-tagspread">{createTagButtons(AllTags)}</div>
      </div>
    </div>
  );
}

export default MainPage;
