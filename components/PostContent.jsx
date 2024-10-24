'use client'
import React, { useState } from 'react'
import PostBox from './PostBox'
import Comments from './Comments'
import PostCategory from './PostCategory'
function PostContent() {
  const [active, setActive] = useState(false)
  const toogle =()=>{

    setActive(!active)
    
  }
  return (
    <div className='flex-col ml-2 h-screen w-[100%]'>
   
      <div className='flex relative'>
      <div className=' h-screen ml-2 scroll-container overflow-y-scroll scrollbar-thin scrollbar-thumb-200-500 scrollbar-track-gray-200 flex-1'>
      <div className=''><PostCategory/></div>
     <PostBox  
       profile="/assets/suman.jpg"
       text={["Suman Shrestha","26 min ago"]} 
       title="Happy Birthday to My Love!"
        p={["Happy Birthday to the most beautiful girl in the world! 🎉🎂 Your smile lights up my life, and I’m grateful for every moment we share. Here’s to many more adventures together! Love you to the moon and back! 🌙💕 #BirthdayGirl"
        ,
        " Once again Happy birthday!"
        ]}
        media="/assets/sumu.jpg"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="/assets/sabin.jpg"
       text={["Sabin Luitel","1 day ago"]} 
       title="Happy birthday Hancy!"
        p={["Happy Birthday to a fantastic colleague! 🎉🎈 It’s a pleasure working with you every day. May your year ahead be filled with success and happiness. Let’s celebrate your special day! 🎂🥳 #WorkFamily"
        ,
        " Party Chaiyo hai!!"
        ]}
        media="/assets/himal.jpg"
        likes="17,378"
        dislikes="290"
        comments="442"
        func={toogle}
        />
       <PostBox  
       profile="/assets/himal.jpg"
       text={["Himal Niroula","1 day ago"]} 
       title="Happy Birthday to My Beloved Grandma!"
        p={["Happy Birthday to my amazing grandma! 🎉🌼 Your wisdom and love mean the world to me. Thank you for all the stories, hugs, and life lessons. I hope your day is as special as you are! Love you! 💖"
        ,
        " 🎂 #GrandmaLove"
        ]}
        media="/assets/himalgrandpa.jpg"
        likes="26,478"
        dislikes="983"
        comments="483"
        func={toogle}
        />
       <PostBox  
       profile="/assets/pranju.jpg"
       text={["Pranju Dhungel","1 day ago"]} 
       title="Happy Birthday, Dad!"
        p={["Happy Birthday to my superhero! 🦸‍♂️🎈 Thank you for all the love, guidance, and support you give me every day. I hope your day is filled with laughter and joy, just like you bring into our lives! Cheers to you! 🥳🍻"
        ,
        "#loveuhpapa"
        ]}
        media="/assets/padam.jpg"
        likes="80,578"
        dislikes="658"
        comments="111"
        func={toogle}
        />
       <PostBox  
       profile="/assets/gaurav.jpg"
       text={["Gaurav Basnet","1 day ago"]} 
       title="Happy Birthday, Sis!"
        p={["Happy Birthday to my amazing sister! 🎊🎂 You are not just my sister but also my best friend. Thank you for all the fun, laughter, and support. Here’s to making more beautiful memories together! Love you tons! 💕✨"
        ,
        " #SisterGoals"
        ]}
        media="/assets/anjana.jpg"
        likes="57,578"
        dislikes="684"
        comments="287"
        func={toogle}
        />
       <PostBox  
       profile="/assets/suman.jpg"
       text={["Suman Shrestha","1 day ago"]} 
       title="Happy Birthday, Bro!"
        p={["Happy Birthday to my awesome brother! 🎊🎉 Thanks for being my built-in best friend and for all the epic moments we share. Here’s to more adventures and memories together! Have an amazing day! 🎂🍕"
        ,
        "#BrotherlyLove"
        ]}
        media="/assets/roshan.jpeg"
        likes="22,567"
        dislikes="456"
        comments="123"
        func={toogle}
        />
       <PostBox  
       profile="/assets/padam.jpg"
       text={["Kakamega County Government","1 day ago"]} 
       title="Happy Birthday to My Precious Girl!"
        p={["Happy Birthday, my sweet daughter! 🎉🎂 Watching you grow into the incredible person you are has been the greatest joy of my life. You are my sunshine, and I’m so proud of everything you do. Keep shining bright, my love! 🌟💖"
        ,
        "#ProudParent #BirthdayPrincess"
        ]}
        media="/assets/pranju.jpg"
        likes="5,578"
        dislikes="269"
        comments="142"
        func={toogle}
        />
     </div>

     <div className={`h-screen ml-2 overflow-y-scroll  transition-all ease-in-out duration-[1s] w-[34%] ${active ? "translate-x-[100%]" : "translate-x-[0]"}`} >
     <Comments/>
    </div>
  
      </div>
    </div>
  )
}

export default PostContent