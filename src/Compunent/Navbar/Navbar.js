import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Navbar = () => {
  const [user,loading,error] = useAuthState(auth);
  const [signOut, signOutloading, SignOuterror] = useSignOut(auth);
  const signOuts = () => {
    signOut();
  }
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container">
    <Link to="/home" className="navbar-brand font-bold" >Random User</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div>
    <div className="collapse navbar-collapse " id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link text-white" exact activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user" className="nav-link text-white"  activeClassName="active">User</NavLink>
        </li>
       {
        !user?  <li className="nav-item">
        <NavLink to="/login" className="nav-link text-white" activeClassName="active">Login</NavLink>
      </li>: <li className="nav-item">
      <a  onClick={signOuts} className="nav-link text-white cursor-pointer" >SignOut</a>
    </li>
     
       }
      </ul>
  
    </div>
    </div>
  </div>
</nav>        
        </div>
    );
};

export default Navbar;