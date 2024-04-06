import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import SignupForm from './components/AuthPage/SignUpForm';  
import LoginForm from './components/AuthPage/LoginForm';
import Login from './pages/Login';
import Profile from './pages/Profile';  
import EditEvent from './pages/EditEvent'; 
import NewEvent from './pages/NewEvent'; 
import ViewEvent from './pages/ViewEvent'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // HERE IS FRONT AND BACK CONNECTION STUFF
  // const URL = process.env.URL (this is going to be the backend link?)
  // const URL = "http/localhost:3000/"

  // You need to do something with URL to connect the two.

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      // USER DATA IS FETCHED HERE
    }
  }, []);

  const handleSignUp = async (user) => {
    // SIGN UP LOGIC GOES HERE
  };

  const handleLogin = async (user) => {
    // LOGIN LOGIC GOES HERE
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
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
