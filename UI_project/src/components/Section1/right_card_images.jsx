import React from 'react'
import Right_card_content from './right_card_content';
const right_card_images = (props) => {
    return (
        <div className='flex relative shrink-0 w-2/7 rounded-4xl m-4 mb-4 overflow-hidden'>
            <img src={props.card.img} alt="" className='w-full object-cover' />
            <Right_card_content card={props.card} />
        </div>
    )
}

export default right_card_images