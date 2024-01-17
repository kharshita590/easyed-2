import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebarhd from '../Components/Sidebarhd';
import ai from "../assets/ai.jpeg";
import vp from "../assets/vp.jpeg";
import invest from "../assets/invest.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route is a child of /dashboard
  const isDashboardRoute = (location.pathname==='/dashboard') || (location.pathname==='/dashboard/');

  return (
    <>
       <Sidebarhd />
       {isDashboardRoute && (
      <div className='flex flex-col h-screen items-center'>
          <div className='flex flex-col justify-center items-center mt-20 text-3xl font-semibold italic mb-16'>
            JOIN THE START OF A REVOLUTION
          </div>
          <div className='w-7/12 mb-44 mt-5'>
            {/* Trending Section */}
            <h1 className='text-lg font-medium mb-5'>TRENDING</h1>
            <div className='flex flex-row ml-12'>
              {/* Trending items */}
              <div className='w-56 h-16 flex flex-row border-gray-500 border-2'>
                <div className='flex'>
                  <img src={ai} alt="ai img" className='w-16 h-full' />
                </div>
                <div className='flex flex-col ml-2'>
                  <h1 className='font-medium'>AI</h1>
                  <p>Computer, Math</p>
                </div>
              </div>
              <div className='w-56 h-16 ml-6 mr-6 flex flex-row border-gray-500 border-2'>
                <div className='flex'>
                  <img src={invest} alt="ai img" className='w-16 h-full' />
                </div>
                <div className='flex flex-col ml-2'>
                  <h1 className='font-medium'>Investment</h1>
                  <p>Math</p>
                </div>
              </div>
              <div className='w-56 h-16 flex flex-row border-gray-500 border-2'>
                <div className='flex'>
                  <img src={vp} alt="ai img" className='w-16 h-full' />
                </div>
                <div className='flex flex-col ml-2'>
                  <h1 className='font-medium'>Video Editing</h1>
                  <p>Computer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-7/12'>
            {/* Analysis Section */}
            <h1 className='text-lg font-medium mb-5'>ANALYSIS</h1>
            <div className='flex border-2 border-gray-300 rounded-lg h-40 ml-12 mr-10 justify-center items-center '>
              <p className='ml-5 mr-5 text-lg'>
                Basic math is required in 94 percent of Jobs directly or indirectly.
                Creativity is already climbing the charts of trending skills.
                Problem solving is already a skill required in almost every profession.
                Computer skill has become an essential part of everyone's life.
              </p>
            </div>
          </div>
      </div>
      )}
    </>
  );
};

export default Dashboard;
