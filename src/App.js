import React, {useState} from 'react';
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
import Team from './Team';

function App() {

    const [auth, setAuth] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const pull_name = (data) => {
        setName(data);
    }
    const pull_email = (data) => {
        setEmail(data);
    }
    const pull_auth = (data) => {
        setAuth(data);
    }

    // console.log(auth);
    // console.log(email);

  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/ourteam">
                    <Header user={auth ? name : "Guest"} />
                    <Team />
                    <Footer />
                </Route>

                <Route path="/trending">
                    <Header user={auth ? name : "Guest"} />
                    <Trending />
                    <Footer />
                </Route>

                <Route path="/feedback">
                    <Header user={auth ? name : "Guest"} />
                    <FeedbackPage />
                    <Footer />
                </Route>

                <Route path="/quiz">
                    <Header user={auth ? name : "Guest"} />
                    <Footer />
                </Route>
                
                <Route path="/explore">
                    <Header user={auth ? name : "Guest"} />
                    <ExplorePage />
                    <Footer />
                </Route>

                <Route path="/store">
                    <Header user={auth ? name : "Guest"} />
                    <Store />
                    <Footer />
                </Route>

                <Route path="/login">
                    <Login authentication={pull_auth} getEmail={pull_email}  getName={pull_name} />
                </Route>

                <Route path="/">
                    <Header user={auth ? name : "Guest"} />
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
