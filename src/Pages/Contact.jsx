import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Button, Image, Divider } from '@chakra-ui/react'
import contactus from "../assets/contactus.jpg"
import logo from "../assets/logo.svg";
import Navbar from '../Components/Navbar';
//import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const Contact = () => {
  return (

    <>
    <Navbar/>
    {/* <Sidebar/> */}
    <div className='h-screen w-full bg-white relative flex items-center justify-center'>
    <div className='w-full bg-white h-screen flex items-center justify-center ml-7 mr-7'>
            <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className='shadow-2xl rounded-2xl border-2 border-gray-200'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '400px' }}
            src={contactus}
            alt='Contact us'
        />

        <Stack>
            <CardBody className=''>
            <Heading size='md'><img src={logo} alt="logo" /></Heading>

            <Text py='2'>
                <br /><br />
            Operational Address: 3083, tower hazelwood, mahagun mywoods, Noida, Uttar Pradesh, PIN: 201301
            <br />
            Telephone No: 7411676573
            </Text>
            </CardBody>

            <CardFooter className=''>
                <a href='mailto:info@easyeduverse.com'>
            <Button variant='solid' colorScheme='blue'>
                Email Us
            </Button></a>
            </CardFooter>
        </Stack>
        </Card>
    </div>
    <Footer/>
</div>
</>
  )
}

export default Contact