import React from 'react'
import logo from '../assets/logo.svg'
import insta from '../assets/insta.svg'
import x from '../assets/x.svg'
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center mt-16 '><div className='w-3/4 border border-blue-500'></div>
        <div className='w-3/4'>
        <div className='flex flex-col mt-20'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col items-center w-1/3'>
                    <img src={logo} alt="" />
                    <p className='text-sm'>Gr. Noida</p>
                    <p className='text-sm'>Uttar Pradesh</p>
                </div>
                <div className=' w-1/3 flex justify-center'>
                    <div className='flex flex-col items-start'>
                        <div className='mt-2 flex flex-row'> Social Media</div>
                        <a href="https://www.instagram.com/easyeduverse/" target='_blank'><div className='mt-2 flex flex-row justify-center hover:underline'><img src={insta} alt="" className='mr-1' /> Instagram</div></a>
                        <a href="https://www.linkedin.com/company/97856072" target='_blank'><div className='mt-2 flex flex-row justify-center hover:underline'><img src={insta} alt="" className='mr-1' /> Linkedin</div></a>
                        <a href="https://twitter.com/Easyeduverse" target='_blank'><div className='mt-2 flex flex-row justify-center hover:underline'><img src={x} alt="" className='mr-1' /> Twitter</div></a>
                    </div>
                </div>
                <div className='w-1/3 flex justify-center'>
                    <div className='flex flex-col items-start'>
                        <p>Features</p>
                        <Link to="/terms"><p className='mt-2 hover:underline'>Terms and Conditions</p></Link>
                        <Link to="/privacy-policy"><p className='mt-2 hover:underline'>Privacy Policy</p></Link>
                        <Link to="/contactus"><p className='mt-2 hover:underline'>Contact Us</p></Link>
                    </div>
                </div>

            </div>
            <div className='w-full flex justify-center mt-20 font-medium'>
                Copyright © 2024  | Powered by EasyEd
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer