import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Feed from '../Components/Feed';
import api from '../api/Url'


function MyBuckets( {secondLinks, posts, setPosts} ) {

    useEffect(() => {
        secondLinks()

     });

     useEffect(() => {
        const getProfile = async () => {
          let info = localStorage.getItem("user-info");
          info = JSON.parse(info);
          const config = {
            headers: {
                Authorization: info.token
            }
        }
          try {
            const response = await api.get('/moment', config);
            setPosts(response.data.data)
            console.log(response.data.data)
          } catch (err) {
            if (err.response) {
              // Not in the 200 response range 
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error: ${err.message}`);
            }
          }
          
        }
    
        
        getProfile();
      }, [setPosts])

    return (
        <>
           

           <div className="md:container  md:mx-auto ">
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
                
                        {posts.length ? (
                            <Feed posts={posts} />
                            ) : (
                            <p style={{ marginTop: "2rem" }} className="h-72" >
                                No posts to display.
                            </p>
                        )}
                    
                   
                </div> 
            </div>
        </>
    )
}

export default MyBuckets
