import React from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

function Register({ onClick, active }) {
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
                                    Login
                                </Link>
                           </li>
                           <li className="list-none md:mr-5 ">
                                <Link to='/register' className=" flex w-full text-base cursor-pointer pt-2.5 px-9 md:px-2.5 text-white mb-7">
                                    Register
                                </Link>
                           </li>
                       </ul>
                   </nav>
               </div>
           </header>

           <div className="container max-w-screen-sm mx-auto">
               <div className="a my-28 px-9 ">
                <h1 className=" md:text-4xl font-bold text-2xl mb-12">Create an account</h1>

                    <form className="space-y-7">
                        <div className="">
                        <label htmlFor="name" className="block mb-2 text-base">Fullname</label>
                        <input type="text" name="name" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" />
                        </div>
                        <div className="">
                        <label htmlFor="email" className="block mb-2 text-base">Email</label>
                        <input type="email" name="email" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" />
                        </div>
                        <div className="">
                        <label htmlFor="password" className="block mb-2 text-base">Password</label>
                        <input type="password" name="password" className="border-2 border-borderColor mb-4 py-2.5 rounded-lg pl-4 w-full"/>
                        </div>
                        <button className="bg-btn p-3 mx-auto rounded-lg text-white w-full hover:bg-blue-500 transition ease-in-out duration-300">Create</button>
                        
                    </form>
               </div>
           </div>  
        </>
    )
}

export default Register
