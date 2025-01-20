import React from "react";
import screenLap from '../assets/laptop-code.jpg'
import codeScreen from "../assets/code-screen.jpg"


const Portfolio = () => {

  const portfolios = [


    {
      id: 1,
      title: 'Personal Portfolio',
      src: screenLap,
      demo: "",
      code: "https://github.com/ankitbhatt885github/personalportfolio",
      skills: ['Reactjs', 'TailwindCSS', 'JavaScript'],
    },
    {
      id: 5,
      title: 'UploadIt',
      src: codeScreen,
      demo: "https://uploadit-lilac.vercel.app/sign-in",
      code: "https://github.com/ankitbhatt885github/uploadit",
      skills: ['Reactjs', 'Nextjs', 'Appwrite', 'TypeScript'],
    },
    {
      id: 2,
      title: 'Property Zone',
      src: screenLap,
      demo: "https://propertyzone.onrender.com",
      code: "https://github.com/ankitbhatt885github/propertyzone",
      skills: ['Reactjs', 'Nodejs', 'Express', 'MongoDB', 'JavaScript'],
    },
    {
      id: 3,
      title: 'QREasy',
      src: codeScreen,

      demo: "https://qreasy.vercel.app/",
      code: "https://github.com/ankitbhatt885github/qreasy",
      skills: ['Reactjs', 'Nextjs', 'TypeScript'],
    },
    {
      id: 4,
      title: 'Foodie App',
      src: screenLap,
      demo: "https://foodie-foodapp.vercel.app/",
      code: "https://github.com/ankitbhatt885github/foodie-foodapp",
      skills: ['Reactjs', 'Redux', 'JavaScript'],
    },


    {
      id: 6,
      title: 'Multi Category Quiz App',
      src: codeScreen,
      demo: "https://multi-category-quiz-app.vercel.app/",
      code: "https://github.com/ankitbhatt885github/MultiCategoryQuizApp",
      skills: ['Reactjs', 'API Integration', 'JavaScript'],
    },
    {
      id: 7,
      title: 'InsightZone',
      src: screenLap,
      demo: "https://insightzone.vercel.app/",
      code: "https://github.com/ankitbhatt885github/insightzone",
      skills: ['Reactjs', 'Recharts', 'JavaScript'],
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
          {portfolios.map(({ id, title, src, demo, code, skills }) => (
            <div key={id} className="shadow-md shadow-sky-400 rounded-lg duration-200 hover:shadow-blue-500 bg-white overflow-hidden transform hover:shadow-xl">
              <img
                src={src}
                alt=""
                className="w-full p-2 h-56 object-cover rounded-t-lg"
              />
              <p className="text-lg pl-6 text-blue-600 font-medium px-3 py-1  ">{title}</p>
              <div className="p-6 pt-3">
                <div className="flex items-center justify-center space-x-4 mb-4">

                  <button className="w-1/2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                    <a href={demo} target="_blank" rel="noopener noreferrer">Preview</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200">
                    <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                  </button>
                </div>

             
                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-sm bg-sky-100 text-sky-600 px-3 py-1 rounded-full hover:bg-sky-200 transition duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio;