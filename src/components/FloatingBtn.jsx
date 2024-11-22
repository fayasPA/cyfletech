import React, { useEffect, useRef, useState } from 'react';
import { FiPhone, FiMail, FiX } from 'react-icons/fi';
import { TbPhonePlus } from "react-icons/tb";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { companyEmail, companyInsta, companyPhoneNo } from '../utils/constants';

const FloatingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'power4.out',
      });
    } else {
      gsap.to(menuRef.current, {
        scale: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-50 text-white">
      <div
        ref={menuRef}
        className={`opened-button-div flex flex-col items-center bg-green-body/50 shadow-lg rounded-ss-3xl rounded-es-3xl p-2 border border-borderColor`}
        style={{ transform: 'scale(0)' }}
      >
        <button
          type="button"
          name="phone-btn"
          className="mb-2 p-2 bg-selBlack/30 rounded-full flex justify-center items-center"
          onClick={() => (window.location.href = `tel:+91${companyPhoneNo}`)}
        >
          <FiPhone className="text-xl" />
        </button>
        <button
          type="button"
          name="whatsapp-btn"
          className="mb-2 p-2 bg-selBlack/30 rounded-full flex justify-center items-center"
          onClick={() => (window.location.href = `https://wa.me/91${companyPhoneNo}`)}
        >
          <FaWhatsapp className="text-xl" />
        </button>
        <button
          type="button"
          name="instagram-btn"
          className="mb-2 p-2 bg-selBlack/30 rounded-full flex justify-center items-center"
          onClick={() => (window.location.href = `${companyInsta}`)}
        >
          <FaInstagram className="text-xl" />
        </button>
        <button
          type="button"
          name="mail-btn"
          className="mb-2 p-2 bg-selBlack/30 rounded-full flex justify-center items-center"
          onClick={() => (window.location.href = `mailto:${companyEmail}`)}
        >
          <FiMail className="text-xl" />
        </button>
      </div>
      <button
        type="button"
        ref={buttonRef}
        onClick={toggleMenu}
        className={`border hover:border-0 ${isOpen && 'border-0'} border-borderColor p-4 text-white rounded-ss-3xl shadow-lg bg-selBlack/30 flex justify-center items-center transition duration-300 ease-in-out`}
      >
        {isOpen ? <FiX className="text-xl md:text-3xl" /> : <TbPhonePlus className="animate-bounce text-xl md:text-3xl" />}
      </button>
    </div>
  );
};

export default FloatingBtn;
