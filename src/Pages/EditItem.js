import React, { useState } from 'react'
import { useEffect } from 'react';
import EditPage from '../Components/EditPage';



function EditItem( {secondLinks, posts, editFutureDate, editTitle, editDetails, setEditFutureDate, setEditTitle, setEditDetails, handleEdit, errorSubmit } ) {
    
    const [dateWarn, setDateWarn] = useState(false);

    useEffect(() => {
        secondLinks()

     }); 

     const Datehandler = () => {
        setDateWarn(!dateWarn)
    }

    return (
        <>
          
        <EditPage posts={posts} editFutureDate={editFutureDate} editTitle={editTitle} editDetails={editDetails} 
        setEditFutureDate={setEditFutureDate} setEditTitle={setEditTitle} setEditDetails={setEditDetails} handleEdit={handleEdit} errorSubmit={errorSubmit} Datehandler={Datehandler} dateWarn={dateWarn} />


         
        </>
    )
}

export default EditItem
