import React, {createContext, useContext, useEffect,useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext()





export function AuthContextProvider ({children}) {

function createUser (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

const [currentUser,setCurrentUser] = useState(null)
useEffect(() => {
const unsub = onAuthStateChanged(auth, (user) => {
       setCurrentUser(user)
      });

      return () => {
        unsub()
      }
      
}, [])




return (

    <AuthContext.Provider value={{createUser, currentUser}}>
           {children}
    </AuthContext.Provider>
        )


}

export const useAuthContext = () => useContext(AuthContext)