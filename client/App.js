import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MapView from "./MapView";

export default App = () => {
  return (
    <Router>
      <div>
        <h1>Student Dashboard</h1>
      </div>

      <Switch>
        <h1>Student Dashboard</h1>
        <Route path="/" component={MapView} />
      </Switch>
    </Router>
  );
};
