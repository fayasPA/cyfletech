import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { companyLogo } from '../utils/constants';
import { companyName } from '../utils/constants';

export const navLists = [
    { name: 'Home', path: '/', order: 1 },
    { name: 'Products', path: '/products', order: 2 },
    { name: 'Blog', path: '/blog', order: 3 },
    { name: 'About', path: '/about', order: 4 },
    { name: 'Contact', path: '/contact', order: 5 },
];

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const scrollThreshold = 50;
    const menuRef = useRef(null);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            setIsNavbarVisible(currentScrollY < lastScrollY); // Show on scroll up
        }
        setLastScrollY(currentScrollY);

        // Change navbar background on scroll
        setIsScrolled(currentScrollY > 50);
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    useEffect(() => {
        const handleScrollDebounced = debounce(handleScroll, 100);
        window.addEventListener('scroll', handleScrollDebounced);

        return () => {
            window.removeEventListener('scroll', handleScrollDebounced);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out bg-green`}
//             className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out
//                 ${isScrolled ? 'bg-white' : 'bg-green'}
//                 ${isMobileMenuOpen && !isScrolled ? 'bg-selRed/30 backdrop-blur-sm' : ''}
//                 ${isMobileMenuOpen && isScrolled ? 'bg-white' : ''}
//     ${isNavbarVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}            
// `}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex ${isScrolled ? 'h-12 md:h-24' : 'h-16 md:h-24'} items-center justify-between transition-all duration-1000`}>
                    <div className="flex items-center text-center justify-center">
                        <NavLink to="/" className="flex items-center justify-center text-center uppercase">
                            <h1 className="company-font text-borderColor transition-all duration-700 ease-in-out font-semibold lg:font-bold">
                                {companyName}
                            </h1>
                        </NavLink>
                    </div>


                    <div className=" flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 rounded-md focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`rounded-b-lg absolute top-full left-0 w-full transition-all duration-1000 ease-in-out transform ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}
                    overflow-hidden ${isScrolled ? 'bg-black' : 'bg-selRed/30 backdrop-blur-3xl'} lg:hidden uppercase`}
                id="mobile-menu"
            >
                <div
                    ref={menuRef}
                    className="px-2 pb-3 flex flex-col justify-center items-start">
                    {navLists.map((item) => (
                        <NavLink
                            key={item.order}
                            to={item.path}
                            className={({ isActive }) =>
                                `block w-full px-3 py-2 rounded-md text-sm ${isActive ? 'text-white font-extrabold' : 'text-white font-extralight '}
                            `}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <button className="ml-3 mt-1 request-nav-button animate-pulse mobile px-7 py-1"
                    >
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="https://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Get Quote</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="https://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
