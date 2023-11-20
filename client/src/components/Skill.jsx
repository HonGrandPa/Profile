import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";

const Skill = () => {
    return (
        <section id='skillsection' className='flex flex-col justify-center items-center mb-12 gap-3 min-h-[50vh]'>
            <hr className="mx-auto w-7/12 border-slate-800/40" />
            <div className='flex flex-col items-center my-5 gap-0.5'>
                <p className='text-[8px] font-[300] uppercase'>Explore More</p>
                <h1 className='text-3xl '>Skill</h1>
            </div>
            <div className='flex md:flex-row flex-wrap justify-center md:items-start gap-7 flex-col'>

                <div className='flex flex-col justify-center items-center p-3 gap-2 border-[1px] border-black/40 rounded-lg'>
                    <div className='flex items-center gap-0.5'>
                        <VscGraph className='text-lg mt-1' />
                        <h2 className='text-lg'>Technical Skills</h2>
                    </div>
                    <div className='gap-[18px] text-[11px] font-poppins flex flex-wrap justify-evenly sm:min-w-[310px] w-[210px]'>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Excel</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>MySQL</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>MongoDB</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>ReactJS</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Redux</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>FireBase</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>NodeJS</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>ExpressJS</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>HTML</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>CSS</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Java</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Python</li>
                        

                      
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-3 gap-2 border-black/40 rounded-lg border-[1px]'>
                    <div className='flex items-center gap-1'>
                        <FaPeopleGroup className='text-lg' />
                        <h2 className='text-lg'>Soft Skills</h2>
                    </div>
                    <div className='flex flex-wrap gap-[18px] text-[11px] font-poppins sm:min-w-[310px] w-[210px] justify-evenly items-center'>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Communication</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Project Management</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Problem-Solving</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Team Collaboration</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Time Management</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Adaptability</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Conflict Resolution</li>
                        <li className='hover:text-[11.5px] list-none select-none duration-200'>Creativity</li>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
