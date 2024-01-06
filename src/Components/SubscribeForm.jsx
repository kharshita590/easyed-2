import React from 'react';
import { Input, Card, Heading, CardBody, InputGroup,Button, Stack, CardHeader, CardFooter } from '@chakra-ui/react'
const SubscribeForm = () => {

  return (
    <Card align='center' >
  <CardHeader>
    <Heading size='md'> Subscribe to our NewsLetter</Heading>
  </CardHeader>
  <CardBody>
  <Stack spacing={4}>
  <InputGroup>
    <Input type='email' placeholder='Enter Your Email' />
  </InputGroup>
</Stack>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>Submit</Button>
  </CardFooter>
</Card>
  );
};

export default SubscribeForm;
