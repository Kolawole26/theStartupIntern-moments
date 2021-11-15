import React from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navigation( { onClick, active, links }) {
    return (
        <>
          <header className="relative bg-primary py-3">
               <div className=" mx-auto max-w-7xl flex items-center justify-between py-2.5 md:px-12 px-9">
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
                           {links ? 
                            <>
                                 <li className="list-none md:mr-5">
                                <Link to='/login' className=" flex w-full text-base cursor-pointer pt-2.5 px-9 md:px-2.5 text-white">
                                    Login
                                </Link>
                           </li>
                           <li className="list-none md:mr-5 ">
                                <Link to='/register' className=" flex w-full text-base cursor-pointer pt-2.5 px-9 md:px-2.5 text-white mb-7">
                                    Register
                                </Link>
                           </li>
                            </> 
                            :
                            <>
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
                            </>  
                        }
                       </ul>
                   </nav>
               </div>
           </header> 
  
        </>
    )
}

export default Navigation
