
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin, currentUser,signup} = useAuth();
    const navigate = useRouter();
    function handeSubmit(e) {
        e.preventDefault()
        try {
            signin(emailRef.current.value, passwordRef.current.value)
            navigate.push('/portraits')
          
        } catch (error) {
            toast.error(error.message)
        }
        

    }
    return (
        <>
        
    
        <div className="signIn">
            <form className="signInForm">
                <input className="email" type="email" ref={emailRef} placeholder='Email' />
                <input className="password" type="password" ref={passwordRef} required />
                <button type='submit' onClick={handeSubmit}>Sign In</button>
            </form>
            <p>
                Not a Member? {" "}
                <span className="sign_in" onClick={()=>{navigate.push('/signup')}}>Sign Up</span>
            </p>
        </div>
        </>
    )
}
export default SignIn