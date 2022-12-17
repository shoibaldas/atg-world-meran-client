import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user} = useContext(AuthContext);
    const location = useLocation();
    if (user && user.email) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;