import React from 'react'
import View from './View'

function EditPage( {posts, editFutureDate, editTitle, editDetails, setEditFutureDate, setEditTitle, setEditDetails, handleEdit} ) {
    return (
        <>
           {posts.map((post, index) => {
              return <View post={post} key={index} editFutureDate={editFutureDate} editTitle={editTitle} editDetails={editDetails} 
              setEditFutureDate={setEditFutureDate} setEditTitle={setEditTitle} setEditDetails={setEditDetails} handleEdit={handleEdit} />
            })}  
        </>
    )
}

export default EditPage
