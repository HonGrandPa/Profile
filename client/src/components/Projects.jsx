import React from 'react'
import img from '../assets/imgs/hi.png'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import airbnb from '../assets/imgs/airbnbclone.png'
import weather from '../assets/imgs/wea.png'
import weatherb from '../assets/imgs/weatherapp.png'
import whisper from '../assets/imgs/whisperapp.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


const Projects = () => {
  return (
    <section id='projectsection' className='flex flex-col justify-center items-center mb-12 gap-3'>
      <hr className="mx-auto w-7/12 border-slate-800/40" />
      <div className='flex flex-col items-center my-5 gap-0.5'>
        <p className='text-[8px] font-[300] uppercase'>Browse My Recent</p>
        <h1 className='text-3xl '>Projects</h1>
      </div>
      <div className='lg:flex  hidden gap-3'>
        <Link to='https://hongrandpaweatherapp31-1a95412baa2e.herokuapp.com/'>
          <div className='bg-[#E4E4D0]/40 border-[1.5px] border-black/20  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
            <img src={weather} className='h-[220px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' alt='project-img' />
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Weather App</span></h1>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-[14px]' />
              <p className='text-[13px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>A simple weather app</span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-3'>where users can input any available city to quickly access its current weather conditions.</p>
          </div>
        </Link>
        
        <Link to='https://homehaborhonpapa.onrender.com'>
          <div className='bg-[#E4E4D0]/40 border-[1.5px] border-black/20  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
            <img src={airbnb} className='h-[220px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' alt='project-img' />
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Home Habor</span></h1>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-[14px]' />
              <p className='text-[13px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-3'>platform, offering customers an innovative and effortless online shopping experience.
              </p>
          </div>
        </Link>

        <Link to='https://honpapanowhisper-1d0dfdb9fa9a.herokuapp.com/'>
          <div className='bg-[#E4E4D0]/40 border-[1.5px]  border-black/20  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
            <img src={whisper} className='h-[220px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' alt='project-img' />
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Whisper App</span></h1>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-[14px]' />
              <p className='text-[13px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a platform </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'> for discreet and anonymous communication and confidential dialogue in a secure digital space.</p>
          </div>
        </Link>

      </div>
  
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full lg:hidden"
      >
        
        



       <SwiperSlide>
        <Link to='https://hongrandpaweatherapp31-1a95412baa2e.herokuapp.com/'>
          <div className='bg-[#E4E4D0]/40 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={weatherb} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Weather App</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>A simple weather app </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>A weather app where users can input any available city to quickly access its current weather conditions.</p>
          </div>
        </Link>
       </SwiperSlide>
       <SwiperSlide>
        <Link to='https://homehaborhonpapa.onrender.com'>
          <div className='bg-[#E4E4D0]/40 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={airbnb} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Home Habor</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform, with the goal of delivering a seamless and innovative online shopping experience for customers worldwide..</p>
          </div>
        </Link>
       </SwiperSlide>

       <SwiperSlide>
        <Link to='https://honpapanowhisper-1d0dfdb9fa9a.herokuapp.com/'>
          <div className='bg-[#E4E4D0]/40 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={whisper} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Whisper App</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a platform </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>seeks to establish a platform for discreet and anonymous communication, fostering open yet confidential dialogue in a secure digital space.</p>
          </div>
        </Link>
       </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Projects
