import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LineLoader from './components/Loaders/LineLoader';
import PageLoader from './components/Loaders/PageLoader';
import ScrollToTop from './utils/ScrollToTop';
import LocomotiveScroll from 'locomotive-scroll';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FloatingBtn from './components/FloatingBtn';

const Layout = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();

  // Handle hiding the PageLoader once it's finished
  const handleLoaderComplete = () => {
    setIsLoaderVisible(false);
  };

  return (
    <div className="bg-black your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col">
        <ToastContainer toastClassName="custom-toast" />
        {/* Conditionally render the PageLoader */}
      {isLoaderVisible && <PageLoader onComplete={handleLoaderComplete} />}
        <FloatingBtn />
        <ScrollToTop />
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
