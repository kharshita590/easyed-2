import React from "react";
import './sidebar2.css';
import { Progress } from '@chakra-ui/react'

const ProgressBar = () => {
  return (
    <>
    <div className="card">
      <div className="progress mt-[2rem] ml-[1rem]">
        <h1>Skills Proficiency</h1>
       
      </div>
      </div>
      <div className="p-4">
      <p className="mb-2">React js</p>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Progress value={67} size="lg" colorScheme="yellow" className="mb-4" />
      </div>

      <p className="mb-2">C++</p>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Progress value={20} size="lg" colorScheme="yellow" className="mb-4" />
      </div>

      <p className="mb-2">Java</p>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Progress value={70} size="lg" colorScheme="yellow" className="mb-4" />
      </div>

      <p className="mb-2">UI/UX Design</p>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Progress value={10} size="lg" colorScheme="yellow" className="mb-4" />
      </div>
    </div>
    </>
  );
};

export default ProgressBar;
