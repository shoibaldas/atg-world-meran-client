import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [signIn, setSignIn] = useState(true);

    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("user");
        // window.dispatchEvent(new Event("storage"));
    }

    useEffect(() => {
        if (user) {
           
            setSignIn(false);
            setLoading(false);
        }
        else {
           
            setSignIn(false);
        }

    }, [user, signIn])

    const authInfo = { user, logout, signIn, setSignIn, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;