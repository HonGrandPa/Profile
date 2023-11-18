import React from 'react'
import img from "../assets/imgs/head.jpg"
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
    return (
        <section id='herosection' className='flex md:flex-row-reverse justify-center flex-col items-center md:gap-16 gap-3  min-h-screen md:min-h-[75vh]'>
            <img src={img} className='w-[260px] h-[280px] object-cover rounded-xl'/>
            <div className='flex flex-col gap-2.5 md:mt-7 mt-0 md:items-start items-center'>

                <div className='text-center flex gap-0.5 flex-col md:items-start pt-5 pl-5'>
                    <p className='text-slate-600 text-lg pl-1'>Hello, I'm</p>
                    <h1 className='text-5xl font-semibold'>Hon Lin</h1>
                    <p className='md:text-3xl text-2xl font-medium'>Research Analyst</p>
                    <p className='md:text-2xl text-xl font-[400]'> passionate about revealing insights</p>
                    <p className='md:text-2xl text-xl font-[400]'> and decoding the stories numbers tell</p>
                </div>

                <div className='flex gap-5 md:pl-4 '>
                    <div className='border-[0.8px] duration-200 flex items-center border-black/80 p-2 rounded-full font-poppins hover:bg-[#AEC3AE]/30 active:shadow-md gap-1'>
                    <button>Download CV</button>
                    <FaDownload className='text-[16px] mb-[0.8px]'/>
                    </div>
                    <div className='border-[0.8px] duration-200 flex items-center border-black/80 p-2 rounded-full font-poppins hover:bg-[#AEC3AE]/30 active:shadow-md gap-0.5'>
                    <button>My Linkedin</button>
                    <AiOutlineLinkedin className='text-[18px] mt-[0.5px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
