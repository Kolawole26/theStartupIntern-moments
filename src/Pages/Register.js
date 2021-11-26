import React from 'react'
import { useEffect } from 'react';

function Register({firstLinks, fullname, setFullname, email, setEmail, password, setPassword, RegisterSubmit}) {

    useEffect(() => {
        firstLinks()

     });

    return (
        <>
      

           <div className="container max-w-screen-sm mx-auto">
               <div className="a my-28 px-9 ">
                <h1 className=" md:text-4xl font-bold text-2xl mb-12">Create an account</h1>

                    <form className="space-y-7" onSubmit={RegisterSubmit}>
                        <div className="">
                        <label htmlFor="name" className="block mb-2 text-base">Fullname</label>
                        <input type="text" name="name" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                        </div>
                        <div className="">
                        <label htmlFor="email" className="block mb-2 text-base">Email</label>
                        <input type="email" name="email" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="">
                        <label htmlFor="password" className="block mb-2 text-base">Password</label>
                        <input type="password" name="password" className="border-2 border-borderColor mb-4 py-2.5 rounded-lg pl-4 w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="bg-btn p-3 mx-auto rounded-lg text-white w-full hover:bg-blue-500 transition ease-in-out duration-300">Create</button>
                        
                    </form>
               </div>
           </div>  
        </>
    )
}

export default Register
