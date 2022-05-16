import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';
import signIn from "./signin";


function Signup() {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();

    function handeSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }

    console.log(emailRef);

    return (
        <div>
            <form className="signupForm">
                <input className="name" type="text" ref={nameRef} placeholder='Full name (required if registering' />

                < input className="email" type="email" ref={emailRef} placeholder='Email' />

                <input className="password" type="password" ref={passwordRef} required />

                <button type='submit' onClick={handeSubmit}>Sign Up</button>


            </form>
            <p> Already have an account? {" "}
                <span className="signin" onClick={signIn}>Sign In</span>
                </p>
                 
</div >
       )
}

export default Signup; 