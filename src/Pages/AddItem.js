import React from 'react';
import { useEffect } from 'react';

function AddItem( {secondLinks, futureDate, title, details, setFutureDate, setTitle, setDetails, handleSubmit, errorSubmit} ) {

    useEffect(() => {
        secondLinks()

     }); 

    return (
        <>
       

           <div className="container max-w-screen-sm md:mx-12">
               <div className="a my-28 px-9">
               

                    <form className="space-y-7" onSubmit={handleSubmit}>
                        <div className="">
                        <label htmlFor="date" className="block mb-2 text-base">Date in the future</label>
                        <input type="date" name="date" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={futureDate} onChange={(e) => setFutureDate(e.target.value)} />
                        </div>
                        <div className="">
                        <label htmlFor="title" className="block mb-2 text-base">Title</label>
                        <input type="text" name="title" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="">
                        <label htmlFor="details" className="block mb-2 text-base">Details</label>
                        <textarea name="details" cols="30" rows="12" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                        </div>
                        
                        <button className="bg-btn p-3 mx-auto rounded-lg text-white w-full hover:bg-blue-500 transition ease-in-out duration-300 mb-4">Save</button>
                        {errorSubmit && <span className=" text-xs text-red-600">{errorSubmit}</span>}
                    </form>
               </div>
           </div>  
        </>
    )
}

export default AddItem
