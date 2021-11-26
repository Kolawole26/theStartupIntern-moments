import React from 'react'
import { useEffect } from 'react';
import SinglePage from '../Components/SinglePage';


function SingleItem( {secondLinks, posts, handleDelete} ) {

    useEffect(() => {
        secondLinks()

     }); 

    
    return (
        <>
           
           <SinglePage posts={posts} handleDelete={handleDelete} />

            
           
 
        </>
    )
}

export default SingleItem
