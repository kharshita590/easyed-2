import React from 'react'
import { useState } from 'react';
import './sidebar2.css';
// import NotificationsIcon from '@material-ui/icons/Notifications';
const Nav=()=>{

    return(
        <>
        <div >
      <input type="text" placeholder="Type to search" className="w-[55rem] h-8 border  ml-[15rem] mt-[1.5rem]  placeholder:text-[12px] placeholder-gray-700 p-4 search" />
   {/* <NotificationsIcon/> */}
    </div>
    
      
        </>
    )
}

export default Nav;