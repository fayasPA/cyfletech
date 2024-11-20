import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// images
import AmanimotorsImage from "./src/assets/images/amanimotors.png";
import LuxemotoImage from "./src/assets/images/luxemoto.png";
// videos
//import Luxemoto from "./src/assets/videos/luxmoto.mp4";
//import Amanimotors from "./src/assets/videos/amanimotors.mp4";
//import PremierSteels from "./src/assets/videos/premiersteels.mp4";
//import Reactor from "./src/assets/videos/reactor.mp4";
//import Fizzi from "./src/assets/videos/fizzi.mp4";
// background image
// import Kiran from './src/assets/images/kiran.jpeg'
// import Kiran from './src/assets/images/kiranCartoon.png'
import Kiran from './src/assets/images/kiranCartoon2.jpg'
// import Hafiz from './src/assets/images/hafiz.jpeg'
// import Hafiz from './src/assets/images/hafizCartoon.png'
import Hafiz from './src/assets/images/hafizcartoon1.jpeg'
// import Hafiz from './src/assets/images/hafizcartoon2.png'
// import Hafiz from './src/assets/images/hafizcartoon3.jpg'
import Varun from './src/assets/images/fayas.jpg'
import Fayas from './src/assets/images/fayasCartoon.png'

import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaLaptopCode, FaBriefcase } from "react-icons/fa";

export const links = [
    {
        name: "About",
        number: "01",
        hash: "#about",
    },
    {
        name: "Services",
        number: "02",
        hash: "#services",
    },
    {
        name: "Projects",
        number: "03",
        hash: "#projects",
    },
    {
        name: "Experience",
        number: "04",
        hash: "#experience",
    },
    {
        name: "Contact",
        number: "05",
        hash: "#contact",
    },
];

export const socials = [
    {
        name: "Github",
        icon: React.createElement(FaGithub),
        link: "https://github.com/fayasPA"
    },
    {
        name: "LinkedIn",
        icon: React.createElement(FaLinkedinIn),
        link: "https://www.linkedin.com/in/fayas-p-a-328748142/"
    },
    {
        name: "Instagram",
        icon: React.createElement(FaInstagram),
        link: "https://www.instagram.com/__fayas_muthaleef__/"
    },
];

export const experiencesData = [
    {
        title: "Self-Learning from YouTube",
        location: "Remote",
        description:
            "Started our learning journey in 2022 by utilizing YouTube as a primary resource for mastering web development, focusing on React, JavaScript, and frontend technologies as well as LLM.",
        icon: React.createElement(FaYoutube), // YouTube icon for self-learning
        date: "2022",
        type: "study"
    },
    {
        title: "Open Source Contributions",
        location: "Remote",
        description:
            "In 2023, We began contributing to open-source projects. This helped me refine my coding skills and collaborate with developers worldwide on diverse projects, enhancing my understanding of best coding practices.",
        icon: React.createElement(FaLaptopCode), // Laptop code icon for open-source coding
        date: "2023",
        type: "work"
    },
    {
        title: "Freelance Web Developer",
        location: "Remote",
        description:
            "Started working as a freelance web development team for various businesses in 2024, developing custom web solutions, primarily using React, JavaScript, and modern web technologies to meet clients' needs.",
        icon: React.createElement(FaBriefcase), // Briefcase icon for freelance work
        date: "2024 - Present",
        type: "work"
    }
];

export const teamMembers = [
    {
        name: "Fayas Muthaleef",
        picture: Fayas,  // Replace with correct image path
        bio: "Fayas is a seasoned full-stack developer with a strong focus on React and modern web technologies. As the team lead, he oversees development and ensures seamless project delivery.",
        linkedIn: "https://www.linkedin.com/in/fayas-p-a-328748142/",
    },
    {
        name: "Varun MS",
        bio: "Varun specializes in Large Language Models (LLMs), artificial intelligence, and chatbot development. His innovative approach drives our AI-powered solutions.",
    },
    {
        name: "Kiran NJ",
        picture: Kiran,  // Replace with correct image path
        bio: "Kiran is a frontend React developer dedicated to delivering pixel-perfect UI designs. He collaborates with the backend team to build cohesive, high-performance web applications.",
        linkedIn: "https://www.linkedin.com/in/kiran-n-9600012b6/",
    },
    {
        name: "Hafiz Azeez",
        picture: Hafiz,  // Replace with correct image path
        bio: "Hafiz is a web designer with expertise in Figma and user experience design. He ensures that every project has a polished and professional look.",
        linkedIn: "https://www.linkedin.com/in/imhaafz/",
    }
];

export const projectsData = [
    {
        title: "Premier Steels",
        number: "01",
        description:
            "Premier Steels is a Steel distribution company website, It make use of react, gsap, etc at frontend.",
        tags: ["React", "GSAP", "Tailwind"],
        videoUrl: 'https://youtu.be/5OEk9v8Tzn4',
        imageUrl: LuxemotoImage,
        backgroundColor: "black",
        link: "https://thepremiersteels.com",
        githubLink: "https://github.com/fayasPA/premier_steels"
    },
    {
        title: "LuxeMoto",
        number: "02",
        description:
            "Luxemoto is a used car premium website used to showcase the stock of the cars available, It make use of react, gsap, etc at frontend and golang and postgres at the backend.",
        tags: ["React", "GSAP", "Tailwind", "GoLang"],
        videoUrl: 'https://youtu.be/jK2rgkw_sOw',
        imageUrl: LuxemotoImage,
        backgroundColor: "white",
        link: "https://luxemoto.in",
        githubLink: "https://github.com/fayasPA/luxe-moto"
    },
    {
        title: "Amanimotors",
        number: "03",
        description:
            "Amanimotors is a used car premium website used to showcase the stock of the cars available, It make use of react, gsap, etc at frontend and golang and postgres at the backend.",
        tags: ["React", "GSAP", "Tailwind", "GoLang"],
        videoUrl: 'https://youtu.be/Uu_pSi12Q7U',
        imageUrl: AmanimotorsImage,
        backgroundColor: "black",
        link: "https://amanimotors.in",
        githubLink: "https://github.com/fayasPA/amani-motors"
    },
    {
        title: "Alt Co",
        number: "04",
        description:
            "The AltCo  website clone is a project built to learn   advanced web technologies and design principles. It features smooth animations with GSAP, and uses React and Tailwind CSS for modern, visually appealing design.",
        tags: ["React", "Tailwind", "GSAP"],
        videoUrl: 'https://youtu.be/lrXv7fnu0Yg',
        link: "https://team-nkg-reimagine-round1.vercel.app/",
        githubLink: "https://github.com/Kiran-nj/BestWeb.git"
    },
    {
        title: "Fizzi Website",
        number: "05",
        description:
            "The Fizzy website is a project built to learn advanced web technologies and design principles. It features smooth animations with GSAP, and uses React and Tailwind CSS and Three.js for modern, visually appealing design",
        tags: ["React", "Tailwind", "GSAP","Three.JS"],
        videoUrl: 'https://youtu.be/QFXBquu7ItI',
     link: "https://fizzi-demo.vercel.app/",
        githubLink: "https://github.com/Kiran-nj/Fizzzy"
    },

];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Python",
    "Django",
    "Django REST",
    "Go",
    "Git",
    "Tailwind",
    "Semantic UI",
    "Postgres",
    "MongoDB",
    "SQL",
    "Redux",
    "GSAP",
    "Docker",
    "Figma",
    "LLM",
    "Chatbots",
];