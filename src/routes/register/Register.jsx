import { useState } from 'react';
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import "./register.css";


export default function Register() {

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
;
	const [error, setError] = useState(false);
    const [confirmPass, setConfirmPass] = useState(false)
	

	// Handling the form submission
	

  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        setError(true);
    }
    else if( password !==  confirmPassword){
        setConfirmPass(true);
    }
    else {
        setError(false);
    }
 
   try{
      const newUser = {
       email: email,
	   password: password,
	   name: name 
      };

      await axios.put("/auth/register", newUser);
      
      navigate("/login")
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h3>Please enter all the fields</h3>
			</div>
		);
	};

    // Confirm Password error message
	const confirmPasswordMsg = () => {
		return (
			<div
				className="error"
				style={{
					display: confirmPass ? '' : 'none',
				}}>
				<h3>Password fields don't match</h3>
			</div>
		);
	};

	return (

		<div>
			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
                {confirmPasswordMsg()}
			</div>
			{/* <h3 style={{textAlign: "center"}}>Registration</h3> */}
		<div className="register">
	
			<div className="rContainer">
				<input
				type="text"
				placeholder="name"
				id="name"
				onChange={handleChangeName}
				className="rInput"
				/>
				<input
				type="email"
				placeholder="email"
				id="email"
				onChange={handleChangeEmail}
				className="rInput"
				/>
				<input
				type="password"
				placeholder="password"
				id="password"
				onChange={handleChangePassword}
				className="rInput"
				/>
				<input
				type="password"
				placeholder="confirm password"
				id="confirmPassword"
				onChange={handleChangeConfirmPassword}
				className="rInput"
				/>
				<button  onClick={handleSubmit} className="rButton">
				   Register
				</button>
              Already a member? <Link to="/login">login instead</Link>
           {error && <span>{error.message}</span>}
      </div>
      
		</div>
		</div>
	);
}
