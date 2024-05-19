import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar2 from '../Components/sidebar2';
import Nav from '../Components/navbar2';
import ProgressBar from './progress-bar';
import UserActivity from './activity';
const Profile = () => {
    // const [name,setName] = useState('')
    // const [branch,setBranch] = useState('')
    // const [roll,setRoll] = useState('')
    // const [id,setId] = useState('')
    const student = {
        name: 'Tushar Singh',
        branch: 'CSIT',
        rollNo: '2100290110173',
        id: '2125csit1157',
    };
    //   const navigate = useNavigate();
    //   const location = useLocation();

    //   // Check if the current route is a child of /dashboard
    //   const isDashboardRoute = (location.pathname==='/dashboard') || (location.pathname==='/dashboard/');

    return (
        <>

            <Sidebar2 />
            <Nav />
            <div className=' mt-[7rem] ml-[20rem]'>
                <div className='border mb-4 p-4'>
                <p className='text-lg text-white'>Student Profile</p>
                <div className='flex'>
                    <div className=''>
                        <img src='dummy.png ' class="w-20 h-20 object-cover ml-[4rem] mt-[2rem]"></img>
                    </div>
                    <div className='ml-[1.7rem] mt-[1.2rem]'>
                        <p className="text-lg"><span className="font-semibold">Name: </span>{student.name}</p>
                        <p className="text-lg"><span className="font-semibold">Branch: </span>{student.branch}</p>
                        <p className="text-lg"><span className="font-semibold">Roll no.: </span>{student.rollNo}</p>
                        <p className="text-lg"><span className="font-semibold">ID: </span>{student.id}</p>
                    </div>
                    </div>
                </div>
                <ProgressBar/>
                <UserActivity/>
            </div>
           

        </>

    );
};

export default Profile;
