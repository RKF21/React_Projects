import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const images = async (pagenum) => {
    const ressponse = await axios.get(`https://picsum.photos/v2/list?page=${pagenum}&limit=50`)
    console.log(ressponse.data);
    setData(ressponse.data);
  }

  const previous = () =>{
      if(page>1){
        setPage(page-1)
      }
  }
  const next = () =>{
        setPage(page+1)
  }

  {/* onClick Get Images button:

Images only load when user manually clicks the button
Prev/Next don't trigger it so you need to call images() manually in each function

useEffect:

Automatically watches page state
Whenever page changes (from Prev/Next/anything) it fires images() automatically
Images also load on first render without any button click
One place handles everything

Why useEffect is better:
Less code, no repetition, automatic. You change state in one place, everything else reacts to it. That's the React way — react to state changes rather than manually calling functions everywhere. */}
  useEffect(() =>{
    images(page)
  },[page])

  return (
    <div className="bg-black h-screen flex flex-col items-center">
      <div className="flex flex-wrap gap-2 h-[80vh] overflow-auto p-4 mt-6">
        {data.map((image) => (
          <div key={image.id}>
            <img className="h-30 w-60 object-cover rounded-sm" src={image.download_url} alt={image.author} />
            <h2 className="font-bold text-sm text-white">{image.author}</h2>
          </div>
        ))}
      </div>
      <div className='h-[10vh] w-[30vw] mt-4 flex items-center justify-between px-10'>
        <button onClick={previous} className="bg-blue-500 font-bold text-2xl w-30 h-10 rounded-lg cursor-pointer hover:scale-95 " disabled={page === 1}>Prev</button>
        <span>
        <button onClick ={next} className="bg-blue-500 font-bold text-2xl w-30 h-10 rounded-lg cursor-pointer hover:scale-95">Next</button>
        </span>
      </div>
    </div>
  )


}

export default App