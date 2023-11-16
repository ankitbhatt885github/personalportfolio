import React from "react";

 
import passGen from "../assets/Password Generator.png";
import pomo from "../assets/Pomodoro app.png";
import portf from "../assets/Portfolio.png";
import quizApp from "../assets/Quiz App.png";
import weatherApp from "../assets/Weather App.png";
 


const Portfolio = () => {

    const portfolios = [

        //we are referencing the images here so that we can loop over them.
        //We can also copy paste code for 6 separate cards or do like this
        {
            id: 1,
            src: quizApp,
            demo: "https://multi-category-quiz-app.vercel.app/",
            code: "https://github.com/ankitbhatt885github/MultiCategoryQuizApp",
          },
          {
            id: 2,
            src: pomo,
            demo: "https://pomodoroapp-roan.vercel.app/",
            code: "https://github.com/ankitbhatt885github/pomodoroapp",
          },
          {
            id: 3,
            src: weatherApp,
            demo: "https://whats-the-weather-nine.vercel.app/",
            code: "https://github.com/ankitbhatt885github/WhatsTheWeather",
          },
          {
            id: 4,
            src: speechToText,
            demo: "hhttps://speechtotext-tau.vercel.app/",
            code: "https://github.com/ankitbhatt885github/SpeakToGetText",
          },
          {
            id: 5,
            src: portf,
            demo: "https://whats-my-weather-app.netlify.app",
            code: "https://github.com/ankitbhatt885github/personalportfolio",
          },
          
    ];
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my Personal Projects</p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a  href={demo} target="_blank" >Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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