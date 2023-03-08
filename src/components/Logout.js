import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';
import { motion as m } from 'framer-motion';
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <m.button 
    whileHover={{ scale: 1.2 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}className='logout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </m.button>
  );
};

export default LogoutButton;
