import React from "react";
import { motion } from 'framer-motion';

const About = () => {
    return (


         

        <div name="about" className="w-full h-screen text-white bg-cyan-950">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          </div>
  
          {/* Parallax effect for the first text */}
          <motion.p
            className="text-xl mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
           Hi, I'm Ankit, a Computer Science enthusiast passionate about Software Development, React.js, Next.js, and the MERN stack. With a strong foundation in Problem-Solving and Data Structures/Algorithms.
          </motion.p>
          <br />
  
          {/* Parallax effect for the second text */}
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            As a Developer, I believe in creating Simple Responsive UIs that capture attention and are a gem to the eye. In addition to it, I specialize in API integration, ensuring smooth communication between the client and server. 
          </motion.p>
        </div>
      </div>
      
        
    )
}

export default About;