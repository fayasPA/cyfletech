import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { companyEmail, companyName, navLists } from "../utils/constants";
import { gsap } from "gsap";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const scrollThreshold = 50;

    const menuRef = useRef(null); // Ref for the menu container
    const menuAnimation = useRef(null); // Ref for the GSAP animation instance

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            setIsNavbarVisible(currentScrollY < lastScrollY); // Show on scroll up
        }
        setLastScrollY(currentScrollY);
        setIsScrolled(currentScrollY > 50); // Change navbar background on scroll
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
        window.addEventListener("scroll", handleScrollDebounced);

        return () => {
            window.removeEventListener("scroll", handleScrollDebounced);
        };
    }, [lastScrollY]);

    // GSAP Animation for menu open/close
    useEffect(() => {
        if (menuRef.current) {
            if (isMobileMenuOpen) {
                menuAnimation.current = gsap.to(menuRef.current, {
                    height: "100vh",
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            } else {
                menuAnimation.current = gsap.to(menuRef.current, {
                    height: "0",
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            }
        }
    }, [isMobileMenuOpen]);

    // Close menu when a NavLink is clicked
    const handleNavLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        // ${isNavbarVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
        <nav
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-1000 ease-in-out 
                ${!isMobileMenuOpen && isScrolled ? "backdrop-blur-sm bg-selBlack/30" : ""}
                ${!isMobileMenuOpen && !isScrolled ? "bg-transparent" : ""}
                ${isMobileMenuOpen && !isScrolled ? " backdrop-blur-sm bg-black/60" : ""}
                ${isMobileMenuOpen && isScrolled ? "backdrop-blur-sm bg-black" : ""}
            `}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex ${isScrolled ? "h-12 md:h-14" : "h-16 md:h-16"} items-center justify-between transition-all duration-1000`}>
                    <div className="flex items-center text-center justify-center">
                        <NavLink to="/" className="flex items-center justify-center text-center uppercase">
                            <h1 className="company-font text-borderColor2 transition-all duration-700 ease-in-out font-light hover:font-bold">
                                {companyName}
                            </h1>
                        </NavLink>
                    </div>

                    <div className="flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="text-white p-2 rounded-md focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMobileMenuOpen ? <FiX className="h-6 md:h-10 w-6 md:w-12" /> : <FiMenu className="h-6 md:h-10 w-6 md:w-12" />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`rounded-b-lg absolute top-full left-0 w-full overflow-hidden 
                    ${isScrolled ? "bg-black" : "bg-selBlack/60 backdrop-blur-3xl"}`}
                style={{ height: "0" }} // Initial height for GSAP animation
                id="mobile-menu"
            >
                {/* Main container */}
                <div className="h-full w-full flex flex-col md:flex-row">
                    {/* Left section (Contact Info) */}
                    <div className="w-full md:w-1/3 md:h-full text-white flex flex-col justify-start items-start px-6 py-10 space-y-6">
                        {/* <NavLink to='/contact' onClick={handleNavLinkClick} className="px-6 py-2 border border-white text-sm uppercase hover:bg-white hover:text-black transition">
                            Contact
                        </NavLink> */}
                        <div >
                            <a
                                href={`mailto:${companyEmail}`}
                                className="text-[#1d1f20] px-6 py-3 rounded-xl 
      hover:bg-white/70 transition-colors duration-300 text-xl md:text-base uppercase border border-dashed border-gray border-selBlack bg-white animate-pulse"
                            >
                                {companyEmail}
                            </a>
                        </div>
                    </div>

                    {/* Right section (Nav Items) */}
                    <div className="w-full md:w-2/3 text-white px-4 md:px-10 flex items-center justify-end">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full p-4 md:p-10 h-full mt-10 md:mt-0">
                            {navLists.map((item, index) => (
                                <NavLink
                                    key={item.order}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block ${isActive ? "font-semibold" : "font-extralight"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl transition duration-300 
          ${index % 2 === 0 ? "text-left" : "text-right"} 
          ${index === navLists.length - 1 && navLists.length % 2 !== 0 ? "text-center col-span-2" : ""}`
                                    }
                                    onClick={handleNavLinkClick}
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
