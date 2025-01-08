import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const NavBar = () => {

    //to flip the menu icon
    const [nav, setNav] = useState(false);
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "portfolio",
        },
        {
          id: 4,
          link: "experience",
        },
        {
          id: 5,
          link: "skillset",
        },
        {
          id: 5,
          link: "contact",
        },
      ];
    return (

        <div className="flex justify-between items-center w-full h-20 px-4 text-white sticky top-0 z-50 border-b backdrop-blur-lg border-blue-300">

            {/* fixed class fixes navbar on top  */}

            <div>
            <h1 className="text-3xl font-bold text-white tracking-tight leading-tight shadow-lg transform  ml-2">Ankit <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">Bhatt</span></h1>

            </div>

            {/* Tailwind is mobile first so in mobile links should be hidden than we open it in desktop  */}
            <ul className="hidden md:flex ">


            {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-blue-400 duration-200"
          >

            {/* Link is the attribute for smooth scroll  */}
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
                 
            </ul>


            {/* in desktop we need to hide the icon so we do : md:hidden  */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars scale={30} />}
            </div>

            {/* if nav is true then only show the list items  */}
            {/* It is specially for mobile screens */}
            {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-3xl"
            >

               
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}


                </ul>

            )}



        </div>
    );
};

export default NavBar;