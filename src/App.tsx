import React from 'react';
import './App.css';
import { RoadMap } from './screens/RoadMap';
import { Lessons } from './screens/Lessons';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PouchDB from 'pouchdb';
import {Theory} from "./screens/Theory";

function App() {

  const progressDb = new PouchDB('progress');

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/lessons/:category">
            <Lessons />
          </Route>
          <Route path="/theory/:category/:title">
            <Theory />
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
