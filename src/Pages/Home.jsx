import React from 'react';
import Homeimg from '../assets/Backgroundhome.svg';
import comp from '../assets/item 1.svg';
import Secimg from '../assets/item 2.svg';
import { GiFlexibleStar } from 'react-icons/gi';
import { SiFuturelearn } from 'react-icons/si';
import { FaAccusoft } from 'react-icons/fa';
import SubscribeForm from '../Components/SubscribeForm';
import Cards from '../Components/Cards';
import "./Home.scss"
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  return (
    <>
    <Sidebar/>
    <Navbar />
    
    <div className="home">
      <img src={Homeimg} className="bg" alt="" />
      <div className="compo flex items-center justify-center">
        <img src={comp} alt="" className="max-w-full h-auto " />
      </div>
      

      <div className='sec' id='whyus'>
            <div className='secimg'><img src={Secimg} alt="" /></div>
            <div className='sectext'><h2>Unlocking Limitless Learning:</h2><h3>EasyED Transforms Education Beyond the Classroom</h3>
            <ul>
                <li><GiFlexibleStar className='star' color='#446EEB' size={"22px"}/><p>Flexible Learning: Access education anytime, anywhere.</p></li>
                <li><FaAccusoft className='fac' color='#446EEB' size={"22px"}/><p>Smooth Transition: Shift effortlessly to EASYED's virtual classrooms.</p></li>
                <li><SiFuturelearn className='sif' color='#446EEB' size={"22px"}/><p>Engaging Platform: Collaborate actively with EASYED's interactive space.</p></li>
            </ul>
            </div>
        </div>





      <div className="sec2 flex flex-col mt-16">
        <h1 className="text-4xl font-bold text-center mb-4 max-w-screen-md:mb-0 max-w-screen-md:text-2xl max-w-screen-md:font-semibold">
          All-in-one
        </h1>
        <h1 className="text-4xl font-bold text-center text-blue-500 max-w-screen-md:text-2xl max-w-screen-md:font-semibold">
          Education Platform
        </h1>
        <div className="cards flex justify-evenly mt-14 max-w-screen-md:m-7">
          <Cards />
        </div>
      </div>
      <div className="newsletter mt-32">
        <SubscribeForm />
      </div>
    </div>
    </>
  );
};

export default Home;
