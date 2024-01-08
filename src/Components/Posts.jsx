import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, IconButton, Image, useToast } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Posts = () => {
  const [userData, setUserData] = useState(null);
  const toast = useToast();
  useEffect(() => {
    // Fetch user data from the API
    fetch(`${import.meta.env.VITE_BASE_URI}/organisation/getpost`,{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      
      .catch((error) => {
        toast({
          title: 'Error',
          description: 'Error fetching user data',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount
  //console.log(userData);
  return (
    <div className='w-full h-screen bg-gray-300 flex items-center justify-center'>
      <div className='w-1/3 h-full overflow-y-scroll bg-white border-2 border-gray-400 flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center pt-8'>
        {userData && userData.map((user, index) => (
          user.map((users,indexes)=>(
            <Card key={indexes} maxW='md' className='rounded-md mb-4'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={users.userId} src={users.avatar} />
                    <Box>
                      <Heading size='sm'>{users.userId}</Heading>
                      {/* <Text>{user.userId}</Text> */}
                    </Box>
                  </Flex>
                  <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>{users.content}</Text>
              </CardBody>
              {users.post && ( // Check if imageUrl is not null
                <Image
                  objectFit='cover'
                  src={users.post}
                  alt='posted Image'
                  className='rounded-md'
                />
              )}
            </Card>
          )
          ))
            )}
        </div>
      </div>
    </div>
  );
};

export default Posts;