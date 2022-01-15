import React from 'react';
import {Link} from "react-router-dom";
import logo from "./images/tune.jpg";
import "./login.css";

function Login() {
    return (
        <div className='container'>
            <div className="innerBox">
                <img src={logo} alt="logo" className='logo'/>
                <h1>Login</h1>
                <form action="">
                    <label htmlFor="email" id='email'>E-mail</label>
                    <input type="email" name="email" id="emailImput" />
                    <label htmlFor="password" id='password'>Password</label>
                    <input type="password" name="password" id="passwordInput" />
                    <i class="bi bi-eye-slash" id="togglePassword"></i>
                    <button type="submit" id='loginButton'>Log-in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
