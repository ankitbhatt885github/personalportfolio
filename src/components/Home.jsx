import React from "react";

import HeroImage from "../assets/HeroImage.jpg"
import MainImage from "../assets/Main_Image.png"

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { Link } from "react-scroll";


const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  ">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full">


                <h2 className="text-4xl sm:text-7xl font-bold text-white">Hi! I'm Ankit. A Software Developer based in India.</h2>
                <p className="text-gray-500 py-4 max-w-md">Software development enthusiast with interest in Problem Solving.</p>

                <div>

                    {/* gradient color goes from cyan to blue  */}
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cyan-600   ">
                        Portfolio

                        <span className="group-hover:rotate-90 duration-300">

                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>

                        </span>

                    </Link>
                </div>
                </div>
               
                <div>

                    {/* For mobile it is small width else for desktop the width is full  */}
                    <img src={MainImage} alt="my profile" className="  mx-auto w-2/3 pb-4 md:w-full lg:pb-24"/>
                </div>
            </div>

        </div>
    )
}

export default Home;