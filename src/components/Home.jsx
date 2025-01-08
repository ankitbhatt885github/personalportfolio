import React from "react";

import HeroImage from "../assets/HeroImage.jpg"
import MainImage from "../assets/Main_Image.png"
import { motion } from 'framer-motion';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="w-full mt-16 lg:mt-20">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">


          <motion.h2
            className="text-3xl lg:text-6xl font-bold text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }} // Entrance animation: start hidden and slide up
            animate={{ opacity: 1, y: 0 }} // End state: visible and at normal position
            transition={{ duration: 1, ease: 'easeOut' }} // Duration and easing for entrance
            whileInView={{ scale: 1.05 }} // Permanent animation: slight zoom-in effect
            viewport={{ once: true }} // Only trigger entrance animation once
          >
            Hi! I'm <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">Ankit</span>. A Software Developer based in India.
          </motion.h2>
          <motion.p
            className="text-gray-400 py-4 max-w-md text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }} // Entrance animation: start hidden and slide from left
            animate={{ opacity: 1, x: 0 }} // End state: fully visible at normal position
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} // Duration, easing, and delay for entrance
            whileInView={{ x: [0, 10, -10, 0], opacity: [1, 0.7, 1] }} // Permanent animation: bounce effect with opacity
            viewport={{ once: true }} // Only trigger entrance animation once
          >
            Software development enthusiast with interest in Problem Solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state: slightly faded and below
            animate={{ opacity: 1, y: 0 }} // End state: fully visible and at normal position
            transition={{ duration: 1, ease: 'easeOut' }} // Duration and easing for the entrance
          >
            <div className="flex space-x-4 items-center"> {/* Flex container for horizontal alignment */}

              {/* Portfolio Button */}
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-600"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>

              {/* Download Resume Button */}
              <a
                href="/Resume_Ankit_2024.pdf" // Path to your PDF file in the public folder
                download="Ankit_Resume.pdf" // Default name for the downloaded file
                className="inline-flex items-center px-6 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition-transform transform hover:scale-105"
              >
                <span>Download Resume</span>
              </a>

            </div>
          </motion.div>


        </div>

        <div>

          {/* For mobile it is small width else for desktop the width is full  */}
          <img src={MainImage} alt="my profile" className=" mt-8 mx-auto w-2/3 pb-4 md:w-full lg:pb-24" />
        </div>
      </div>

    </div>
  )
}

export default Home;