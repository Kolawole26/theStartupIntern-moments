import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function MyBuckets( {secondLinks} ) {

    useEffect(() => {
        secondLinks()

     });

    return (
        <>
           

           <div className="md:container  md:mx-auto">
                <div className=" my-24 px-9 max-w-7xl mx-auto">
                    <header className="text-center md:text-left mb-16">
                        <div className="flex md:flex-row justify-between flex-col  md:space-y-0 space-y-3 mb-4 md:mb-0">
                        <div >
                        <h1 className="md:text-4xl font-bold text-2xl mb-3">Welcome John Doe,</h1>
                        </div>
                        <Link to='/addItem'><button className="bg-btn p-3 mx-auto md:w-44 w-36 rounded-lg text-white  hover:bg-blue-500 transition ease-in-out duration-300">Add Item</button></Link>
                        </div>
                        <p className="md:text-xl text-base mb-4">Here are items in your eventful moment bucket.</p>
                    </header>
                    <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
                            <div className="shadow-md p-6 rounded hover:bg-yellowBg">
                                <h5 className=" text-base font-bold mb-4">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                    <p className="md:text-base text-sm mb-8">
                                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                        with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                    </p>
                                        
                                        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-2 md:space-y-0 mb-3">
                                        <Link to='singleItem' className="text-btn text-sm">View Details</Link>
                                        <div className="flex flex-col md:flex-row md:space-x-11 space-y-2 md:space-y-0">
                                                <p className="text-ash text-sm">20/05/2021</p>
                                                <p className="text-sm">20/05/2025</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="shadow-md p-6 rounded hover:bg-yellowBg">
                                <h5 className=" text-base font-bold mb-4">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                    <p className="md:text-base text-sm mb-8">
                                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                        with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                    </p>
                                        
                                        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-2 md:space-y-0 mb-3">
                                        <Link to='singleItem' className="text-btn text-sm">View Details</Link>
                                        <div className="flex flex-col md:flex-row md:space-x-11 space-y-2 md:space-y-0">
                                                <p className="text-ash text-sm">20/05/2021</p>
                                                <p className="text-sm">20/05/2025</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="shadow-md p-6 rounded hover:bg-yellowBg">
                                <h5 className=" text-base font-bold mb-4">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                    <p className="md:text-base text-sm mb-8">
                                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                        with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                    </p>
                                        
                                        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-2 md:space-y-0 mb-3">
                                        <Link to='singleItem' className="text-btn text-sm">View Details</Link>
                                        <div className="flex flex-col md:flex-row md:space-x-11 space-y-2 md:space-y-0">
                                                <p className="text-ash text-sm">20/05/2021</p>
                                                <p className="text-sm">20/05/2025</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="shadow-md p-6 rounded hover:bg-yellowBg">
                                <h5 className=" text-base font-bold mb-4">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h5>
                                    <p className="md:text-base text-sm mb-8">
                                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency
                                        with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum 
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                                        a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                                    </p>
                                        
                                        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-2 md:space-y-0 mb-3">
                                        <Link to='singleItem' className="text-btn text-sm">View Details</Link>
                                        <div className="flex flex-col md:flex-row md:space-x-11 space-y-2 md:space-y-0">
                                                <p className="text-ash text-sm">20/05/2021</p>
                                                <p className="text-sm">20/05/2025</p>
                                            </div>
                                        </div>
                            </div>
                        </div>
                </div> 
            </div>
        </>
    )
}

export default MyBuckets
