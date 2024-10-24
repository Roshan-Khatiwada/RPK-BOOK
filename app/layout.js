import SideBar from '@/components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RPK BOOK',
  description: 'Created By RPK',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex justify-center h-screen w-screen scroll-container overflow-y-scroll scrollbar-thin scrollbar-thumb-200-500 scrollbar-track-gray-200 ${inter.className}`}>
        <div className='h-[100%] border-[2px] border-r-[#FFE7A0] w-[250px]'>

         <SideBar/>
 
        </div>
        <div className='flex-1 h-[100%]'>

        {children}

        </div>
        
        </body>
    </html>
  )
}
