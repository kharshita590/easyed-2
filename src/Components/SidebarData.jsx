import React from 'react';
import { FaList } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

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
  }
];