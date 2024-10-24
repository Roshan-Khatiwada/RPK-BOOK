import React from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
function CommentItem({src,name,text,likes,dislikes,replies,time}) {
  return (
    <div>
        <div className='flex space-x-5 w-[100%] mb-5'>
    <img src={src} alt="img"  width="50px" className='w-[50px] h-[50px] rounded-full'/>
    <div>
       <p className='font-bold text-[14px] text-gray-600'> {name} <span className=' ml-3 text-sm font-semibold text-gray-400'> {time}</span></p>
       <p className='text-gray-500 text-[12px]  text-sm'> {text}</p>
       <div className='flex items-center justify-between mt-3'>
    <div className='flex items-center justify-between space-x-3 '>
       <p className='text-gray-500 flex space-x-3 items-center cursor-pointer text-sm'> {likes} Likes</p>
       <p  className='text-gray-500 flex space-x-3 items-center cursor-pointer  text-sm'>{dislikes} Dislikes</p>
       <p  className='text-gray-500 flex space-x-3 items-center cursor-pointer  text-sm'>{replies} Replies</p>
    </div>
 
  <p  className='text-red-500 flex space-x-3 items-center cursor-pointer  text-sm'> reply</p>

</div>
    </div>
</div>

    </div>
  )
}

export default CommentItem