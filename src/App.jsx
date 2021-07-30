import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ExerciseRouterPrefix } from "./constants";
import AllExercises from "./data/listOfExercises";
import Exercise from "./exerciseComponent/exercise";
import MainPage from "./mainPageComponent/mainpage";
import Header from "./headerComponent/header";
import Footer from "./footerComponent/footer";

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
      <Footer/>
    </div>
  );
}

export default App;
