import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/details/:idLeague">
            <LeagueDetail/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};



function Users() {
  return <h2>Users</h2>;
}

export default App;
