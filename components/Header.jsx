import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowCircleDown, FaBell, FaEnvelope } from 'react-icons/fa';
function Header() {
  return (
    <div className='flex items-center  justify-between shadow-lg h-10 py-8 pl-2 pr-2 space-x-5 mb-[10px]'>
       <h2 className='font-extrabold text-[20px] text-gray-500'>
        Society
       </h2>
      <div className='w-[]'>
      <input type='search' placeholder='Explore RPK Book...' className=' py-2 px-6 outline-none border-none inputShadow rounded-sm w-[600px]'/>
      </div>
      <div className='flex items-center justify-center space-x-5 h-10 py-6 px-8'>
        <div className='flex items-center justify-center space-x-5 '>
        <FaBell color='gray'/>
        <FaEnvelope color='gray'/>
        <img src='/assets/roshan.jpeg' alt='profile' className='w-[50px] h-[50px] rounded-full'/>
        </div>
        <div>
            <p>Ro SH An</p>
             
        </div>
        <  FaArrowCircleDown color='gray'/>
      </div>
    </div>
  )
}

export default Header