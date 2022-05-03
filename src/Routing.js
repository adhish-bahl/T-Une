import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
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
// import { UserContext } from "./Interface";

function Routing() {

    var [auth, setAuth] = useState(false);
    var [name, setName] = useState();
    var [email, setEmail] = useState();

    
    // const { state, dispatch } = useContext(UserContext);

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

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            // dispatch({ type: "USER", payload: user });
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/ourteam">
                        <Header  user={auth ? name : "Guest"} auth={auth}/>
                        <Team />
                        <Footer />
                    </Route>

                    <Route exact path="/selectpreference">
                        {/* <Header  user={auth ? name : "Guest"} auth={auth}/> */}
                        <SelectingPreference />
                        {/* <Footer /> */}
                    </Route>

                    <Route exact  path="/trending">
                        <Header user={auth ? name : "Guest"} />
                        <Trending />
                        <Footer />
                    </Route>

                    <Route exact path="/feedback">
                        <Header user={auth ? name : "Guest"} />
                        <FeedbackPage />
                        <Footer />
                    </Route>

                    <Route exact path="/quiz">
                        <Header user={auth ? name : "Guest"} />
                        <Footer />
                    </Route>
                    
                    <Route exact path="/explore">
                        <Header user={auth ? name : "Guest"} />
                        <ExplorePage />
                        <Footer />
                    </Route>

                    <Route exact path="/store">
                        <Header user={auth ? name : "Guest"} />
                        <Store />
                        <Footer />
                    </Route>

                    <Route path="/login">
                        <Login authentication={pull_auth} getEmail={pull_email}  getName={pull_name} />
                    </Route>

                    <Route path="/">
                        <Header user={auth ? name : "Guest"} />

                        {/* {auth ? <HomePage /> : history.push("/login")} */}
                        {auth ? <HomePage /> : <Redirect to="/login" />}

                        {/* {if (auth) {
                            <HomePage />
                        } else {
                            history.push({
                                pathname: "/login",
                                state: {
                                    needsRefresh: true,
                                },
                            })
                        }} */}
                        <Footer />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default Routing