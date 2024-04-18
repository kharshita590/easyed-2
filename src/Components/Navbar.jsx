import React from 'react';
import logo from "../assets/logo.svg";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Button, InputGroup, Stack, InputLeftElement } from '@chakra-ui/react';
import { CgOrganisation } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { MdMenuOpen } from "react-icons/md";
import playstore from "../assets/playstore.svg";
import { CiHome } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { MdContactSupport } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [username, setid] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BASE_URI;
    // console.log('import.meta.env:', import.meta.env);
    // console.log('backendUrl:', backendUrl);
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(backendUrl);
        try {
            const response = await axios.post(`${backendUrl}/organisation/login`,
                {
                    email: username,
                    password: password,
                },
                { withCredentials: true }
            );

            //console.log(response);

            localStorage.setItem("isAuthenticated", JSON.stringify(true));
            setid("");
            setPassword("");

            // Close the modal
            onClose();

            // Navigate to the dashboard
            //console.log('Before navigation');
            navigate('/dashboard', { replace: true });
            window.location.href = "/dashboard";
            //console.log('After navigation');

            toast({
                title: 'Login Successful!',
                description: "You've successfully logged in.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            // Handle login error
            //console.log(error);
            toast({
                title: 'Login failed:',
                description: 'Please check your username and password.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });

            setid("");
            setPassword("");
        }
    };



    // const [isSidebarOpen, setSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setSidebarOpen(!isSidebarOpen);
    // };


    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    const Admin = () => {
        navigate("/admin", { replace: true });
    }



    return (
        <>
            {/* <nav className='fixed top-0 left-0 w-full bg-white shadow-md p-4 z-40 lg:hidden'>
                <div className='container mx-auto'>
                    <div className='flex items-end justify-between'>
                        <img src={logo} alt='' />
                        {isSidebarOpen ? (
                            <RxCross1
                                onClick={toggleSidebar}
                                className='hover:cursor-pointer transition-transform transform scale-125 duration-300 ease-in-out'
                            />
                        ) : (
                            <RxHamburgerMenu
                                onClick={toggleSidebar}
                                className='hover:cursor-pointer transition-transform transform scale-125 duration-300 ease-in-out'
                            />
                        )}
                    </div>
                </div>
            </nav>
            {isSidebarOpen && (
                <div className='fixed top-0 right-0 h-full w-54 bg-white z-40 p-4 transition-transform transform translate-x-0 duration-300 ease-in-out'>
                    <RxCross1
                        onClick={toggleSidebar}
                        className='hover:cursor-pointer transition-transform transform scale-125 duration-300 ease-in-out m-4'
                    />
                    <div>
                        <div className="flex flex-col m-8">
                            <Link to="/" className="text-blue-600 hover:text-blue-900 m-4 ">Home</Link>
                            <Link to="/">
                                <div onClick={() => scrollToSection('whyus')} className="text-blue-600 hover:text-blue-900">
                                    Why us?
                                </div>
                            </Link>

                            <Link to="/contactus" className="text-blue-600 hover:text-blue-900 m-4">Contact Us</Link>
                            <Link to="/terms" className='text-blue-600 hover:text-blue-900 m-4'>Terms</Link>
                            <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-900 ml-4">Privacy Policy</Link>
                        </div>

                        <button onClick={onOpen} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 m-6 ml-10">Login</button>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                            className="m-4"
                        >
                            <ModalOverlay />
                            <form onSubmit={handleSubmit} method="POST">
                                <ModalContent>
                                    <ModalHeader>Login</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <Stack spacing={4}>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none">
                                                    <CgOrganisation />
                                                </InputLeftElement>
                                                <Input type="username" name="userID" placeholder="Organisation UserID" value={username} onChange={(e) => setid(e.target.value)} required />
                                            </InputGroup>

                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none">
                                                    <RiLockPasswordLine />
                                                </InputLeftElement>
                                                <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            </InputGroup>
                                        </Stack>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme="blue" mr={3} type="submit">
                                            Login
                                        </Button>
                                        <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </form>
                        </Modal>

                    </div>
                </div>

            )} */}


            {/* for smaller screens */}
            <div className='flex justify-center w-full z-40 fixed mt-6'>
                <nav className='lg:hidden top-0 left-0 w-5/6 shadow-md p-4 bg-white rounded-full'>
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <img src={logo} alt="" />
                            <div className=''>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<MdMenuOpen />}
                                        variant='outline'
                                    />
                                    <MenuList>
                                    <Link to="/" className="text-black hover:text-blue-800"><MenuItem icon={<CiHome />} command=''>
                                            Home
                                        </MenuItem></Link>
                                        <p className='cursor-pointer font-bold text-blue-600 hover:text-black' onClick={onOpen}><MenuItem icon={<CiLogin />} command=''>
                                            Login
                                        </MenuItem></p>
                                        <Link to="/contactus" className="text-black hover:text-blue-800"><MenuItem icon={<MdContactSupport />} command=''>
                                            Contact Us
                                        </MenuItem></Link>
                                        <a href="https://play.google.com/store/apps/details?id=com.easyed&pcampaignid=web_share" className="hover:animate-bounce transition" target='_blank'><MenuItem icon={<IoLogoGooglePlaystore />} command=''>
                                            Download the App
                                        </MenuItem></a>
                                    </MenuList>
                                </Menu>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>






            <div className='flex justify-center w-full z-40 fixed mt-6'>
                <nav className={`top-0 left-0 w-5/6 shadow-md p-4 lg:block hidden bg-white rounded-full opacity-60 hover:opacity-100 transition-colors duration-200`}>
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <img src={logo} alt="" />
                            <div className="flex space-x-4 gap-6 flex-row items-center">
                                <Link to="/" className="text-black hover:text-blue-800">Home</Link>
                                <Link to="/contactus" className="text-black hover:text-blue-800">Contact Us</Link>
                                <Link to="/terms" className='text-black hover:text-blue-800'>Terms</Link>
                                <Link to="/privacy-policy" className="text-black hover:text-blue-800 ml-4">Privacy Policy</Link>
                                <p className='cursor-pointer font-bold text-blue-600 hover:text-black' onClick={onOpen}>Login</p>
                                {/* <Link to="/">
                                <div onClick={() => scrollToSection('whyus')} className="text-blue-600 hover:text-blue-900">
                                    Why us?
                                </div>
                            </Link> */}
                                <a href="https://play.google.com/store/apps/details?id=com.easyed&pcampaignid=web_share" className="hover:animate-bounce transition" target='_blank'><img className='' src={playstore} alt="" /></a>


                            </div>

                            {/* <button onClick={onOpen} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">Login</button> */}

                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                                className="m-4"
                            >
                                <ModalOverlay />
                                <form onSubmit={handleSubmit} method="POST">
                                    <ModalContent>
                                        <ModalHeader>Login</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6}>
                                            <Stack spacing={4}>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents="none">
                                                        <CgOrganisation />
                                                    </InputLeftElement>
                                                    <Input type="username" name="userID" placeholder="Organisation UserID" value={username} onChange={(e) => setid(e.target.value)} required />
                                                </InputGroup>

                                                <InputGroup>
                                                    <InputLeftElement pointerEvents="none">
                                                        <RiLockPasswordLine />
                                                    </InputLeftElement>
                                                    <Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                </InputGroup>
                                            </Stack>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme="blue" mr={3} type="submit">
                                                Login
                                            </Button>
                                            <Button onClick={onClose} mr={3}>Cancel</Button>
                                            <Button onClick={Admin}>Admin?</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </form>
                            </Modal>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
