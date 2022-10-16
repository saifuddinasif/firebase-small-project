import React, { createContext } from 'react';

 export  const AuthContext = createContext();
const Context = ({children}) => {
const user = {displayName : 'Aakash'};

    const authInfo = { user:user } 
    return (
        <div>
            
           <AuthContext.Provider value={authInfo}>


            {children}
            </AuthContext.Provider> 

        </div>
    );
};

export default Context;