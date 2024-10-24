
import Header from '@/components/Header'
import PostContent from '@/components/PostContent'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative'>
     <Header/>
     <div className='flex'>
     <PostContent/>
     </div>
     
    </div>
  )
}
