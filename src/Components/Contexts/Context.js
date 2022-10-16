import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth'

 export  const AuthContext = createContext();
const Context = ({children}) => {


const auth = getAuth(app)

const [user,setUser] = useState({displayName : 'Aakash'})


const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth,email,password)
}

   const signIn = (email,password) => {

    return signInWithEmailAndPassword(auth,email,password)
   }


    useEffect(() => {

   const unsubscribe =onAuthStateChanged(auth, currentUser => {

            setUser(currentUser );
            console.log('auth state changd', currentUser);
        })

     return () => {

        unsubscribe()
     }


    },[])



    const authInfo = { user,createUser,  signIn} 

    return (
        <div>
            
           <AuthContext.Provider value={authInfo}>


            {children}
            </AuthContext.Provider> 

        </div>
    );
};

export default Context;