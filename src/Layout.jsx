import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LineLoader from './components/Loaders/LineLoader';

const Layout = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  return (
    <div className="bg-selBlack your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col ">
      <div className=" flex-grow md:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>

      {isLoaderVisible && (
        <LineLoader onComplete={() => setIsLoaderVisible(false)} />
      )}
    </div>
  );
};

export default Layout;
