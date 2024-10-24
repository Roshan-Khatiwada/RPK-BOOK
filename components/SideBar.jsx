'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faHouse, faStar,faBolt,faExclamationTriangle, faGrip} from '@fortawesome/free-solid-svg-icons';
import p1 from '../public/assets/p1.jpeg'
import TrendingItem from './TrendingItem';
import NewProject from './NewProject';
import { FaBolt, FaExclamationTriangle, FaHome, FaStar, FaTable } from 'react-icons/fa';

function SideBar() {
   const pathname = usePathname();
    const [active,setActive] = useState(false)

     useEffect(()=>{
      if(!pathname){
        return
      }
      setActive(pathname.includes("/"||title))
    },[pathname])
  
console.log(pathname)
  return (
    <div className='flex flex-col items-start justify-center overflow-scroll'>
        <h1 className='mb-6 mt-2 bg-gray-500 font-bold text-white mx-5 px-7'>RPK BOOK</h1>
        <Link href="/" className={`w-[100%] px-5`}>
      <div className={`flex items-center p-1 my-2 space-x-3  w-[100%] ${active && " bg-[#e2ca69]"}`}>
        <FaHome className='w-5 h-5 text-gray-400'/>
         <p className='text-sm text-gray-500'>House</p>
    </div>
    </Link>
    
        <div className='mb-[30px] w-[100%] px-5'>
            <NavItem icon={<FaTable/>} title="categories"/>
            <NavItem icon={<FaStar/>} title="NewPost"/>
            <NavItem icon={<FaBolt/>} title="TrendingPosts"/>
            <NavItem icon={<FaExclamationTriangle/>} title="Reports"/>

           
        </div>
        <div className='h-[1px] bg-[#e2ca69] w-[100%] mb-3'></div>
        <div className='w-[100%] px-5'>
          <h2 className='font-extrabold text-gray-800 mb-5'>Trending Today <span className='text-sm text-white bg-slate-600 px-2 rounded-full'>23</span></h2>
          <TrendingItem src="/assets/p1.jpeg" text={["Ghar Banauney Sanstha","23,345 comments"]}
          />  
          <TrendingItem src="/assets/p2.jpeg" text={["Mahila Rahat Pahal","11,156 comments"]}
          />  
          <TrendingItem src="/assets/p3.jpeg" text={["Nepali Funs","3,687 comments"]}
          />  
        </div>
        {/* <div className='h-[1px] bg-[#e2ca69] w-[100%] mb-3'></div> */}
        <div className='w-[100%] px-5'>
        <h2 className='font-extrabold text-gray-800 mb-5'>New Projects <span className='text-sm text-white bg-slate-600 px-2 rounded-full'>23</span></h2>
          <NewProject src="/assets/p3.jpeg" text={["Mero Ghar Banaide","23,345 comments"]}
          />  
          <NewProject src="/assets/p1.jpeg" text={["Women Relief Initiative","11,156 comments"]}
          />  
          <NewProject src="/assets/p2.jpeg" text={["Husler Funds","3,687 comments"]}
          />  
        </div>
    </div>
  )
}

export default SideBar