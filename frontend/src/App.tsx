import { useState } from 'react'
import { FaArrowUpFromBracket } from "react-icons/fa6";
import * as XLSX from "xlsx";
function App() {
  const [file,setFile]=useState<File|null>(null);

  // const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  //   const files=e.target.files?.[0];
  //   if(!files)  return;
  //   setFile(files);
  //   console.log(files);
    
  //   const fileReader=new FileReader();
  //   fileReader.onload=(event)=>{
  //     const fileContent=event.target?.result;
  //     console.log(fileContent);
  //   };
  // }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file)
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target?.result;
      console.log(arrayBuffer)
      if (!arrayBuffer) return;

      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log("Excel JSON data:", jsonData);
    };

    reader.readAsArrayBuffer(file); 
  };

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
              <input type="file" id="file" accept='file/*' className='hidden' onChange={handleFileChange}/>
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
