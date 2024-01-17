import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
//import './Navbar.css';
import './Sidebarhd.css';
import { IconContext } from 'react-icons';
// import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
// import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/logo.svg"
import { IoMdExit } from "react-icons/io";

const Sidebarhd = () => {
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
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='pt-6'><button className='bg-slate-500 text-white hover:bg-blue-600 rounded-xl p-3 ml-6 flex justify-center items-center transit' onClick={logout} type='submit'><IoMdExit className='mr-1'/>Logout</button></li>
          </ul>
        </nav>
      </IconContext.Provider>

      <Outlet/>
    </>
  );
}

export default Sidebarhd