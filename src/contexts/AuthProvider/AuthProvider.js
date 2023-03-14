import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const providerLogin = (provider) => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }
    const registerWithEmailPassword = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailPassword = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (data) => {
        setLoading(false)
        return updateProfile(auth.currentUser, data);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const verifyMail = () => {
        setLoading(false)
        return sendEmailVerification(auth.currentUser)
    }
    const logOut = () => {
        setLoading(false)
        return signOut(auth)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        providerLogin,
        logOut,
        registerWithEmailPassword,
        updateUserProfile,
        loginWithEmailPassword,
        resetPassword,
        verifyMail,
        loading,
        setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;