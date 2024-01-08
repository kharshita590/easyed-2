// AdminDashboard.jsx

import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddOrg from './AddOrg';
const AdminDashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
    localStorage.setItem("isAuthenticatedAdmin", JSON.stringify(false));
  }


  return (
    <div className='w-full h-full bg-gray-400'>
      <div>
        <Button type='submit' onClick={handleLogout} className='m-12'>Logout</Button>
      </div>
      <div>
        <div className='w-full flex justify-center items-center p-10 font-bold'>
          <h1 className=''>Admin Dashboard</h1>
        </div>
        <div>
          <AddOrg />
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
