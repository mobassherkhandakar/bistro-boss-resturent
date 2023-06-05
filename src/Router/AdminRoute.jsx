import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';

const AddminRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation()
  if(loading || isAdminLoading){
    return <h1 className='absolute top-1/2 left-1/2'>Loading...........</h1>
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate to='/login' state={{from: location}}/>
    
};

export default AddminRoute;