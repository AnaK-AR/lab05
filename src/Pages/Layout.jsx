import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Lab 5</NavLink>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/Perfil">Perfil</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/Dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};