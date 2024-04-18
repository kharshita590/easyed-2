import React from 'react';
import Homeimg from '../assets/Backgroundhome.svg';
// import comp from '../assets/item 1.svg';
import Secimg from '../assets/item 2.svg';
// import { GiFlexibleStar } from 'react-icons/gi';
// import { SiFuturelearn } from 'react-icons/si';
// import { FaAccusoft } from 'react-icons/fa';
// import SubscribeForm from '../Components/SubscribeForm';
import Cards from '../Components/Cards';
import "./Home.scss"
import Navbar from '../Components/Navbar';
import docicon from '../assets/docicon.svg';
import screenshot from '../assets/screenshot.svg';
// import playstore from '../assets/playstore.svg';
import playstore from '../assets/playstoreimg.svg';
//import Sidebar from '../Components/Sidebar';
import Mid_sec from '../Components/Mid_sec';
import Achievements from '../Components/Achievements';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

const featureData = [
  {
    icon: {docicon},
    title: "Real Time Report",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FF9CBD"
  },
  {
    icon: {docicon},
    title: "Real Time Report",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#9CFFED"
  },
  {
    icon: {docicon},
    title: "Real Time Report",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#ECC6FF"
  },
  {
    icon: {docicon},
    title: "Real Time Report",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#B4C3E3"
  },
  
]
const Home = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <Navbar />
    
    <div className="home">
      <img src={Homeimg} className="bg" alt="" />
      {/* <div className=''>Download on Google Playstore</div> */}
      {/* <div className="compo flex items-center justify-center">
        <img src={comp} alt="" className="max-w-full h-auto " />
      </div> */}
      

      <div className='sec' id='whyus'>
           <div className='secimg md:block lg:block hidden'><img src={Secimg} alt="" /></div>
            <div className='sectext font-bold lg:text-5xl text-lg md:text-5xl'>Various features that you <div className='flex flex-row'>can get with Easy <div className='text-blue-600'>ED</div></div>
              <div className='flex flex-row mt-4 items-center'>
                <div className='h-8 border border-blue-600'></div>
                <div className='font-normal text-base ml-5 max-w-sm'>Various features that we have provided on our platform for students parents and teachers</div>
              </div>
            </div>
          </div>
        <div className='flex flex-row mt-16'>
          {featureData.map((feature,index) => (
            <div className='flex flex-col items-center max-w-md m-5' key={index}>
              <div className={`flex items-center justify-center rounded-full p-3`} style={{ backgroundColor: feature.color }}>
                <img src={docicon} alt="" className='w-8 h-8' />
              </div>
              <div className='font-bold text-2xl mt-4'>{feature.title}</div>
              <div className='font-normal text-base text-center mt-4'>{feature.content}</div>
            </div>
          ))}
        </div>

        <div className='w-full flex justify-center mt-16'>
          <img src={screenshot} alt="screen-shot img" />
        </div>

        <div className='w-full flex justify-center mt-14'>
          <a href="https://play.google.com/store/apps/details?id=com.easyed&pcampaignid=web_share" target='_blank' className='hover:animate-bounce'><img src={playstore} /></a>
        </div>


      <div className="sec2 flex flex-col mt-28">
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
      <div className="mt-20">
        <Mid_sec />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Achievements />
      </div>
        <Footer/>
    </div>
    </>
  );
};

export default Home;
