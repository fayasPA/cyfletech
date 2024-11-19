import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LineLoader from './components/Loaders/LineLoader';

const Layout = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      className="your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col"
    >
      {/* {isLoading && <LineLoader />} */}

      {!isLoading && (
        <div className="bg-selBlack/90 flex-grow md:pb-0">
          <Navbar />

          <main className="flex-grow">
            <Outlet />
          </main>
        </div>
      )}
    </div>
  );
};

export default Layout;
