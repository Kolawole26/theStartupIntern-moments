import React from 'react'
import { useEffect } from 'react';
import EditPage from '../Components/EditPage';



function EditItem( {secondLinks, posts, editFutureDate, editTitle, editDetails, setEditFutureDate, setEditTitle, setEditDetails, handleEdit, errorSubmit } ) {

    useEffect(() => {
        secondLinks()

     }); 

    return (
        <>
          
        <EditPage posts={posts} editFutureDate={editFutureDate} editTitle={editTitle} editDetails={editDetails} 
        setEditFutureDate={setEditFutureDate} setEditTitle={setEditTitle} setEditDetails={setEditDetails} handleEdit={handleEdit} errorSubmit={errorSubmit} />


         
        </>
    )
}

export default EditItem
