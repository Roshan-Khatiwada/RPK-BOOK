'use client'

import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
function NavItem({icon,title,active}) {
  return (
   
   <Link href={`/nav/${title}`} title={title}>
    <div className={`flex items-center p-1 my-2 space-x-3 ${active && " bg-[#e2ca69]"}`}>
         <div  className='w-5 h-5 text-gray-400'>
         {icon}
         </div>
         <p className='text-sm text-gray-500'>{title}</p>
    </div>
   </Link>
 
  )
}

export default NavItem