import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/">
                    <h1>This is react App</h1>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
