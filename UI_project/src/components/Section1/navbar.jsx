import React from 'react'

const navbar = () => {
  return (
    <div className = 'flex justify-between items-center p-8 ml-4'>
      <h4 className ='uppercase font-semibold bg-black border border-white rounded-full text-white px-4 py-2 text-sm'>Target Audience</h4>
      <button className ='bg-gray-400 cursor-pointer text-black font-normal py-2 px-4 rounded-full text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default navbar