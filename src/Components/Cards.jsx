import React from 'react';
import { Flex, Box, Heading, Text, ChakraProvider } from '@chakra-ui/react';
import { IoIosSchool } from 'react-icons/io';
import { GiTeacher } from 'react-icons/gi';
import { PiStudent } from 'react-icons/pi';

const Cards = () => {
  return (
    <ChakraProvider>
      <Flex
        direction={['column', 'column', 'row']} // Column layout for small screens, row layout for medium and large screens
        justify='space-around' // Adjust the justification as needed
        align='center' // Align items to the center
        wrap='wrap' // Allow items to wrap to the next line
        gap={12}
      >
        <Box
          border="1px solid #A1AEBF"
          borderRadius="md"
          width={['100%', '100%', '300px']}
          minHeight="300px"
          _hover={{ backgroundColor: '#446EEB', color: 'white', transition: 'background-color 0.3s ease-in-out' }}
        >
          <Heading size='md' p={4}><PiStudent/>For Students</Heading>
          <Text p={4}>
            Empower your learning journey with EasyED. Access personalized study plans, interactive quizzes, and a supportive community to excel in your academic endeavors.
          </Text>
        </Box>
        <Box
          border="1px solid #A1AEBF"
          borderRadius="md"
          width={['100%', '100%', '300px']}
          minHeight="300px"
          _hover={{ backgroundColor: '#446EEB', color: 'white', transition: 'background-color 0.3s ease-in-out' }}
        >
          <Heading size='md' p={4}><GiTeacher/>For Teachers</Heading>
          <Text p={4}>
            Elevate your teaching experience with EasyED. Streamline lesson planning, track student progress, and engage with a collaborative network of educators for enhanced classroom success.
          </Text>
        </Box>
        <Box
          border="1px solid #A1AEBF"
          borderRadius="md"
          width={['100%', '100%', '300px']}
          minHeight="300px"
          _hover={{ backgroundColor: '#446EEB', color: 'white', transition: 'background-color 0.3s ease-in-out' }}
        >
          <Heading size='md' p={4}><IoIosSchool/>For Schools</Heading>
          <Text p={4}>
            Transform your institution with EasyED. Manage student data, streamline administrative tasks, and foster a dynamic learning environment that promotes academic excellence.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Cards;
