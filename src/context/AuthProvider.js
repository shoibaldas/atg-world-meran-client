import React, { createContext } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;