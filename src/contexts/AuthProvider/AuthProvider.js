import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const registerWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (data) => {
        return updateProfile(auth.currentUser, data);
    }
    const logOut = () => {
        return signOut(auth)
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = { user, providerLogin, logOut, registerWithEmailPassword, updateUserProfile, loginWithEmailPassword }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;