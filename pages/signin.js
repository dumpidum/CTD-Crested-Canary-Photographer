
import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';
import Signup from "./signup";
import {useRouter} from "next/router"
import {limitToLast} from "firebase/firestore";
import { async } from "@firebase/util";


function SignIn() { 
    
    
    
    const emailRef = useRef();
        const passwordRef = useRef();
    const { signin, currentUser,signout } = useAuth(); 

    const navigate = useRouter();


   async function handleSubmit(e){
        e.preventDefault()
       await signin(emailRef.current.value, passwordRef.current.value)
       navigate.push('/portraits')
    }
   async function handleSignOut(e){
        await signout();
        navigate.push('/')
        
    }



  return (
    <div styles={{
        display: 'flex'
    }}>
<form className="signupForm">

< input className = "email" type = "email" ref = { emailRef } placeholder = 'Email' />
<input className="password" type="password" ref={passwordRef} required />

{currentUser? <button type='submit' onClick={handleSignOut}>Sign out</button>:<button type='submit' onClick={handleSubmit}>Sign In</button>}
{/* <button type='submit' onClick={signOut}>Sign Out</button> */}


</form>
{!currentUser && <p> Not a Member? {" "}
<span className="signin" onClick={Signup}>Sign Up</span></p>}
   


</div>
       ) 
}

export default SignIn