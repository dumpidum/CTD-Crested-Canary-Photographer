import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useAuth } from '../components/Context/AuthContext';
import styles from '../styles/Login.module.css';
import { toast } from 'react-toastify';

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin, currentUser, signup } = useAuth();
    const navigate = useRouter();
    function handeSubmit(e) {
        e.preventDefault()

        signin(emailRef.current.value, passwordRef.current.value)
            .then((result) => {
                toast.success("You've logged in");
                navigate.push('/')
            }, (error) => {
                toast.error("An error occured");
            });
    }

    return (
        <>
            <div className={styles.container}>
                <form className={styles.loginForm}>
                    <input className={styles.loginInput} type="email" ref={emailRef} placeholder='Email' />
                    <input className={styles.loginInput} type="password" ref={passwordRef} required placeholder='Password' />
                    <button className={styles.submitButton} type='submit' onClick={handeSubmit}>Sign In</button>
                </form>
                <p>
                    Not a Member? {" "}
                    <span className="sign_in" onClick={() => { navigate.push('/signup') }}>Sign Up</span>
                </p>
            </div>
        </>
    )
}

export default SignIn