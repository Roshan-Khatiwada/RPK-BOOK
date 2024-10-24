import React from 'react'

function TrendingItem({src,text}) {
  return (
    <div className='flex items-center space-x-5 w-[100%] mb-5'>
        <img src={src} alt="img"  width="30px" className='w-[30px] h-[30px] rounded-full'/>
        <div>
            {/* {text.map((item)=>(
                    <p className={`text-sm ${item && "text-red-500" }`}>{item}</p>
            ))} */}
           <p className='font-bold text-[14px] text-gray-600'> {text[0]}</p>
           <p className='text-gray-500 text-[12px]'> {text[1]}</p>
        </div>
    </div>
  )
}

export default TrendingItem