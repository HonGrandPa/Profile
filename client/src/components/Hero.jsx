import React from 'react'
import img from "../assets/imgs/head.jpg"
import cv from '../assets/files/Hlin_Resume.pdf'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id='herosection' className='flex md:flex-row-reverse justify-center flex-col items-center md:gap-16 gap-3  min-h-screen md:min-h-[75vh]'>
            <div className='w-[260px] -z-10 bg-[#5F6F52]/30 relative h-[300px] md:mt-10 object-cover rounded-xl ml-3 md:ml:0'>
            <img src={img} className='brightness-95  w-[260px] h-[300px] absolute md:-left-4  md:-top-4 rounded-xl'/>
            </div>
            <div className='flex flex-col gap-2.5 md:mt-7 mt-0 md:items-start items-center'>

                <div className='text-center flex gap-2 flex-col md:items-start pt-5 md:pl-5'>
                    <p className='text-slate-600 text-lg pl-1'>Hello, I'm</p>
                    <h1 className='text-5xl font-semibold'>Hon Lin</h1>
                    <p className='md:text-3xl text-2xl  font-medium'>Web Designer</p>
                    <p className='md:text-2xl text-xl font-[400]'> Enthusiast turning digital dreams into</p>
                    <p className='md:text-2xl text-xl font-[400]'> Visually captivating realities</p>
                </div>

                <div className='flex pt-2 gap-5 md:pl-4 '>
                    <a href={cv} download={cv} className='border-[0.8px] duration-200 flex items-center border-black/80 p-2 rounded-full font-poppins hover:bg-[#AEC3AE]/30 active:shadow-md gap-1'>
                    <button>Download CV</button>
                    <FaDownload className='text-[16px] mb-[0.8px]'/>
                    </a>
                    <Link to={'https://www.linkedin.com/in/hlinlin31/'} className='border-[0.8px] duration-200 flex items-center border-black/80 p-2 rounded-full font-poppins hover:bg-[#AEC3AE]/30 active:shadow-md gap-0.5'>
                    <button>My Linkedin</button>
                    <AiOutlineLinkedin className='text-[18px] mt-[0.5px]' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Hero
