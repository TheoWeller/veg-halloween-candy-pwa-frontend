

import React from 'react';
import {Fragment, useEffect, useState} from 'react';


export default function CreatePostCard(props){
  const [posts, setPosts] = useState({})

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts")
    const data = await response.json()
    setPosts(data)
  }, [])

  return(
    <Fragment>
    </Fragment>
  )
}
