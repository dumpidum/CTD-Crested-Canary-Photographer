import React, { useRef } from "react";
import { useAuth } from '../config/AuthContext';


function Signup() {
    const emailRef = useRef();
    const nameRef = useRef();
        const passwordRef = useRef();
    const { signup } = useAuth(); 

    function handeSubmit(e){
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }

    

  return (
    <div>
<form className="signupForm">
<input className = "name" type = "text" ref = { nameRef } placeholder = 'Full name (required if registering' />

    < input className = "email" type = "email" ref = { emailRef } placeholder = 'Email' />

<input className="password" type="password" ref={passwordRef} required />

<button type='submit' onClick="">Sign Up</button>


</form>
<div className="w-100 text-center mt-2">
        Already have an account? Log In
    </div>


</div>
       ) 
}

export default Signup; 