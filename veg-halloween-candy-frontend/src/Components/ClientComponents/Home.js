

import React from 'react';
import {Fragment, useEffect, useState} from 'react';
import styles from '../../styles/clientStyles.css.js'


export default function CreatePostCard(props){
  const [posts, setPosts] = useState([]);

  const halloweenCountDown = () => {
    const now = new Date().getTime();
    const halloween = new Date('10/31/2019 12:1 AM').getTime()
    const distance = halloween - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return days;
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/v1/posts");
      const data = await response.json();
      setPosts(data);
    })();
  }, [])

  const renderPosts = (posts) => {
    const sortedPosts = posts.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0));
    return sortedPosts.map(post => {
      console.log(post);
      return(
        <ul style={styles.postContainerItem} id={post.rank}>
          <h1>{post.title}</h1>
            <div style={styles.postContentContainer}>
              <img src={post.image_url_2} style={styles.postImages}></img>
              <p>{post.content_body}</p>
              <button style={styles.buyNowBtn} href={post.referral_link}>BUY NOW</button>
            </div>
        </ul>)
    })
  }
console.log("STYLEs", styles.postContainer);
  return(
    <Fragment>
      <div id="page-container" style={styles.pageContainer}>
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
      <div style={styles.postContainer}>
        {posts && renderPosts(posts)}
      </div>
      </div>
    </Fragment>
  )
}
