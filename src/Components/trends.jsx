import React from "react";
import './sidebar2.css';
import { Progress } from '@chakra-ui/react'

const MarketTrends = () => {
  return (
    <>
    <div className="up ml-[17rem] mt-[2rem]">
    <div className="card ">
      <div className="progress mt-[2rem] ml-[1rem]">
        <h1>Market Demand</h1>
        <p className="mt-[1rem]">Market Demand for Top Skills</p>
       
      </div>
      </div>
      <div className="p-4 mt-[1rem]">
        <div className="flex">
      <p className="mb-2">Python</p>
      <div className="w-full md:w-3/4 lg:w-1/2 ">
        <Progress value={67} size="lg" colorScheme="green" className=" ml-[1rem] mt-[0.2rem]" />
      </div>
      </div>

     <div className="flex">
      <p className="mb-2 mt-[1.8rem]">JavaScript</p>
      <div className="w-full md:w-3/4 lg:w-1/2 ">
        <Progress value={20} size="lg" colorScheme="purple" className="ml-[1rem] mt-[2rem]" />
      </div>
      </div>

     <div className="flex">
      <p className="mb-2 mt-[1.8rem]">Data Analysis</p>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Progress value={70} size="lg" colorScheme="blue" className="ml-[1rem] mt-[2rem]" />
      </div>
      </div>

     <div className="flex">
      <p className="mb-2 mt-[1.8rem]">Html and CSS</p>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Progress value={10} size="lg" colorScheme="pink" className="ml-[1rem] mt-[2rem]" />
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default MarketTrends;
