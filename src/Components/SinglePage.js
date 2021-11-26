import React from 'react'
import Single from './Single'

function SinglePage( {posts, handleDelete} ) {
    return (
        <div>
           {posts.map((post, index) => {
              return <Single post={post} key={index} handleDelete={handleDelete} />
            })} 
        </div>
    )
}

export default SinglePage
