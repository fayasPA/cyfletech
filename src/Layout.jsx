import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LineLoader from './components/Loaders/LineLoader';
import PageLoader from './components/Loaders/PageLoader';

const Layout = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  // Handle hiding the PageLoader once it's finished
  const handleLoaderComplete = () => {
    setIsLoaderVisible(false);
  };

  return (
    <div className="bg-selBlack your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col">
      {/* Conditionally render the PageLoader */}
      {/* {isLoaderVisible && <PageLoader onComplete={handleLoaderComplete} />} */}
      
      <div className="flex-grow md:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
