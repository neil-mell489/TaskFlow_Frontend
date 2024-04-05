import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>TaskFlow Login/SignUp Page</h1>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label htmlFor="signup-username">Username:</label>
          <input type="text" id="signup-username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="signup-password">Password:</label>
          <input type="password" id="signup-password" placeholder="Password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <h2>Log In</h2>
      <form>
        <div>
          <label htmlFor="login-username">Username:</label>
          <input type="text" id="login-username" placeholder="Username"/>
        </div>
        <div>
          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" placeholder="Password"/>
        </div>
        <button type="submit">Log In</button>
      </form>
      <Link to="/homepage">AUTOMATIC LOGIN PATH (DEV ONLY)</Link>
    </div>
  );
}

export default LoginPage;
