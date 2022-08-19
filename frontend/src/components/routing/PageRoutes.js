import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MiniNav from '../MiniNav';
import Spinner from '../UI/Spinner';

const PageRoutes = ({component: Component, ...rest}) => {
  // const userAuth = useSelector(state => state.auth);
  // const { isAuthenticated, loading } = userAuth;
  // if (loading) return <main className='container'><Spinner /></main>;
  // if (loading) return <Spinner />;
  
  // return isAuthenticated ? <main className='container'><Component {...rest} /></main> : <Navigate to="/login" />;
  return (
    <div className="routes routes__container">
      <MiniNav />
      <Component {...rest}/>
    </div>
  )
};
export default PageRoutes;