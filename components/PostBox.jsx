import React from 'react'
import { FaComment, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

function PostBox({profile,title, media,likes,dislikes, comments,text,p,func}) {
  return (
    <div className='border border-[#e2ca69] w-[100%] rounded-lg  shadow-lg shadow-[#e2ca69] mb-3 p-5'>
           <div className='flex items-center space-x-5 w-[100%] mb-5'>
    <img src={profile} alt="img"  width="50px" className='w-[50px] h-[50px] rounded-full'/>
    <div>
       <p className='font-bold text-[14px] text-gray-600'> {text[0]}</p>
       <p className='text-gray-500 text-[12px]'> {text[1]}</p>
    </div>
</div>
<h2 className='font-bold text-lg uppercase'>{title}</h2>
<div>
    <p className='text-gray-700 text-sm mb-3'>{p[0]}</p>
    <p className='text-gray-700 text-sm'>{p[1]}</p>
</div>
<div className='w-100% h-[200px] border border-gray-500 mt-3'>
    <img src={media} alt='media ' className='h-[200px] w-[100%] object-cover'/>
</div>
<div className='flex items-center justify-between mt-3'>
    <div className='flex items-center justify-between space-x-3 '>
       <p className='text-gray-500 flex space-x-3 items-center cursor-pointer'><span><FaThumbsUp/></span> {likes} Likes</p>
       <p  className='text-gray-500 flex space-x-3 items-center cursor-pointer'><span className=''><FaThumbsDown color='black'/></span> {dislikes} Dislikes</p>
    </div>
  <button onClick={func}>
  <p  className='text-gray-500 flex space-x-3 items-center cursor-pointer'> <span><FaComment/></span> {comments} Comments</p>
  </button>
</div>
    </div>
  )
}

export default PostBox