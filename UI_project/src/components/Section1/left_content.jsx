import React from 'react'

const left_content = () => {
    return (
        <div className='flex flex-col justify-spacebetween w-3/10'>
            <div className='m-12 flex flex-col gap-4 mb-30'>
                <h1 className='text-5xl font-bold leading-15'>
                    Prospective <br />Customer <br />Segmentation
                </h1>
                <p className='font-light text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti atque quas vitae, quod architecto assumenda mollitia laudantium voluptates nostrum.</p>
            </div>
            <div>
                <img src= 'https://cdn-icons-png.flaticon.com/128/6941/6941884.png' alt="Customer Segmentation" className='w-20 h-20 ml-8 cursor-pointer'></img>
            </div>
        </div>
    )
}

export default left_content