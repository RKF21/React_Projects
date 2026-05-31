import React from 'react'
import Right_card_images from './right_card_images';

const right_content = (props) => {
  return (
    <div id='right' className='flex overflow-x-auto rounded-4xl w-7/10 h-100% mr-8'>
      {props.cards.map((card) => (
        <Right_card_images card={card} />
      ))}
    </div>
  )
}

export default right_content