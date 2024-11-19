import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { companyName } from '../utils/constants';

export const navLists = [
    { name: 'Home', path: '/', order: 1 },
    { name: 'Work', path: '/products', order: 2 },
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
                ${isScrolled ? 'backdrop-blur-sm ' : 'bg-transparent'}
                ${isMobileMenuOpen && !isScrolled ? 'bg-selRed/30 backdrop-blur-sm' : ''}
                ${isMobileMenuOpen && isScrolled ? 'backdrop-blur-sm bg-black' : ''}
                ${isNavbarVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex ${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-16'} items-center justify-between transition-all duration-1000`}>
                    <div className="flex items-center text-center justify-center">
                        <NavLink to="/" className="flex items-center justify-center text-center uppercase">
                            <h1 className="company-font text-borderColor2 transition-all duration-700 ease-in-out font-light hover:font-bold">
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
                            {isMobileMenuOpen ? <FiX className="h-6 md:h-10 w-6 md:w-12" /> : <FiMenu className="h-6 md:h-10 w-6 md:w-12" />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`rounded-b-lg absolute top-full left-0 w-full transition-all duration-1000 ease-in-out transform ${isMobileMenuOpen ? "h-screen" : "max-h-0"} 
                    overflow-hidden ${isScrolled ? "bg-black" : "bg-white/20 backdrop-blur-3xl"}`}
                id="mobile-menu"
            >
                {/* Main container */}
                <div className="h-full w-full flex flex-col md:flex-row">
                    {/* Left section (Contact Info) */}
                    <div className="w-full md:w-1/3 h-full text-white flex flex-col justify-start items-start px-6 py-10 space-y-6">
                        <p className="text-sm font-light">ONE SPOT AVAILABLE FOR JANUARY 2025</p>
                        <button className="px-6 py-2 border border-white text-sm uppercase hover:bg-white hover:text-black transition">
                            Contact
                        </button>
                    </div>

                    {/* Right section (Nav Items) */}
                    <div className="w-full md:w-2/3 h-full text-white px-10 flex items-center justify-end">
                        <div className="grid grid-cols-2 gap-6 w-full p-10">
                            {/* Navigation Items */}
                            {navLists.map((item, index) => (
                                <NavLink
                                    key={item.order}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block ${isActive ? "font-semibold" : "font-extralight"} text-sm md:text-9xl transition duration-300 
                                        ${index % 2 === 0 ? "text-left" : "text-right"} 
                                        ${index === navLists.length - 1 && navLists.length % 2 !== 0 ? "text-center col-span-2" : ""}`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
