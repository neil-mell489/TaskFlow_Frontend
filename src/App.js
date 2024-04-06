// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupForm from './components/AuthPage/SignUpForm';
import LoginForm from './components/AuthPage/LoginForm';
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditEvent from './pages/EditEvent';
import NewEvent from './pages/NewEvent';
import ViewEvent from './pages/ViewEvent';
import { signUpUser, loginUser } from './components/api'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      // Make API call to fetch user data using token
      // Example:
      // const userData = await getUserData(token);
      // setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSignUp = async (userData) => {
    try {
      const data = await signUpUser(userData);
      localStorage.setItem('authToken', data.token);
      setIsLoggedIn(true);
      // Fetch user data or perform other necessary operations
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup failure
    }
  };

  const handleLogin = async (userData) => {
    try {
      const data = await loginUser(userData);
      localStorage.setItem('authToken', data.token);
      setIsLoggedIn(true);
      // Fetch user data or perform other necessary operations
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login failure
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm handleSignUp={handleSignUp} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/view-event/:id" element={<ViewEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
