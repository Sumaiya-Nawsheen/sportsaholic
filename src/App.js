import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:idLeague">
            <div>
              <LeagueDetail />
            </div>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>

  );
};

export default App;
