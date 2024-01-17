import React from 'react';
import { FaList } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { SiSemanticscholar } from "react-icons/si";
import { MdDashboard } from "react-icons/md";

export const SidebarData = [

  {
    title: "Student's Posts",
    path: '/dashboard/posts',
    icon: <PiStudentBold />,
    cName: 'nav-text'
  },
  {
    title: "User's List",
    path: '/dashboard/users',
    icon: <FaList />,
    cName: 'nav-text'
  },
  {
    title: "Creativity",
    path: '/dashboard/creativity',
    icon: <SiSemanticscholar />,
    cName: 'nav-text'
  },
  {
    title: "Dashboard",
    path: '/dashboard/',
    icon: <MdDashboard />,
    cName: 'nav-text'
  }
];