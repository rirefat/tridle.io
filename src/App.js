import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Footer from './components/Footer/Footer';

import { FiArrowUpCircle } from 'react-icons/fi';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>

      <ScrollToTop 
        smooth
        color={"#BEE329"}
        top={30}
        component={<FiArrowUpCircle style={{ fontSize: "1.5rem" }}></FiArrowUpCircle>}
      />
    </div>
  );
};

export default App;