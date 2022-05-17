import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';
import { useRouter } from "next/router";


function Signup() {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const { signup, signin } = useAuth();
    const navigate = useRouter();
    function handeSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
        navigate.push('/')
      
    }

    console.log(emailRef);

    return (
        <div className="signup">
            <form className="signupForm">
                <input className="name" type="text" ref={nameRef} placeholder='Full name (required if registering' />

                < input className="email" type="email" ref={emailRef} placeholder='Email' />

                <input className="password" type="password" ref={passwordRef} required />

                <button type='submit' onClick={handeSubmit}>Sign Up</button>


            </form>
            <p> Already have an account? {" "}
            <span className="sign_up" onClick={()=>{navigate.push('/signin')}}>Sign In</span></p>




        </div>
    )
}

   export default Signup;