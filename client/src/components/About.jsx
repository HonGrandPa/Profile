import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const About = () => {
    return (
        <section id='aboutsection' className='flex flex-col justify-center items-center mt-5 gap-5 min-h-[85vh]'>
            <hr className="mx-auto w-7/12 border-slate-800/40" />
            <div className='flex flex-col items-center my-5 gap-0.5'>
                <p className='text-[8px] font-[300] uppercase'>Learn More</p>
                <h1 className='text-3xl font-poppins font-medium'>About ME</h1>
            </div>
            <div className='text-center md:p-12 p-3 w-8/12 relative'>
                <FaQuoteRight className='absolute bottom-0 right-0' />
                <p className='md:text-xl sm:text-lg text-[15px] font-poppins'>

                    As a Computer Science major, my academic focus centers on leveraging technology 
                    to extract valuable insights for strategic decision-making in business and industry. 
                    With a robust foundation in computational skills and a nuanced understanding of business principles, 
                    my enthusiasm extends to contributing innovative solutions, particularly in web design and UX/UI. I am driven to 
                    enhance decision-making processes and drive business success by combining my technical expertise with a keen eye 
                    for user-centric design, ensuring that the solutions I contribute are not only technically 
                    sound but also prioritize an optimal user experience.
                </p>
                <FaQuoteLeft className='absolute top-0 left-0' />

            </div>
        </section>
    )
}

export default About


