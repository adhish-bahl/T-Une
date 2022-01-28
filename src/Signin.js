import React, {useState} from 'react';
import "./Signin.css";

function Signin(props) {

	const [name, setName] = useState();
	const [email, setEmail] = useState();
    const [pwd1, setPwd1] = useState();
    const [pwd2, setPwd2] = useState();
    const [dob, setDob] = useState();
    const [number, setNumber] = useState();

	const toggleModal = () => {
		
	}
  
  	return (
  	  <div className='modal'>
  	      <div className="overlay">
				<div className="modalContent">
  	        		<h1 className="signin">Sign-In</h1>
					<button className="closeModal" onClick={toggle}>X</button>
			  		<div className="form">
						  <form >
						<label htmlFor='nameInput' className="nameLabel">Name</label>
						<input type="text" name="nameLabel" id="nameInput" onChange={e => setName(e.target.value)} value={name} />
						<label htmlFor='emailInput' className="emailLabel">E-mail id</label>
						<input type="email" name="emailLabel" id="emailInput" onChange={e => setEmail(e.target.value)} value={email} />
						<label htmlFor='password1Input' className="password1Label">Password</label>
						<input type="password" name="password1Label" id="password1Input" onChange={e => setPwd1(e.target.value)} value={pwd1} />
						<label htmlFor='password2Input' className="password2Label">Re-enter your password</label>
						<input type="password" name="password2Label" id="password2Input" onChange={e => setPwd2(e.target.value)} value={pwd2} />
						<label htmlFor='dobInput' className="dobLabel">Date of Birth</label>
						<input type="date" name="dobLabel" id="dobInput" onChange={e => setDob(e.target.value)} value={dob} />
						<label htmlFor='numberInput' className="numberLabel">Phone Number</label>
						<input type="tel" name="numberLabel" id="numberInput" onChange={e => setNumber(e.target.value)} value={number} />
						</form>
					</div>
				</div>
  	      </div>
  	  </div>)
}

export default Signin;
