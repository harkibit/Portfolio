import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./screen/Main/Main";
import { useFlip, FlipProvider } from "react-easy-flip";

function App() {
  return (
    <FlipProvider>
      <div className="App">
        <Router>
          <Route exact path="/">
            <Main data-flip-root-id="flip-root"/>
          </Route>
        </Router>
      </div>
    </FlipProvider>
  );
}

export default App;
