import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';

function App() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/appointment">
                <Appointment />
            </Route>
          </Switch>
        </Router>
    )
}

export default App
