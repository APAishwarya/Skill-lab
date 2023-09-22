import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home1 from './Components/Home1';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/'element={<Home1 />} />
          <Route path='/about'element={<About />} />
          <Route path='/contact'element={<Contact />} />
          <Route path='/login'element={<Login />} />
          <Route path='/signup'element={<Signup />} />
        </Routes>
        
      </BrowserRouter>
    
    </>
    
  )
}

export default App