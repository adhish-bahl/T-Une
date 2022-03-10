import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import Store from './Store';
import FeedbackPage from './FeedbackPage';
import ExplorePage from './ExplorePage';
import Trending from './Trending'

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/trending">
                    <Header />
                    <Trending />
                    <Footer />
                </Route>

                <Route path="/feedback">
                    <Header />
                    <FeedbackPage />
                    <Footer />
                </Route>

                <Route path="/quiz">
                    <Header />
                    <Footer />
                </Route>
                
                <Route path="/explore">
                    <Header />
                    <ExplorePage />
                    <Footer />
                </Route>

                <Route path="/store">
                    <Header />
                    <Store />
                    <Footer />
                </Route>

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
