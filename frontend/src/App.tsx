import { useState } from 'react'
import { FaArrowUpFromBracket } from "react-icons/fa6";
function App() {

  return (
    <div className=''>
      <div className='h-full  border-2 border-gray-400 m-10 rounded shadow-xl'>
        <div className='bg-yellow-400 h-10 items-center flex'>
            <div className='ml-2 '>
              Add from excel
            </div>
        </div>
        <div className='h-full p-10 flex flex-col'>

            <div className='mb-18 mt-4'>
              Add Candidates to Database
            </div>
            <div>
              <input type="file" id="file" accept='file/*' className='hidden'/>
              <label 
                htmlFor='file'
                className='h-54 w-full border-2 border-gray-400 p-7 flex justify-center rounded shadow-md bg-gray-100 mt-5 cursor-pointer'>
                  <div className='flex flex-col items-center justify-between'>
                    <FaArrowUpFromBracket size={30} className='bg-black text-white rounded-full p-1'/>
                    <span className='ml-3 mt-1'>Upload a .xlsx file or xls file here</span>
                  </div>
              </label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
