import React from 'react'

function PostCategory() {
  return (
    <div className='flex items-center space-x-5 mb-[10px]  ml-2'>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1'>
            <h3>All</h3>
        </div>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1 bg-gray-500 text-white'>
            <h3>Birthday</h3>
        </div>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1'>
            <h3>Love</h3>
        </div>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1'>
            <h3>Heal</h3>
        </div>
    </div>
  )
}

export default PostCategory