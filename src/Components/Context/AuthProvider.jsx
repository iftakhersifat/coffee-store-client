import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/Firebase';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {


    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authData ={
        createUser,

    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;