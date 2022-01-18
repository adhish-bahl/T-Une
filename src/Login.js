import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "./images/tune.jpg";
import "./login.css";
import showPassword from "./images/show-password.svg";
import hidePassword from "./images/hide-password.svg";

function Login() {

    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [isRevealPwd, setIsRevealPwd] = useState(false);


    // login(e) {
    //     alert("Hello");
    //     e.prevDefault();
    // }

    const login = e =>{
        pwd = 
        window.alert(email + pwd);
        e.prevDefault();
    }

    return (
        <div className='container'>
            <div className="innerBox">
                <img src={logo} alt="logo" className='logo'/>
                <h1>Login</h1>
                <form action="" onSubmit={login}>
                    <label htmlFor="email" id='emailL'>E-mail</label>
                    <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                    <label htmlFor="password" id='passwordL'>Password</label>
                    <div className="pwdContainer">
                        <input name="password" id='password' className="passwordInput" type={isRevealPwd ? "text" : "password"} value={pwd} onchange={(e) => setPwd(e.target.value)} />
                        <img alt="showPassword"  className='pwd-toggle' title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? showPassword : hidePassword} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                    </div>
                    <button type="submit" id='loginButton'>Log-in</button>
                </form>
                <p className="terms">By continuing, you agree to T-Une's Conditions of Use and Privacy Notice.</p>
                {/* <p className="terms"><hr /></p> */}
                  <Link>
                  <p className="newAccount">
                    Create new Account
                  </p>
                  </Link>
            </div>
        </div>
    )
}

export default Login
