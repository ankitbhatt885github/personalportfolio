import React from "react";
import { motion } from 'framer-motion';

const Skillset = () => {
    return (


         

<div name="skillset" className="w-full h-screen   text-white bg-gradient-to-b from-black to-gray-800 md:pt-0">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p className="text-4xl font-bold inline border-b-4 border-gray-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}>Skillset</motion.p>
                </div>

                <motion.p className="text-xl mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}> I possess a diverse set of skillsets that collectively contribute to my proficiency in various domains that includes HTML,CSS, Javascript, Tailwind,Bootstrap, Java, React.js, Next.js, TypeScript, Express.js, Node.js, MongoDB. My proficiency extends to front-end technologies like React.js, enabling me to create intuitive and user-friendly interfaces. </motion.p>
                <br />

                <p className="text-xl"> I have a strong passion for problem-solving, particularly when it comes to Data Structures and Algorithm. In addition, I have a deep interest in SEO and UX Design, </p>
            </div>
        </div>

      
        
    )
}

export default Skillset;