import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser} from 'firebase/auth'

 export  const AuthContext = createContext();


 
const Context = ({children}) => {

const auth = getAuth(app)



const [user,setUser] = useState(true)

const [loading, setLoading] = useState(true)

const createUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth,email,password)
}

   const signIn = (email,password) => {

    return signInWithEmailAndPassword(auth,email,password)
   }


    const googelProvide = new GoogleAuthProvider()
    
   const SignInWithGoogle = () => {

    return signInWithPopup(auth,googelProvide)
   }

   const logout =(email,password) => {

      return signOut(auth)

   }

    useEffect(() => {

   const unsubscribe =onAuthStateChanged(auth, currentUser => {

            setUser(currentUser );

            setLoading(false)
            console.log('auth state changd', currentUser);
        })

     return () => {

        unsubscribe()
     }


    },[])



    const authInfo = { user,createUser, logout,  SignInWithGoogle,loading,  signIn} 

    return (
        <div>
            
           <AuthContext.Provider value={authInfo}>


            {children}
            </AuthContext.Provider> 

        </div>
    );
};

export default Context;