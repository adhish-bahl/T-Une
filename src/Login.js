import React, {useState, } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import logo from "./images/tune.jpg";
import "./Login.css";
import "./Signin.css"
import showPassword from "./images/show-password.svg";
import hidePassword from "./images/hide-password.svg";
// import axiosbaseurl from "./axiosbaseurl";
// import SelectingPreference from './SelectingPreference';
// import { UserContext } from './Interface';

function Login(props) {

    const [signInMessageBoxContent, setSignInMessageBoxContent] = useState();
    const [logInMessageBoxContent, setLogInMessageBoxContent] = useState();

    const [name, setName] = useState();
    const [email1, setEmail1] = useState();
    const [pwd1, setPwd1] = useState();
    const [pwd2, setPwd2] = useState();
    const [dob, setDob] = useState();
    const [number, setNumber] = useState();
    var [signRes, setSignRes] = useState("Success");
    var [logRes, setLogRes] = useState("");

    const [email, setEmail] = useState();
    const [password, setPwd] = useState();

    const [modal, setModal] = useState(false);
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    
    const [data, setData] = useState([]);
    const history = useHistory();
    // const { _, dispatch } = useContext(UserContext);

    // var nameExpression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var nameExpression = /^[a-zA-Z]+ [a-zA-Z]+$/; 
    var emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var passwordExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var numberExpression = /^[6-9]\d{9}$/;

    // const login = e =>{
    //     console.log(email + pwd);
    //     e.prevDefault();
    // }

    const toggleModal = () => {
        setModal(!modal);
    };

    const makeSignInRequest = () => {
        var currentTime = new Date();
        const age = (currentTime.getFullYear() - parseInt(dob.substring(0, 4))); 

         const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                console.log(this.responseText);
                setSignRes(signRes =  this.responseText);
                if(signRes === "Success") {
                    setSignInMessageBoxContent("Account created successfully! Please Wait...");
                    props.getEmail(email1);
                    setTimeout(function() {

                        setSignInMessageBoxContent("");
                        // toggleModal();
                        // <Redirect to="/selectpreference" />

                        history.push({
                        pathname: "/selectpreference",
                        state: {
                            needsRefresh: true,
                        },
                        })
                    

                        // <SelectingPreference />
                    }, 3000);


                } else {
                    setSignInMessageBoxContent("Oops, something went wrong. Check all details and try again.");
                }
            }
            xhttp.open("POST", "https://t-une.000webhostapp.com/SignIn.php?fname="+name+"&password="+pwd1+"&dob="+dob+"&phno="+number+"&email="+email1+"&age="+age);
            xhttp.send();
    }

    const checkName = () => {
        if(!nameExpression.test(name)) {
            setSignInMessageBoxContent("Incorrect Name Input");
        } else {
            setSignInMessageBoxContent("");
        }
    }

    const checkEmail = () => {
        if(!emailExpression.test(email1)) {
            setSignInMessageBoxContent("Incorrect Email Input");
        } else {
            setSignInMessageBoxContent("");
        }
    }

    const checkPassword1 = () => {
        if(!passwordExpression.test(pwd1)) {
            setSignInMessageBoxContent("Incorrect Password Input");
        } else {
            setSignInMessageBoxContent("");
        }
    }

    const checkPassword2 = () => {
        if(!passwordExpression.test(pwd2)) {
            setSignInMessageBoxContent("Incorrect Password Input");
        } else {
            setSignInMessageBoxContent("");
        }
    }

    const checkPhone = () => {
        if(!numberExpression.test(number)) {
            setSignInMessageBoxContent("Incorrect phone number Input");
        } else {
            setSignInMessageBoxContent("");
        }

    }


    const handleSignIn = (e) => {
        e.preventDefault();
        
        // console.log(age);
        // axiosbaseurl.post(`SignIn.php?fname=`+name+"&password="+pwd1+"&dob="+dob+"&phno="+number)
        // // axiosbaseurl.post("SignIn.php", obj)
        // .then(res => {
        //     console.log(res);
        // })


        // useEffect(() => {
        //     async function fetchData() {
        //         const request = await axiosbaseurl.post(`SignIn.php?fname=`+name+"&password="+pwd1+"&dob="+dob+"&phno="+number)
        //         .then(({data}) => {
        //             console.log(data);
        //         })
        //         // setData(request.data);
        //         // return request;
        //     }
        //     fetchData();
        // }, []);

        

        if(pwd1 === pwd2) {
            if(pwd1.length < 8)
            {
                setSignInMessageBoxContent("Password  must be atleast 8 characters.")
            } else {
                if(!passwordExpression.test(pwd1))
                {
                    setSignInMessageBoxContent("Password must have atleast one number and special character.")
                } else {
                    makeSignInRequest();
                }
            }
        } else {
            setSignInMessageBoxContent("Passwords does not match.");
        }
    }

    function checkLogin() {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://t-une.000webhostapp.com/login.php?email="+email+"&password="+password, false);

        xhttp.onload = function(e) {
            const incomingData = JSON.parse(this.responseText);
            setLogRes(logRes = incomingData.result);
            console.log(logRes);
            console.log(incomingData);
            if(logRes === "Login Succesful") {
                setLogInMessageBoxContent("Logged In Sucessfully!");
                props.authentication(true);
                props.getEmail(incomingData.email);
                props.getName(incomingData.name);
                props.getUserId(incomingData.userid);
                // console.log(incomingData.userid);
                // localStorage.setItem("user",incomingData.name);
                // localStorage.setItem("user",JSON.stringify(incomingData.name));
                // dispatch({type: "USER", payload: incomingData.email });
                history.push({
                  pathname: "/",
                  state: {
                    needsRefresh: true,
                  },
                })
            } else if(logRes === "Invalid E-mail") {
                setLogInMessageBoxContent("Oops, Email seems to be new, try Signing In first.")
                props.authentication(false);
                props.getEmail("");
                props.getName("");
            } else {
                setLogInMessageBoxContent("Oops, something went wrong. Check all details and try again.")
                props.authentication(false);
                props.getEmail("");
                props.getName("");
            }
        }
        xhttp.send();
    }

    const handleLogIn = (e) => {

        e.preventDefault();
        checkLogin();
    }

    const Signin = () => {
          return (
            <div className='modal'>
                <div className="overlay">
                    <div className="modalContent">
                    {/* <div className={` ${quizActive ? 'modalContent' : 'modalContent'}`}>*/}
                          <h1 className="signin">Sign-Up</h1>
                        <button className="closeModal" onClick={toggleModal}>X</button>
                          <div className="form">
                            <form onSubmit={handleSignIn}>
                            <label htmlFor='nameInput' className="nameLabel">Name</label>
                            {/* <input type="text" name="nameLabel" id="nameInput" onChange={e => setName(e.target.value)} value={name} /> */}
                            <input type="text" name="nameLabel" id="nameInput" required onChange={e => {setName(e.target.value)}} onBlur={checkName} />
                            <label htmlFor='emailInput' className="emailLabel">E-mail id</label>
                            <input type="email" name="emailLabel" id="emailInput" required onChange={e => setEmail1(e.target.value)} onBlur={checkEmail} />
                            {/* <input type="email" name="emailLabel" id="emailInput" onChange={e => setEmail1(e.target.value)} value={email1} /> */}
                            <label htmlFor='password1Input' className="password1Label">Password</label>
                            {/* <input type="password" name="password1Label" id="password1Input" required onChange={e => setPwd1(e.target.value)}  /> */}
                            <div className="pwdContainer">
                                <input required name="password1Label" id='password1Input' type={isRevealPwd ? "text" : "password"} onChange={(e) => setPwd1(e.target.value)} onBlur={checkPassword1}/>
                                <img alt="showPassword"  className='pwd-toggle' title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? showPassword : hidePassword} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                            </div>
                            {/* <input type="password" name="password1Label" id="password1Input" onChange={e => setPwd1(e.target.value)} value={pwd1} /> */}
                            <label htmlFor='password2Input' className="password2Label">Re-enter your password</label>
                            <input type="password" name="password2Label" id="password2Input" required onChange={e => setPwd2(e.target.value)} onBlur={checkPassword2} />
                            {/* <input type="password" name="password2Label" id="password2Input" onChange={e => setPwd2(e.target.value)} value={pwd2} /> */}
                            <label htmlFor='dobInput' className="dobLabel">Date of Birth</label>
                            <input type="date" name="dobLabel" id="dobInput" required onChange={e => setDob(e.target.value)}  />
                            {/* <input type="date" name="dobLabel" id="dobInput" onChange={e => setDob(e.target.value)} value={dob} /> */}
                            <label htmlFor='numberInput' className="numberLabel">Phone Number</label>
                            <input type="tel" name="numberLabel" id="numberInput" required onChange={e => setNumber(e.target.value)} onBlur={checkPhone} />
                            {/* <input type="tel" name="numberLabel" id="numberInput" onChange={e => setNumber(e.target.value)} value={number} /> */}
                            <button id='signinButton' type="submit">Sign In</button>
                            </form>
                            <div className="message">{signInMessageBoxContent}</div>
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <div className='container'>
            <div className="innerBox">
                <Link to="/explore">
                    <img src={logo} alt="logo" className='logo'/>
                </Link>
                <h1>Login</h1>  
                <form onSubmit={handleLogIn}>
                    <label htmlFor="email" id='emailL'>E-mail</label>
                    <input required type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password" id='passwordL'>Password</label>
                    <div className="pwdContainer">
                        <input required name="password" id='password' className="passwordInput" type={isRevealPwd ? "text" : "password"} onChange={(e) => setPwd(e.target.value)} />
                        <img alt="showPassword"  className='pwd-toggle' title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? showPassword : hidePassword} onClick={() => setIsRevealPwd(prevState => !prevState)} />
                    </div>
                    <button type="submit" id='loginButton'>Log-in</button>
                </form>

                <div className="message">{logInMessageBoxContent}</div>

                <p className="terms">By continuing, you agree to T-Une's Conditions of Use and Privacy Notice.</p>
                  <p className="newAccount" onClick={toggleModal} >
                    Create new Account
                  </p>
            </div>

            {modal && Signin()}
        </div>
    )    
}

export default Login
