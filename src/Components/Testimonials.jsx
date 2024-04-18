import React from 'react';
import testimonial1 from '../assets/testimonial1.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialdata = [
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "John Doe",
        position: "Student",
        icon: testimonial1
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "John Doe",
        position: "Student",
        icon: testimonial1
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "John Doe",
        position: "Student",
        icon: testimonial1
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "John Doe",
        position: "Student",
        icon: testimonial1
    },
    // Add more testimonial data as needed
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed:4000,
        cssEase: "linear",
        swipeToSlide: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
        initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };
    return (
        <div className='flex flex-col items-center mt-20 mb-10'>
            <div className='font-semibold text-3xl'>What Students Say</div>
            <div className='mt-8 max-w-lg font-medium text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            <div className='mt-20 w-3/4 h-[250px]'>
            <Slider {...settings}>
                {testimonialdata.map((item, index) => (
                    <div className='m-4 w-1/4 h-fit rounded-lg flex flex-col shadow-lg' key={index}>
                        <div className='mt-2 ml-2 mr-2'>"{item.content}"</div>
                        <div className='flex flex-row items-center ml-2 mb-2 mt-4'>
                            <div><img src={item.icon} alt="" className='h-10' /></div>
                            <div className='h-10 ml-2'>
                                <p className='text-sm font-medium'>{item.name}</p>
                                <p className='text-xs opacity-75'>{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
