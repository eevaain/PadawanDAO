import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Players, Proposals } from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/proposals" exact component={() => <Proposals />} />
          <Route path="/players" exact component={() => <Players />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
