import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./screen/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Main data-flip-root-id="flip-root" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
