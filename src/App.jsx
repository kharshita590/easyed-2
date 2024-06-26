import React from 'react';
// import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Admin from "./admin/Admin"
// import PrivateRoute from './admin/PrivateRoute';
import AdminDashboard from "./admin/AdminDashboard";
import Posts from './Components/Posts';
import Users from './Components/Users';
import Terms from './Pages/Terms';
import Profile from './Components/profile';
import Creativity from './Components/Creativity';
import Table from './Components/table';

function App() {
  // Check if the user is authenticated
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const isAuthenticatedAdmin = JSON.parse(localStorage.getItem("isAuthenticatedAdmin"))

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path ='profile' element={<Profile/>}/>
        <Route path ='table' element={<Table/>}/>
        {/* {isAuthenticatedAdmin ?  */}
        (<Route path="/admindashboard" element={<AdminDashboard />} />) 
        {/* : (<Route path="/" element={<Home />} />) */}
        {/* Conditionally render Dashboard if authenticated */}
        {/* {isAuthenticated ? ( */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='posts' element={<Posts />} />
            <Route path='users' element={<Users />} />
            {/* <Route path ='profile' element={<Profile/>}/> */}
            <Route path='creativity' element={<Creativity />} />
          </Route>
        {/* ) : ( */}
          {/* // Redirect to home if not authenticated
          <Route path="*" element={<Home />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
