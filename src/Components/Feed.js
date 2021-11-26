import React from 'react'
import Moment from './Moment'

function Feed( {posts} ) {
    
    return (
        <div>
           {posts.map((post, index) => {
              return <Moment post={post} key={index}/>
            })} 
        </div>
    )
}

export default Feed
