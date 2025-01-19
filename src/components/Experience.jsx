import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import idea from "../assets/idea.png"
import seo from "../assets/seo.png"
import mongodbImg from "../assets/mongo-db.png"
import expressImg from "../assets/express-icon.png"
import nodeImg from "../assets/nodejs-img.png"
import typescImg from "../assets/typescript_icon.png"
import nextjsImg from "../assets/nextjs-icon.png"


const Experience = () => {


  const techs = [


    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: typescImg,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: nextjsImg,
      title: "Next.js",
      style: "shadow-gray-500",
    },


    {
      id: 8,
      src: expressImg,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: nodeImg,
      title: "Node.js",
      style: "shadow-green-300",
    },
    {
      id: 10,
      src: idea,
      title: "Problem Solving",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: mongodbImg,
      title: "MongoDB",
      style: "shadow-green-300",
    },

  ];


  return (
    <div name='experience' className=" w-full h-full pt-10 md:pt-0 mt-24">

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <div className="text-center">
            <span className='  text-white px-2 py-2 text-3xl font-medium border-b border-blue-500'>EXPERIENCE</span>
          </div>

          <div className="text-center mb-10">

            <h2 className='text-3xl lg:text-3xl mt-10 '>The following are the technologies I have experience in: </h2>

          </div>


          <div>


            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience;