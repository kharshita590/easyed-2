import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Heading, Text, IconButton, Image, useToast } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Posts = () => {
  const [userData, setUserData] = useState(null);
  const [showFullTextMap, setShowFullTextMap] = useState({});
  const toast = useToast();

  useEffect(async () => {
    // Fetch user data from the API
    try{
    await fetch(`${import.meta.env.VITE_BASE_URI}/organisation/getpost`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
  }catch(error){
        toast({
          title: 'Error',
          description: 'Error fetching user data',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const toggleFullText = (postIndex) => {
    setShowFullTextMap((prevMap) => ({
      ...prevMap,
      [postIndex]: !prevMap[postIndex],
    }));
  };

  return (
    <div className='w-full h-screen bg-gray-300 flex items-center justify-center'>
      <div className='w-1/3 h-full overflow-y-scroll bg-white border-2 border-gray-400 flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center pt-8'>
          {userData &&
            userData.map((user, userIndex) =>
              user.map((users, postIndex) => (
                <Card key={postIndex} w='full' className='rounded-md mb-4'>
                  <CardHeader>
                    <Flex spacing='4'>
                      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={users.userId} src={users.avatar} />
                        <Box>
                          <Heading size='sm'>{users.userId}</Heading>
                        </Box>
                      </Flex>
                      <IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    {showFullTextMap[postIndex] ? (
                      <>
                        <Text>{users.content}</Text>
                        <button onClick={() => toggleFullText(postIndex)} className='text-blue-500 hover:text-blue-800'>
                          See less
                        </button>
                      </>
                    ) : (
                      <>
                        <Text>
                          {users.content.length > 150 ? `${users.content.slice(0, 150)}...` : users.content}
                        </Text>
                        {users.content.length > 150 && (
                          <button onClick={() => toggleFullText(postIndex)} className='text-blue-500 hover:text-blue-800'>
                            See more
                          </button>
                        )}
                      </>
                    )}
                  </CardBody>
                  {users.post && (
                    <Image
                      objectFit='cover'
                      src={users.post}
                      alt='posted Image'
                      className='rounded-md'
                    />
                  )}
                </Card>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
