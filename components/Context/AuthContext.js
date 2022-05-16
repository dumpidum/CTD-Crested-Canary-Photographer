import React, { useContext, useEffect, useState } from 'react'
import { firebaseApp } from '../../config/firebaseConfig';
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from 'firebase/auth';
const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const authentication = getAuth(firebaseApp);
    const [currentUser, setCurrentUser] = useState();
    function signup(email, password) {
        return createUserWithEmailAndPassword(authentication, email, password)
    }
    function signin(email, password) {
        return signInWithEmailAndPassword(authentication, email, password)

    }
    function signout(){
        return signOut(authentication,email,password)

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, user => {
            setCurrentUser(user)
        })
        return () => unsubscribe();
    }, [])
    const value = {
        currentUser,
        signup,
        signin,
        signout,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
