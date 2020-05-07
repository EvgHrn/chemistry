import React from 'react';
import './App.css';
import { RoadMap } from './screens/RoadMap';
import { Lessons } from './screens/Lessons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/lessons/:category">
            <Lessons />
          </Route>
          <Route path="/">
            <RoadMap />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
