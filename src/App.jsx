import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AllExercises from "./data/listOfExercises";
import { Exercise } from "./exerciseComponent/exercise";
import { MainPage } from "./mainPageComponent/mainpage";
import { ExerciseRouterPrefix } from "./constants"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MainPage {...AllExercises[0].props} />
            </Route>
            <Route
              exact
              path={ExerciseRouterPrefix + "/:id"}
              render={({ match }) => (
                <Exercise
                  {...AllExercises.find(
                    composite => composite.path === "/" + match.params.id
                  ).props}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
