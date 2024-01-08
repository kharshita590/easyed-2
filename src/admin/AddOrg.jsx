import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Stack, Checkbox } from '@chakra-ui/react';
// import { toast } from 'react-toastify';
import { useToast } from '@chakra-ui/react';

const AddOrg = () => {
  const [organisationname, setOrganisationName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isverified, setIsVerified] = useState(false);
  const [isblocked, setIsBlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post(`${import.meta.env.VITE_BASE_URI}/admin/addorganisation`, {
        organisationname,
        address,
        city,
        state,
        isverified,
        isblocked,
        email,
        password,
      },
      { withCredentials: true }
            );
            //console.log(response);

      //console.log('Server response:', response.data);

      // Reset form fields after a successful submission
      setOrganisationName('');
      setAddress('');
      setCity('');
      setState('');
      setIsVerified(false);
      setIsBlocked(false);
      setEmail('');
      setPassword('');
      toast({
        title: 'Successful!',
        description: "Organization Added Successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
    });

      // Optionally, you can perform additional actions after a successful submission
      // For example, show a success message or redirect to another page
    } catch (error) {
      toast({
        title: 'Error',
        description: "Error Adding Organization",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })

      // Handle errors, show error messages, etc.
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add Organization</h2>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          {/* Organization Name */}
          <Input
            type="text"
            placeholder="Organization Name"
            value={organisationname}
            onChange={(e) => setOrganisationName(e.target.value)}
            required
          />

          {/* Address */}
          <Input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          {/* City */}
          <Input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          {/* State */}
          <Input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          {/* Is Verified */}
          <Checkbox
            isChecked={isverified}
            onChange={(e) => setIsVerified(e.target.checked)}
          >
            Is Verified
          </Checkbox>

          {/* Is Blocked */}
          <Checkbox
            isChecked={isblocked}
            onChange={(e) => setIsBlocked(e.target.checked)}
          >
            Is Blocked
          </Checkbox>

          {/* Email */}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <Input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="blue"
          >
            Add Organization
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default AddOrg;
