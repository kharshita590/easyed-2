import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { CiStar } from 'react-icons/ci';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://api.easyeduverse.tech/organisation/getuser', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  console.log(users)
  return (
    <div className='w-full h-screen bg-gray-300 flex items-center justify-center'>
      <div className='w-1/3 h-full overflow-y-scroll bg-white border-2 border-gray-400 flex-col justify-center items-center'>
        <Card>
          <CardHeader>
            <Heading size='md'>Student's List</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              {users.map((user, index) => (
                <Box key={index}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            <Heading size='xs' textTransform='uppercase'>
                              {user.userDetails.map((userDetail, index) => (
                                `${userDetail.firstName} ${userDetail.lastName}`
                              ))}
                            </Heading>
                            <Text pt='2' fontSize='sm' className='flex flex-row'>
                              {user._id}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                          <Heading size='xs' textTransform='uppercase'>
                            Stars: {user.star.length}
                          </Heading>
                          <Stack pt='2' fontSize='sm' spacing='2'>
                            {/* Convert the object to an array of React elements */}
                            {Object.entries(user.star.reduce((counts, star) => {
                              const category = star.category;
                              counts[category] = (counts[category] || 0) + 1;
                              return counts;
                            }, {})).map(([category, count]) => (
                              <div key={category}>
                                {category}: {count}
                              </div>
                            ))}
                          </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Users;
