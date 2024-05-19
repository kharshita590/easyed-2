import React from 'react';
import { FaHome, FaTools, FaUsers } from 'react-icons/fa'; 

// import { SiSemanticscholar } from "react-icons/si";
// import { MdDashboard } from "react-icons/md";

export const Sidebar2Data = [

  {
    title: "Home",
    path: '/dashboard/home',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: "Skills",
    path: '/dashboard/skills',
    icon: <FaTools />,
    cName: 'nav-text'
  },
  {
    title: "Users",
    path: '/dashboard/users',
    icon: <FaUsers />,
    cName: 'nav-text'
  },
//   {
//     title: "Dashboard",
//     path: '/dashboard/',
//     icon: <MdDashboard />,
//     cName: 'nav-text'
//   }
];