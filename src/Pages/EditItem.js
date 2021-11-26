import React from 'react'
import { useEffect } from 'react';
import EditPage from '../Components/EditPage';



function EditItem( {secondLinks, posts, editFutureDate, editTitle, editDetails, setEditFutureDate, setEditTitle, setEditDetails, handleEdit} ) {

    useEffect(() => {
        secondLinks()

     }); 

    return (
        <>
          
        <EditPage posts={posts} editFutureDate={editFutureDate} editTitle={editTitle} editDetails={editDetails} 
        setEditFutureDate={setEditFutureDate} setEditTitle={setEditTitle} setEditDetails={setEditDetails} handleEdit={handleEdit} />


         
        </>
    )
}

export default EditItem
