import React from "react";
import { ExerciseRouterPrefix, AllTags } from "../constants";
import AllExercises from "../data/listOfExercises";
import "./mainpage.css";
import "../App.css";

/**
 * this function takes a list of exercises and then makes links for them
 * 
 * @param {Object[]} composites the list of exercises
 * @returns an array of <li> tags with <a> tags nested within
 */
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
 * This function is a future feature to sort an array of exercises by tag and return them to the user
 *
 * @param {String[]} tag this is a list of tags
 * @param {Object[]} composites list of exercises
 * @returns an array of filtered exercises by inputted tag
 */
const searchViaTag = (tag, composites = AllExercises) => {
  // debugging to see what arguments the function was called with
  // console.log("called searchViaTag with", tag);

  // filtering through the composites
  return typeof tag === "object" || tag === "all"
    ? composites
    : composites.filter(composite => {
        return composite.tags.includes(tag);
      });
};
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
