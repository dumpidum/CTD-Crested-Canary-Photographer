
import { signOut } from "firebase/auth";
import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';
import Signup from "./signup";

function signIn() { 
    
    
    
    const emailRef = useRef();
        const passwordRef = useRef();
    const { signin } = useAuth(); 

    function handeSubmit(e){
        e.preventDefault()
        signin(emailRef.current.value, passwordRef.current.value)
    }



  return (
    <div>
<form className="signupForm">

    < input className = "email" type = "email" ref = { emailRef } placeholder = 'Email' />

<input className="password" type="password" ref={passwordRef} required />

<button type='submit' onClick={handeSubmit}>Sign In</button>
<button type='submit' onClick={signOut}>Sign Out</button>


</form>
<p> Not a Member? {" "}
<span className="signin" onClick={Signup}>Sign Up</span></p>
   


</div>
       ) 
}

export default signIn