import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import "./App.scss";

const App = ({ match, location, history }) => {
  console.log({ match, location, history });
  return (
    <div className="App">
      <header className="App__header">
        <nav>
          <ul>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App__content">
        <Switch>
          <Route path="/work" exact>
            <span>Work</span>
          </Route>
          <Route path="/education" exact>
            <span>Education</span>
          </Route>
          <Route path="/about" exact>
            <span>About</span>
          </Route>
          <Route path="/skills" exact>
            <span>Skills</span>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(App);
