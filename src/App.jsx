import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AllExercises from "./listOfExercises";

const CreateRoute = composite => {
  return (
    <>
      <a href={composite.path}>{composite.path}</a>
      <Route path={composite.path}>
        {composite.component(composite.props)}
      </Route>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            {AllExercises.map(composite => {
              CreateRoute(composite)
            })}
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
