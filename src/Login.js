import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "./images/tune.jpg";
import "./Login.css";
import "./Signin.css"
import showPassword from "./images/show-password.svg";
import hidePassword from "./images/hide-password.svg";

function Login() {

    const [name, setName] = useState();
    const [email1, setEmail1] = useState();
    const [pwd1, setPwd1] = useState();
    const [pwd2, setPwd2] = useState();
    const [dob, setDob] = useState();
    const [number, setNumber] = useState();

    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();

    const [modal, setModal] = useState(false);
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const login = e =>{
        console.log(email + pwd);
        e.prevDefault();
    }

    const toggleModal = () => {
        setModal(!modal);
    };

    const Signin = () => {
          return (
            <div className='modal'>
                <div className="overlay">
                    <div className="modalContent">
                          <h1 className="signin">Sign-Up</h1>
                        <button className="closeModal" onClick={toggleModal}>X</button>
                          <div className="form">
                              <form >
                            <label htmlFor='nameInput' className="nameLabel">Name</label>
                            <input type="text" name="nameLabel" id="nameInput" onChange={e => setName(e.target.value)} value={name} />
                            <label htmlFor='emailInput' className="emailLabel">E-mail id</label>
                            <input type="email" name="emailLabel" id="emailInput" onChange={e => setEmail1(e.target.value)} value={email1} />
                            <label htmlFor='password1Input' className="password1Label">Password</label>
                            <input type="password" name="password1Label" id="password1Input" onChange={e => setPwd1(e.target.value)} value={pwd1} />
                            <label htmlFor='password2Input' className="password2Label">Re-enter your password</label>
                            <input type="password" name="password2Label" id="password2Input" onChange={e => setPwd2(e.target.value)} value={pwd2} />
                            <label htmlFor='dobInput' className="dobLabel">Date of Birth</label>
                            <input type="date" name="dobLabel" id="dobInput" onChange={e => setDob(e.target.value)} value={dob} />
                            <label htmlFor='numberInput' className="numberLabel">Phone Number</label>
                            <input type="tel" name="numberLabel" id="numberInput" onChange={e => setNumber(e.target.value)} value={number} />
                            <button id='signinButton' type="submit">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <div className='container'>
            <div className="innerBox">
                <Link to="/">
                    <img src={logo} alt="logo" className='logo'/>
                </Link>
                <h1>Login</h1>  
                <form action="" onSubmit={login}>
                    <label htmlFor="email" id='emailL'>E-mail</label>
                    <input required type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                    <label htmlFor="password" id='passwordL'>Password</label>
                    <div className="pwdContainer">
                        <input required name="password" id='password' className="passwordInput" type={isRevealPwd ? "text" : "password"} value={pwd} onchange={(e) => setPwd(e.target.value)} />
                        <img alt="showPassword"  className='pwd-toggle' title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? showPassword : hidePassword} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                    </div>
                    <button type="submit" id='loginButton'>Log-in</button>
                </form>
                <p className="terms">By continuing, you agree to T-Une's Conditions of Use and Privacy Notice.</p>
                {/* <p className="terms"><hr /></p> */}
                  <p className="newAccount" onClick={toggleModal} >
                    Create new Account
                  </p>
            </div>
            {/* {modal && <SignIn />} */}
            {modal && Signin()}
        </div>
    )    
}

export default Login
