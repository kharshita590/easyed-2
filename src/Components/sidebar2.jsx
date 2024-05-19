import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Sidebar2Data } from './sidebar2Data';

import './sidebar2.css';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg"
import { IoMdExit } from "react-icons/io";

const Sidebar2 = () => {
  const [sidebar, setSidebar] = useState(true);
  // const [render1, setRender] = useState(true);
  const showSidebar = () => setSidebar(sidebar);
  const navigate = useNavigate();

  const logout=()=>{
    navigate("/", {replace:true});
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
  }
  // const handleRender = () => {
  //   setRender(!render1);
  // }
  const handledash = () => {
    navigate("/dashboard/", {replace:true});
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <img src={logo} alt="" className='ml-6 cursor-pointer' onClick={handledash}/>
            </li>
            {Sidebar2Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='logout-item'>
  <button className='logout-button' onClick={logout} type='submit'>
    <IoMdExit className='icon' />Logout
  </button>
</li>

<li className='setting-item'>
                <button className='setting-button'>
                    <IoMdExit className='icon'/>Settings
                </button>
            </li>

          </ul>
        </nav>
      </IconContext.Provider>

      <Outlet/>
    </>
  );
}

export default Sidebar2