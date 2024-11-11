import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {


  return (
    <div
      className="your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col"
    >
        <div className="bg-selBlack/90 flex-grow md:pb-0">
          {/* <Navbar /> */}

          <main className="flex-grow">
            <Outlet />
          </main>

          {/* <Footer /> */}

        </div>
    </div>
  );
};

export default Layout;
