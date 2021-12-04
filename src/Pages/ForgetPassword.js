import React from 'react'

function ForgetPassword( { ForgetPasswordSubmit, errorForget, email, setEmail, errorEmail} ) {
    return (
        <>
            <div className="container max-w-screen-sm mx-auto">
               <div className="a my-28 px-9 ">
                    <form className="space-y-7" onSubmit={ForgetPasswordSubmit}>
                        <div className="">
                        <label htmlFor="email" className="block mb-2 text-base">Email</label>
                        <input type="email" name="email" className="border-2 border-borderColor py-2.5 rounded-lg pl-4 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errorEmail && <span className=" text-xs text-red-600">{errorEmail}</span>}
                        </div>
                        
                        <button className="bg-btn p-3 mx-auto rounded-lg text-white w-full hover:bg-blue-500 transition ease-in-out duration-300">Submit</button>
                        {errorForget && <span className=" text-xs text-red-600">{errorForget}</span>}

                        
                    </form>
                </div>
            </div>    
        </>
    )
}

export default ForgetPassword
