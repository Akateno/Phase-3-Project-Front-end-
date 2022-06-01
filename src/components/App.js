import React from "react";
import NavBar from "./NavBar";
import DogContainer from "./DogContainer";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ApplicantPage from "./ApplicantPage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/adopt">
          <DogContainer />
        </Route>
        <Route path="/applicants">
          <ApplicantPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
