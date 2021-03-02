import logo from "./logo.svg";
import "./App.css";
import Hotel from "./components/hotels";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  browserHistory,
} from "react-router-dom";
import { useParams } from "react-router";
function User() {
  let { name } = useParams();
  return <h2>User {name}</h2>;
}
function App() {
  return (
    <>
      <Router>
        <Switch>         
          <Route exact path="/" children={<Hotel props="" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
