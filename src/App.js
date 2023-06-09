import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Footer from './components/Footer/Footer';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { FiArrowUpCircle } from 'react-icons/fi';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Page404 from './components/Page404/Page404';

const App = () => {

  // const router = createBrowserRouter([
  //   {path: '/', Element: <Home></Home>},
  //   {path: '/home', Element: <Home></Home>},
  //   {path: '*', Element: <div>Hello world!</div>}
  // ]) 

  return (
    <div className='container'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      {/* <Home></Home> */}
      {/* <RouterProvider router={router} /> */}
      <Footer></Footer>
{/* 
      <ScrollToTop 
        smooth
        color={"#BEE329"}
        top={30}
        component={<FiArrowUpCircle style={{ fontSize: "1.5rem" }}></FiArrowUpCircle>}
      /> */}
    </div>
  );
};

export default App;