import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUpUser, loginUser } from '../components/api';

function Login() {
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userData = { 
                username: signupUsername, 
                password: signupPassword
            };
            const response = await signUpUser(userData);
            console.log('User signed up:', response);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = { 
                username: loginUsername, 
                password: loginPassword
            };
            const response = await loginUser(userData);
            console.log('User logged in:', response);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className='bg-black text-white p-5 text-center'>
            <h1 className="text-center">TaskFlow Login/SignUp Page</h1>
            <div className="flex-col p-10">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='p-5'>
                    <label htmlFor="signup-username">Username: </label>
                    <input type="text" id="signup-username" placeholder="Username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
                </div>
                <div className='p-5'>
                    <label htmlFor="signup-password">Password: </label>
                    <input type="password" id="signup-password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2" type="submit">Sign Up</button>
            </form>
            <h2 className='pt-5'>Log In</h2>
            <form onSubmit={handleLogin}>
                <div className='p-5'>
                    <label htmlFor="login-username">Username: </label>
                    <input type="text" id="login-username" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
                </div>
                <div className='p-5'>
                    <label htmlFor="login-password">Password: </label>
                    <input type="password" id="login-password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2" type="submit">Log In</button>
            </form>                
            </div>

            <Link to="/homepage">AUTOMATIC LOGIN PATH (DEV ONLY)</Link>
        </div>
    );
}

export default Login;
