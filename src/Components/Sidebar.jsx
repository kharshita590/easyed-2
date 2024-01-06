// import React, { useState } from 'react';
// import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
// import logo from '../assets/logo.svg';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
// }

//   return (
//     <>
//       <nav className='fixed top-0 left-0 w-full bg-white shadow-md p-4 z-40 md:hidden'>
//         <div className='container mx-auto'>
//           <div className='flex items-end justify-between'>
//             <img src={logo} alt='' />
//             {isSidebarOpen ? (
//               <RxCross1
//                 onClick={toggleSidebar}
//                 className='hover:cursor-pointer transition-transform transform scale-125 duration-300 ease-in-out'
//               />
//             ) : (
//               <RxHamburgerMenu
//                 onClick={toggleSidebar}
//                 className='hover:cursor-pointer transition-transform transform scale-125 duration-300 ease-in-out'
//               />
//             )}
//           </div>
//         </div>
//       </nav>
//       {isSidebarOpen && (
//         <div className='fixed top-0 right-0 h-full w-64 bg-white z-40 p-4 transition-transform transform translate-x-0 md:hidden duration-300 ease-in-out'>
//           <RxCross1
//                 onClick={toggleSidebar}
//                 className='hover:cursor-pointer transition-transform transform scale-125 duration-300 ease-in-out m-4'
//               />
//               <div>
//                     <div className="flex flex-col m-8">
//                         <Link to="/" className="text-blue-600 hover:text-blue-900 m-4 ">Home</Link>
//                         <Link to="/"><a onClick={() => scrollToSection('whyus')} className="text-blue-600 hover:text-blue-900 m-4" href="#about"> Why us? </a></Link>
//                         <Link to="/contactus" className="text-blue-600 hover:text-blue-900 m-4">Contact Us</Link>
//                         <Link to="/policy" className="text-blue-600 hover:text-blue-900 ml-4">Policy</Link>
//                     </div>

//               </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
import React from 'react'

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar