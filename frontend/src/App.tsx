import { useState } from 'react'
import * as XLSX from "xlsx";
import axios from 'axios';
import { ThankYouMsg } from './components/ThankYouMsg';
import toast from 'react-hot-toast'
import {url} from './assets/url';

import { FaArrowUpFromBracket } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { Spinner } from './components/Spinner';

function App() {
  const [fileData,setFileData]=useState<any>(null);
  const [file,setFile]=useState<File | null>(null);
  const [success,setSuccess]=useState<boolean>(false);
  const [loading,setLoading]=useState<boolean>(false);

  console.log(file)
  console.log(fileData)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    if (!files) return;
    // console.log(files)
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target?.result;
      console.log(arrayBuffer)
      if (!arrayBuffer) return;

      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet,{
        raw: false,
      });
      setFileData(jsonData);
      console.log("Excel JSON data:", jsonData);
    };

    reader.readAsArrayBuffer(files); 
    setFile(files);
  };

  const handleOnclick=async()=>{
    console.log(fileData)
    try {
      // const response= await axios.post(`${url}/api/v1/upload`,
      const response= await axios.post(`http://localhost:3000/api/v1/upload`,
        fileData
      )
      console.log(response.data)
      if(response.status===200){
        toast.success("File uploaded successfully")
        setSuccess(true);
      } else{
        toast.error("Error while uploading file")
      }
    } catch (error) {
      console.log(error)
      toast.error("Error while uploading file")
      return;
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className=''>
      <div className='h-full  border-2 border-gray-400 m-10 rounded shadow-xl'>
        <div className='bg-yellow-400 h-10 items-center flex'>
            <div className='ml-2 justify-between w-full flex items-center p-2'>
              <>
                Add from Excel
              </>
              <div className='mr-2'>
                <MdCancel size={30}/>
              </div>
            </div>
        </div>
        <div className='h-96 p-10 flex flex-col'>

            <div className='mb-18 mt-4'>
              Add Candidates to Database
            </div>
            <div className=''>
              { !success ? 
                  <>
                    <input type="file" id="file" accept='file/*' disabled={loading} className='hidden' onChange={handleFileChange}/>
                    <label 
                      htmlFor='file'
                      className='h-44 w-full border-2 border-gray-400 p-7 flex justify-center rounded shadow-md bg-gray-100 mt-5 cursor-pointer'>
                        <div className='flex flex-col items-center justify-between m-2'>
                          <FaArrowUpFromBracket size={30} className='bg-black text-white rounded-full p-1'/>
                          { !file ?
                            <span className='ml-3 mt-1'>Upload a .xlsx file or xls file here</span>
                            :
                            <div className='flex flex-col gap-y-1 items-center'>
                              <span className='ml-3 mt-1'>{file.name}</span>
                              <button onClick={()=>{handleOnclick()}} type="submit" disabled={loading} className='bg-green-500 cursor-pointer w-32 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                      { !loading ?
                                          "Submit"
                                          :
                                          <Spinner/>
                                      }
                              </button>
                            </div>
                          }
                        </div>
                    </label>
                </> 
                  :
                <ThankYouMsg/>

            }
            </div>
        </div>
        <div className='h-54'>

        </div>
      </div>
    </div>
  )
}

export default App
