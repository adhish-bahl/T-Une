import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/">
                    <Header />
                    <HomePage />
                    {/* <h1>This is react App</h1> */}
                    <Footer />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
