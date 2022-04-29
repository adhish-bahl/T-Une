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
import SelectingPreference from './SelectingPreference';

function App() {

    var [auth, setAuth] = useState(false);
    var [name, setName] = useState();
    var [email, setEmail] = useState();
    // setName(name = name.split(" "));
    // const [firstName, ...rest] = name.split(' ');

    const pull_name = (data) => {
        const [firstName, ...rest] = data.split(' ');
        setName(firstName);
    }
    const pull_email = (data) => {
        setEmail(data);
    }
    const pull_auth = (data) => {
        setAuth(data);
    }

  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/ourteam">
                    <Header  user={auth ? name : "Guest"} auth={auth}/>
                    <Team />
                    <Footer />
                </Route>

                <Route path="/selectpreference">
                    {/* <Header  user={auth ? name : "Guest"} auth={auth}/> */}
                    <SelectingPreference />
                    {/* <Footer /> */}
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
                    <Footer />
                </Route>

            </Switch>
        </div>
    </Router>
  );
}

export default App;
