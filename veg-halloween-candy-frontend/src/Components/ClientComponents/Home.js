

import React from 'react';
import {Fragment, useEffect, useState} from 'react';
import styles from '../../styles/clientStyles.css'


export default function CreatePostCard(props){
  const [posts, setPosts] = useState([]);

  const halloweenCountDown = () => {
    const now = new Date().getTime();
    const halloween = new Date('10/31/2019 12:1 AM').getTime()
    const distance = halloween - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return days;
  }

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/v1/posts")
    const data = await response.json()
    setPosts(data)
  }, [])

  const renderPosts = (posts) => {
    const sortedPosts = posts.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0));
    return sortedPosts.map(post => {
      console.log(styles.postContainerItem);
      return(
        <ul class={styles.postContainerItem} id={post.rank}>
          <span>{post.title}</span>
          <img src={post.image_url_1}></img>
        </ul>)
    })
  }

  return(
    <Fragment>
      <div id="page-container">
      <article>
        <header>
          <h1>Vegan Halloween Candy</h1>
          <h3>HEY GHOULS!</h3>
          <p>Let’s celebrate the greatest holiday of the year without supporting the ghastly business of factory farming, then you’ve come to the right place! After years of testing in the field, here is my personal ranking of the most essential vegan Halloween candy.</p>
        </header>
      </article>
        <div>
          Halloween Countdown: {halloweenCountDown()}
        </div>
      <div id="post-container">
        {posts && renderPosts(posts)}
      </div>
      </div>
    </Fragment>
  )
}
