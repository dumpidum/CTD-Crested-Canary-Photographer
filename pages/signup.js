import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import styles from '../styles/Login.module.css';


function Signup() {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const { signup, signin } = useAuth();
    const navigate = useRouter();
    function handeSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
            .then((result) => {
                toast.success("You've been signed up and logged in");
                navigate.push('/')
            }, (error) => {
                toast.error("An error occured");
            });

    }

    console.log(emailRef);

    return (
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <input className={styles.loginInput} type="text" ref={nameRef} placeholder='Full name' />
                <input className={styles.loginInput} type="email" ref={emailRef} placeholder='Email' />
                <input className={styles.loginInput} type="password" ref={passwordRef} required placeholder='Password' />
                <button className={styles.submitButton} type='submit' onClick={handeSubmit}>Sign Up</button>
            </form>
            <p> Already have an account? {" "}
                <span className="sign_up" onClick={() => { navigate.push('/signin') }}>Sign In</span>
            </p>
        </div>
    )
}

export default Signup;