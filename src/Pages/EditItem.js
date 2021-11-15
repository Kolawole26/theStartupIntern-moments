import React from 'react'
import { useEffect } from 'react';


function EditItem( {secondLinks} ) {

    useEffect(() => {
        secondLinks()

     }); 

    return (
        <>
          

           <div className="container max-w-screen-sm md:px-12">
               <div className=" my-28 px-9 ">
               

                    <form className="space-y-7">
                        <div className="">
                        <label htmlFor="date" className="block mb-2 text-base">Date in the future</label>
                        <input type="text" name="date" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" />
                        </div>
                        <div className="">
                        <label htmlFor="title" className="block mb-2 text-base">Title</label>
                        <input type="text" name="title" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" />
                        </div>
                        <div className="">
                        <label htmlFor="details" className="block mb-2 text-base">Details</label>
                        <textarea name="details" cols="30" rows="12" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full"></textarea>
                        </div>
                        
                        <button className="bg-btn p-3 mx-auto rounded-lg text-white w-full hover:bg-blue-500 transition ease-in-out duration-300 mb-4">Update</button>
                        
                    </form>
               </div>
           </div>  
        </>
    )
}

export default EditItem
