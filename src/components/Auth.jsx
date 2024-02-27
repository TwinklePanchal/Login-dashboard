import React from 'react';
import Login from './Login';

const Auth = (Component) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    return (props) => {
      if (isLoggedIn) {
        return <Component {...props} />;
      } else {
        return <Login />;
      }
    };
};

export default Auth;