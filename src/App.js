import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './screen/Main/Main';
import * as THREE from "three";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/"><Main/></Route>
      </Router>
    </div>
  );
}

export default App;
