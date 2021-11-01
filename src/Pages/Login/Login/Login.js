import React from 'react';
import './Login.css';


import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="mb-4 p-4">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}className="btn btn-danger">Google Sign In</button>
        </div>
    );
};

export default Login;