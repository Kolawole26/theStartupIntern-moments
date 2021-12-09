import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dateFormat from "dateformat";


function View( {post, key, editFutureDate, editTitle, editDetails, setEditFutureDate, setEditTitle, setEditDetails, handleEdit, errorSubmit, dateWarn, Datehandler} ) {

    
    const { id } = useParams();
    const datas = post.data.find(data => (data._id).toString() === id);
    const date = datas.futureDate;
    const myDate = dateFormat(date, "isoDate")

    useEffect(() => {
        if (datas) {
            setEditTitle(datas.title);
            setEditDetails(datas.details);
            setEditFutureDate(myDate);
        }
    }, [post, datas, myDate, setEditTitle, setEditDetails, setEditFutureDate])

    return (
        <>
           {editTitle && 
            <>
                 <div className="container max-w-screen-sm md:px-12" >
               <div className=" my-28 px-9 " key={key} >
               

               <form className="space-y-7" onSubmit={(e) => e.preventDefault()} >
                        <div className="" >
                        <label htmlFor="date" className="block mb-2 text-base">Date in the future</label>
                        {dateWarn ? (<span className=" text-sm  text-yellow-400">Make sure the date is a future date</span>) : (<span></span>)}
                        <input type="date" name="date" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={editFutureDate} onChange={(e) => setEditFutureDate(e.target.value)} onFocus={Datehandler}  />
                        </div>
                        <div className="">
                        <label htmlFor="title" className="block mb-2 text-base">Title</label>
                        <input type="text" name="title" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                        </div>
                        <div className="">
                        <label htmlFor="details" className="block mb-2 text-base">Details</label>
                        <textarea name="details" cols="30" rows="12" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={editDetails} onChange={(e) => setEditDetails(e.target.value)}></textarea>
                        </div>
                        
                        <button className="bg-btn p-3 mx-auto rounded-lg text-white w-full hover:bg-blue-500 transition ease-in-out duration-300 mb-4" onClick={() => handleEdit(datas._id)}>Update</button>
                        {errorSubmit && <span className=" text-xs text-red-600">{errorSubmit}</span>}
                    </form>
               </div>
           </div>   
            </>

           }
        </>
    )
}

export default View
