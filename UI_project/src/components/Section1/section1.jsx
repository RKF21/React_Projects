import React from 'react'
import Navbar from './navbar';
import Body from './body';
const section1 = (props) => {
  return (
    <div className='bg-white w-full h-100% text-black-500'>
      <Navbar />
      <Body cards={props.cards} />
    </div>
  )
}

export default section1