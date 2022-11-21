import React from "react";
import { NavLink } from "react-router-dom";

import Logo from 'images/logo.svg';

import './Nav.scss';

export const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Logo />
        <span className="text logo__text" style={{ fontSize: 18 }}>centralnoe.ru</span>
      </div>
      <NavLink className='text' to='/'>Мои объекты</NavLink>
      <NavLink className='text' to='/new'>Добавить объект</NavLink>
      <NavLink className='text' to='/any'>Any one</NavLink>
    </div>
  )
}