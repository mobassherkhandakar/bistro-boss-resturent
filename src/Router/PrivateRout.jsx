import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return <h1 className='absolute top-1/2 left-1/2'>Loading...........</h1>
  }
  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}}/>
    
};

export default PrivateRout;