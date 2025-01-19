import React from "react";



import pomo from "../assets/Pomodoro app.png";

import quizApp from "../assets/Quiz App.png";
import weatherApp from "../assets/Weather App.png";
import portf from "../assets/personalport.png";
import speechToText from "../assets/speechtotxt.png"
import foodie from "../assets/Foodie-App.png"
import propertyzoneImg from "../assets/PropertyZone-img.png"
import uploaditImg from "../assets/Upload_it.png"
import qrEasyImg from "../assets/Qr_easy.png"


const Portfolio = () => {

  const portfolios = [

    
    {
      id: 1,
      src: uploaditImg,
      demo: "https://uploadit-lilac.vercel.app/sign-in",
      code: "https://github.com/ankitbhatt885github/uploadit",
    },
    {
      id: 2,
      src: propertyzoneImg,
      demo: "https://propertyzone.onrender.com",
      code: "https://github.com/ankitbhatt885github/propertyzone",
    },
    {
      id: 3,
      src: qrEasyImg,
      demo: "https://qreasy.vercel.app/",
      code: "https://github.com/ankitbhatt885github/qreasy",
    },
    {
      id: 4,
      src: foodie,
      demo: "https://foodie-foodapp.vercel.app/",
      code: "https://github.com/ankitbhatt885github/foodie-foodapp",
    },

    {
      id: 5,
      src: portf,
      demo: "",
      code: "https://github.com/ankitbhatt885github/personalportfolio",
    },
    {
      id: 6,
      src: quizApp,
      demo: "https://multi-category-quiz-app.vercel.app/",
      code: "https://github.com/ankitbhatt885github/MultiCategoryQuizApp",
    },

    {
      id: 7,
      src: pomo,
      demo: "https://pomodoroapp-roan.vercel.app/",
      code: "https://github.com/ankitbhatt885github/pomodoroapp",
    },



    {
      id: 8,
      src: weatherApp,
      demo: "https://whats-the-weather-nine.vercel.app/",
      code: "https://github.com/ankitbhatt885github/WhatsTheWeather",
    },



  ];
  return (
    <div name="portfolio" className="  w-full text-white  mb-10 lg:mb-40 mt-24">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div className="text-center">
            <span className='  text-white px-2 py-2 text-3xl font-medium border-b border-blue-500'>PORTFOLIO</span>
          </div>
          <div className="text-center mb-10">

            <h2 className='text-3xl lg:text-4xl mt-10 '>Check out some of my Personal Projects  </h2>

          </div>

        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-sky-400 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 ">
                  <a href={demo} target="_blank" >Preview</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 ">
                  <a href={code} target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;