import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';
import { motion as m } from 'framer-motion';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <m.button
  
  whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
    className='login'
    onClick={() => loginWithRedirect()}>Log In</m.button>;
};

export default LoginButton;
