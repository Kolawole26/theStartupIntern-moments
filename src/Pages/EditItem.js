import React from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function EditItem( { onClick, active } ) {
    return (
        <>
          <header className="relative bg-primary py-3">
               <div className="mx-auto max-w-7xl flex items-center justify-between py-2.5 px-9">
                   <div className="">
                       <h1><Link to='/' className="text-white font-bold md:text-xl italic">Eventful Momemts.</Link></h1>
                   </div>

                    <div onClick={onClick} className={`md:hidden`}>
                        <button>
                            <ReorderIcon className="text-white stroke-current stroke-1"/>
                        </button>
                    </div>
                   <nav className={`${!active && 'hidden'} absolute flex-col top-full w-full left-0 z-20 md:static md:w-auto  md:flex bg-primary`}>
                       <ul className="md:flex-row md:flex">
                           <li className="list-none md:mr-5">
                                <Link to='/login' className=" flex w-full text-base cursor-pointer pt-2.5 px-9 md:px-2.5 text-white">
                                    Logout
                                </Link>
                           </li>
                           <li className="list-none md:mr-5 ">
                                <Link to='/' className=" flex w-full text-base cursor-pointer pt-2.5 px-9 md:px-2.5 text-white mb-7">
                                    My Bucket
                                </Link>
                           </li>
                       </ul>
                   </nav>
               </div>
           </header>  

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
