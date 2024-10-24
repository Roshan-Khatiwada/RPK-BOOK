
import MainPage from '@/components/Main'
import React from 'react'

function page(props) {
  console.log(props.params.id)
  const id=props.params.id
  return (
    <div>
    <MainPage id={id}/>
    </div>
  )
}

export default page