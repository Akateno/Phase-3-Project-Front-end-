import React from 'react';
import NavBar from './components/NavBar';
import DogContainer from './components/DogContainer';
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home";



function App() {
  return (
    <div className="container">
      <NavBar/>
      <Switch>
        <Route path="/adopt">
        <DogContainer/>
        </Route>
        {/* <Route path="/applicants">
          <ApplicantPage/>
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
