import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function Single( {post, handleDelete} ) {

    const { id } = useParams();
    const datas = post.data.find(data => (data._id).toString() === id);
    const date = datas.futureDate
    return (
        
        <>
            {datas && 
                <>
                    <div className="md:container  md:mx-auto" >
                <div className=" my-24 px-9 max-w-7xl mx-auto">
                    <header className=" mb-11">
                        <h1 className="md:text-4xl font-bold text-2xl mb-4">{datas.title}</h1>
                        <p className="text-btn text-sm">{dateFormat(date, "paddedShortDate")}</p> 
                    </header>
                    <section>
                        <div className="space-y-7 mb-20 md:text-justify">
                            <p className="md:text-base text-sm">
                                {datas.details}
                            </p>
                            
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-x-0 md:space-y-0 space-y-3 ">
                            <Link to={`/updateItem/${datas._id}`}><button className="bg-cyan p-3 mx-auto md:w-44 w-full rounded-lg text-white  hover:bg-green-600 transition ease-in-out duration-300">Edit</button></Link>
                            <button className="bg-danger p-3 mx-auto rounded-lg text-white md:w-44 w-full hover:bg-red-700 transition ease-in-out duration-300" onClick={() => handleDelete(datas._id)}>Delete</button>
                        </div>
                    </section>
                </div>
           </div>
                </>
            }
        </>
    )
}

export default Single
