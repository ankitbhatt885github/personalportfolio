import React from "react";

const Contact = () => {
    return (

        <div name='contact' className="w-full h-screen mt-20  p-2 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <div className="text-center">
                        <span className='  text-white px-2 py-2 text-3xl font-medium border-b border-blue-500'>CONTACT</span>
                    </div>
                    <div className="text-center mb-10">

                        <h2 className='text-3xl lg:text-3xl mt-10 '>Submit the form below to reach out to me!</h2>

                    </div>

                </div>

                <div className=" flex justify-center items-center">
                    <form action="https://getform.io/f/eaadf469-edec-40c4-a36b-bbb30ac622b5" method="POST" className="flex flex-col gap-4 w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

                        <input type="text" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

                        <textarea name="message" placeholder="Enter Your Message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "></textarea>

                        <button className="text-white    px-6 py-3  mt-8 mx-auto flex items-center rounded-md hover:scale-110 bg-gradient-to-b from-blue-400 to-blue-900 duration-300">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact;