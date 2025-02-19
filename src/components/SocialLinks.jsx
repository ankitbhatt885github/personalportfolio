import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 

const SocialLinks = () => {
    return (
        <div  className="hidden lg:flex flex-col top-[35%] left-0 fixed">

            
            <ul>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                    <a href="https://www.linkedin.com/in/ankit-bhatt-56a90b204/" className="flex justify-between items-center w-full text-white">
                        
                            LinkedIn <FaLinkedin size={30} />
                        
                    </a>
                </li>

                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                    <a href="https://github.com/ankitbhatt885github" className="flex justify-between items-center w-full text-white">
                        
                            Github <FaGithub size={30} />
                        
                    </a>
                </li>

                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                    <a href="https://x.com/ankitbhatt_dev" className="flex justify-between items-center w-full text-white">
                        
                            X/Twitter <FaTwitter size={30} />
                        
                    </a>
                </li>
            </ul>



        </div>
    )
}

export default SocialLinks;