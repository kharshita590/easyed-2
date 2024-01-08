import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogin = async (e) => {
    e.preventDefault(); // Move this line to the beginning
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      //console.log("hello ji")
      console.log(username)
      const response = await axios.post(`${import.meta.env.VITE_BASE_URI}/admin/login`, {
        username: username,
        password: password,
      },
        { withCredentials: true }
      );
      console.log(response);
      localStorage.setItem("isAuthenticatedAdmin", JSON.stringify(true));
      navigate('/admindashboard');
      setUsername("");
      setPassword("");
    }
    catch (error) {
      //console.error('Error logging in', error);
      toast({
        title: 'Error',
        description: "Error Logging In",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button

            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
