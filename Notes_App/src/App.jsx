import React from 'react'
import { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState('');
  const [detailnotes, setDetailNotes] = useState('');
  const [storeNotes, setStoreAllNotes] = useState([]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  }

  const handleDetailNotesChange = (e) => {
    setDetailNotes(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes('');
    setDetailNotes('');
    const newNote = [...storeNotes];
    newNote.push({ notes, detailnotes });
    setStoreAllNotes(newNote);
  }


  return (
    <div className=' bg-black h-screen w-screen flex overflow-x-hidden'>
      <div className='flex flex-col gap-5 w-1/2'>
        <form onSubmit={handleSubmit} className='flex gap-5 p-5 py-0 m-1 lg:m-10 flex-col'>
          <h1 className='text-4xl font-bold text-white'>Notepad</h1>
          <input type="text" placeholder='Enter your Notes heading' value={notes}
            className='bg-white text-black border-amber-300 w-full h-10 text-sm lg:text-2xl p-2  lg:p-4 ' onChange={handleNotesChange} />
          <textarea name="" id="" placeholder='Enter your Notes here' value={detailnotes} className='bg-white text-black text-sm lg:text-2xl border-amber-300 w-full h-40 p-4 lg:p-4' onChange={handleDetailNotesChange}></textarea>
          <button type='submit' className='bg-amber-500 text-white py-2 px-4 hover:bg-amber-600'>Add Notes</button>
        </form>
      </div>

      <div className='w-1/2  h-screen rounded-lg border-l-4 border-white flex flex-col'>
        <h1 className='text-4xl text-white font-bold ml-8 mb-2 mt-10'>My Notes</h1>
        <div className='p-8 flex items-center flex-row  flex-wrap gap-10 overflow-y-auto ml-14'>
          {storeNotes.map((note, index) => {

            return <div key={index} className='bg-blue-100 text-black p-4 rounded-lg w-70 h-80'>
              <h2 className='text-2xl font-bold mb-2 uppercase'>{note.notes}</h2>
              <p className='text-medium text-gray-600 font-semibold mb-46'>{note.detailnotes}</p>
              <div>
                <button type='button' className='bg-amber-500 text-white hover:bg-amber-600 font-bold text-lg w-full h-8' onClick={() => {
                  const updatedNotes = [...storeNotes];
                  updatedNotes.splice(index, 1);
                  setStoreAllNotes(updatedNotes);
                }}>Delete Note</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App