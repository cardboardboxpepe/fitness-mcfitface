import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AllExercises from "./data/listOfExercises";
import { Exercise } from "./exerciseComponent/exercise";
import { MainPage } from "./mainPageComponent/mainpage";
import { ExerciseRouterPrefix } from "./constants";
import Header from "./headerComponent/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="App-body">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MainPage/>
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
      </section>
    </div>
  );
}

export default App;
