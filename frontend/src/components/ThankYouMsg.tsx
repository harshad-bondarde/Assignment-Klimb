import { MdDone } from "react-icons/md";
export const ThankYouMsg=()=>{
    return(
        <div className='h-44 w-full border-2 border-gray-400 p-7 flex justify-center rounded shadow-md bg-gray-100 mt-5 cursor-pointer'>
            <div className="flex flex-col items-center">
                <span className="text-green-600 font-extrabold">Thank You !</span>
                <div className="flex items-center gap-x-2 my-2 ">
                    <MdDone size={25} className="text-green-600 font-extrabold"/>
                    <span className="font-semibold">File Successfully Uploaded</span>
                </div>
                <span className="font-semibold">Your records will be processed shortly</span>
            </div>
        </div>
    )
}