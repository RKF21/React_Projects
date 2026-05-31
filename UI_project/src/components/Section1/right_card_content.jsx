import React from 'react'

const right_card_content = (props) => {
  return (
    <div className='absolute top-8 px-10 py-4 w-full h-[90%] flex flex-col justify-between'>
      <h2 className='text-lg font-bold border-2 border-white bg-amber-50 rounded-full w-6 h-6 flex items-center justify-center'>{props.card.id}</h2>
      <div>
        <p className='text-lg text-white font-500'>
          {props.card.text}
        </p>
        <div className='flex gap-6 items-center justify-space-between mt-8'>
          <button className={props.card.color + ' text-white py-2 px-4 rounded-full cursor-pointer'}>{props.card.btn}</button>
          <button className={props.card.color + ' p-2 rounded-full flex items-center justify-center cursor-pointer'}>
            <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" alt="" className='w-4 h-4 invert' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default right_card_content