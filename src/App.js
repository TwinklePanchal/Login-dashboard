// App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Auth from './components/Auth';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegister = (userData) => {
    console.log('User Registered:', userData);
  };

  const handleLogin = (userData) => {
    console.log('User Logged In:', userData);
    setLoggedInUser(userData);
    localStorage.setItem('isLoggedIn', true);
  };

  const handleLogout = () => {
    console.log('User Logged Out');
    setLoggedInUser(null);
    localStorage.removeItem('isLoggedIn');
  };

  const AuthDashboard = Auth(Dashboard);

  return (
    <div>
      {loggedInUser ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <AuthDashboard user={loggedInUser} />
        </div>
      ) : (
        <div>
          <Register onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;