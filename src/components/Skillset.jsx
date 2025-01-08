import React from "react";
import { motion } from 'framer-motion';

const Skillset = () => {
    return (




        <div name="skillset" className="w-full h-screen   text-white   md:pt-0">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <div className="text-center">
                        <span className='  text-white px-2 py-2 text-3xl font-medium border-b border-blue-500'>SKILLSET</span>
                    </div>
                </div>

                <motion.p className="text-xl mt-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}> I possess a diverse set of skillsets that collectively contribute to my proficiency in various domains that includes HTML,CSS, Javascript, Tailwind,Bootstrap, Java, React.js, Next.js, TypeScript, Express.js, Node.js, MongoDB. My proficiency extends to front-end technologies like React.js, enabling me to create intuitive and user-friendly interfaces. </motion.p>
                <br />

                <motion.p className="text-xl mt-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}> I have a strong passion for problem-solving, particularly when it comes to Data Structures and Algorithm. In addition, I have a deep interest in SEO and UX Design. </motion.p>
            </div>
        </div>



    )
}

export default Skillset;