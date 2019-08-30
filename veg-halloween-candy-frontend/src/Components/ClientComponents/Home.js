

import React from 'react';
import {Fragment, useEffect, useState} from 'react';
import styles from '../../styles/clientStyles.css.js';
import ghostGif from '../../assets/ghost.gif';


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

  const handleScreenSize = (desktopStyles, mobileStyles) => {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    return width > 1000 ? desktopStyles : mobileStyles
  }

  const renderPosts = (posts) => {
    const sortedPosts = posts.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0));
    return sortedPosts.map(post => {
      return(
        <ul style={styles.postContainerItem} id={post.rank}>
          <h1 style={{...styles.postTitle, "font-family":'Playfair-Bold'}}>#{post.rank}.  {post.title}</h1>
            <div style={styles.postContentContainer}>
              <img src={post.image_url_2} style={styles.postImages}></img>
                <div style={handleScreenSize(styles.postContentRow2, styles.postContentRow2Mobile)}>
                  <p style={{...styles.contentBody, "font-family":"Playfair"}}>{post.content_body}</p>
                </div>
                <button style={styles.buyNowBtn} href={post.referral_link}><font style={{"font-family":'Creepster', "font-size":"3rem"}}>BUY NOW</font></button>
            </div>
        </ul>)
    })
  }

  return(
    <Fragment>
      <div id="page-container" style={styles.pageContainer}>
      <article style={styles.headerContainer}>
        <header style={styles.headerTextAlign}>
        <h3 style={{"font-size":"1.5rem", "font-family":"HallowenInline"}}>THE AUTHORITATIVE GUIDE TO</h3>
          <h1 style={{"font-family":'Halloween', ...styles.headerTitle}}>Vegan Halloween Candy</h1>
          <h4 style={{"font-size":"1.8rem", "font-family":'HallowenInline', "color":"grey"}}>--------  2019 EDITION  --------</h4>
          <h3 style={{"font-size":"1.9rem", "font-family":"Playfair", "font-weight":"bolder", "margin-bottom":"10px"}}>Hey ghouls!</h3>
          <p style={{...styles.headerBody, "font-family":"Playfair"}}>Let’s celebrate the greatest holiday of the year without supporting the ghastly business of factory farming, then you’ve come to the right place! After years of testing in the field, here is my personal ranking of the most essential vegan Halloween candy.</p>
        </header>
      </article>
      <img style={{"width": "320px", "margin-top":"5%"}}src={ghostGif}></img>
      <div style={styles.postContainer}>
        {posts && renderPosts(posts)}
      </div>
      <footer>
        <h5 style={{"font-family":"Halloween", "color":"orange", "font-size":"2.5rem"}}><font style={styles.footerFontStyle}>{halloweenCountDown()}</font> NIGHTS UNTIL HALLOWEEN</h5>
      </footer>
      </div>
    </Fragment>
  )
}
