import React from 'react'
import img from '../assets/imgs/hi.png'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        <Link to='#'>
          <div className='bg-[#E4E4D0]/40 border-[1.5px] border-black/20  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
            <img src={img} className='h-[220px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' alt='project-img' />
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-[14px]' />
              <p className='text-[13px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
          </div>
        </Link>
        
        <Link to='#'>
          <div className='bg-[#E4E4D0]/40 border-[1.5px] border-black/20  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
            <img src={img} className='h-[220px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' alt='project-img' />
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-[14px]' />
              <p className='text-[13px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
          </div>
        </Link>

        <Link to='#'>
          <div className='bg-[#E4E4D0]/40 border-[1.5px]  border-black/20  shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]'>
            <img src={img} className='h-[220px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' alt='project-img' />
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-[14px]' />
              <p className='text-[13px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
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
        <Link to='#'>
          <div className='bg-[#E4E4D0]/40 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={img} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
          </div>
        </Link>
       </SwiperSlide>
       <SwiperSlide>
        <Link to='#'>
          <div className='bg-[#E4E4D0]/40 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={img} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
          </div>
        </Link>
       </SwiperSlide>

       <SwiperSlide>
        <Link to='#'>
          <div className='bg-[#E4E4D0]/40 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={img} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
          </div>
        </Link>
       </SwiperSlide>

       <SwiperSlide>
        <Link to='#'>
          <div className='bg-[#E4E4D0]/20 border-[3px] rounded-2xl border-black/20 p-1 shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full '>
            <img src={img} className='rounded-t h-[220px] w-full object-cover rounded-lg hover:scale-105 transition-scale duration-300' alt='project-img' />
          <div className='max-w-[300px] sm:max-w-full'>
            <div className='flex pl-0.5 items-center gap-0.5 mt-1'>
              <MdDriveFileRenameOutline className='text-2xl' />
              <h1 className='text-[14px] font-medium truncate'>Project Tilte: <span className='text-[12px] font-normal'>Customer Segmentation for E-commerce Optimization</span></h1>
            </div>
            </div>
            <div className='flex items-center pl-0.5 gap-1'>
              <GrOverview className='text-sm' />
              <p className='text-[14px] font-medium'>Project Oveview: <span className='text-[12px] font-normal'>a leading e-commerce </span></p>
            </div>
            <p className='text-[12px] font-normal pl-1 line-clamp-2'>platform,  is embarking on a strategic initiative to enhance customer experience and optimize marketing efforts. The goal of this project
              is to leverage data analytics to segment customers based on their behavior, preferences,
              and purchasing patterns. By gaining a deeper understanding of customer segments, we aim to tailor marketing strategies, improve product recommendations, and ultimately increase customer satisfaction and loyalty.</p>
          </div>
        </Link>
       </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Projects
