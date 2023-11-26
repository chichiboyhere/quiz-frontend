import React, { useContext } from 'react';
import './button.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export function Button() {
  const { user, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
    navigate("/");
} 

  return (
    <>
    {user? <button className='btnAuth' onClick={handleLogout}>Logout</button>:
    <Link to='/login'>
      <button className='btnAuth'>Login</button>
    </Link>}
    </>
  );
  
}
