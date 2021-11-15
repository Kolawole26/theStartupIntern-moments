import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function SingleItem( {secondLinks} ) {

    useEffect(() => {
        secondLinks()

     }); 

    return (
        <>
   

           <div className="md:container  md:mx-auto">
                <div className=" my-24 px-9 max-w-7xl mx-auto">
                    <header className=" mb-11">
                        <h1 className="md:text-4xl font-bold text-2xl mb-4">Lorem ipsum began as scrambled, nonsensical Latin derived 
                            from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h1>
                        <p className="text-btn text-sm">20/05/2025</p> 
                    </header>
                    <section>
                        <div className="space-y-7 mb-20 md:text-justify">
                            <p className="md:text-base text-sm">
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with 
                            which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                            a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                            <p className="md:text-base text-sm">
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with 
                            which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                            a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                            <p className="md:text-base text-sm">
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with 
                            which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered 
                            a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                            </p>
                            
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-x-0 md:space-y-0 space-y-3 ">
                            <Link to='/updateItem'><button className="bg-cyan p-3 mx-auto md:w-44 w-full rounded-lg text-white  hover:bg-green-600 transition ease-in-out duration-300">Edit</button></Link>
                            <button className="bg-danger p-3 mx-auto rounded-lg text-white md:w-44 w-full hover:bg-red-700 transition ease-in-out duration-300">Delete</button>
                        </div>
                    </section>
                </div>
           </div> 
 
        </>
    )
}

export default SingleItem
