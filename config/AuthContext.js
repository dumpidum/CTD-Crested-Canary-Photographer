import React , {useContext, useEffect, useState}from 'react'
import { firebaseApp } from './firebaseConfig';
import { auth , onAuthStateChanged,createUserWithEmailAndPassword,getAuth} from 'firebase/auth';



const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


 export function AuthProvider({children}) {
     const authentication =getAuth(auth);
 const [currentUser, setCurrentUser] = useState();

 function signup(email, password){
     return auth.createUserWithEmailAndPassword(email,password,name)
 }

 useEffect(() =>{

   const unsubscribe= onAuthStateChanged(user =>{
        setCurrentUser(user)
    })
return () => unsubscribe()
 }, [])

const value = {
    currentUser,
    signup
}


  return (
    <AuthContext.Provider value={value}>
        {children}

        </AuthContext.Provider>
  )
}

