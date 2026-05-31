import React from 'react'
import Left_content from './left_content';
import Right_content from './right_content';
const body = (props) => {
  return (
    <div className='flex w-full h-full gap-16 mt-6'>
        <Left_content />
        <Right_content cards={props.cards} />
    </div>
  )
}

export default body