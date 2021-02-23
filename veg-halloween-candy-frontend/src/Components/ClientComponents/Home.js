

import React from 'react';
import {Fragment, useEffect, useState} from 'react';
import styles from './styles/clientStyles.css.js';
import ghostGif from '../../assets/ghost2.gif';


export default function CreatePostCard(props){
  const [posts, setPosts] = useState([]);

  const halloweenCountDown = () => {
    const now = new Date().getTime();
    const currentYear = new Date().getFullYear();
    const halloween = new Date(`10/31/${currentYear} 12:1 AM`).getTime();
    const distance = halloween - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return days;
  };

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

    return width > 760 ? desktopStyles : mobileStyles
  }

  const renderPosts = (posts) => {
    const sortedPosts = posts.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0));
    return sortedPosts.map(post => {
      return(
        <ul id="review-list" style={handleScreenSize(styles.postContainerItem, styles.postContainerItemMobile)} id={post.rank}>
          <li style={handleScreenSize({"width":"100%"},{"width":"320px"})}>
              <div style={styles.postContentContainer}>
                <img alt={post.title} src={handleScreenSize(post.image_url_1, post.image_url_2)} style={handleScreenSize(styles.postImagesDesktop, styles.postImagesMobile)}></img>
                  <div style={handleScreenSize(styles.postContentRow2, styles.postContentRow2Mobile)}>
                  <h1 style={{...handleScreenSize(styles.postTitle, styles.postTitleMobile), "font-family":'Halloween'}}><font style={{"font-family":"Halloween", "color": "red"}}>{post.rank}.</font>  {post.title}</h1>
                    <p style={{...styles.contentBody, "font-family":"Playfair"}}>{post.content_body}</p>
                    <button style={styles.buyNowBtn} href={post.referral_link}><font style={{"font-family":'Creepster', "font-size":"3rem"}}>BUY NOW</font></button>
                  </div>
              </div>
          </li>
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
          <p style={{...styles.headerBody, "font-family":"Playfair", "font-weight":"bolder"}}>Let’s celebrate the greatest holiday of the year without supporting the ghastly business of factory farming. After years of testing in the field, here is my personal ranking of the most essential vegan Halloween candy.</p>
        </header>
      </article>
      {<img alt="spooky-animated-ghost" style={{"width": "320px", "margin-top":"5%"}}src={ghostGif}></img>}
      <div id="post-container" style={styles.postContainer}>
        {posts && renderPosts(posts)}
      </div>
      <footer style={{"width":"100%", "padding":"0% 0% 5% 0%"}}>
        <h5 style={handleScreenSize(styles.footerContent, styles.footerContentMobile)}><font style={styles.footerFontStyle}>{halloweenCountDown()}</font> NIGHTS UNTIL HALLOWEEN</h5>
      </footer>
      </div>
    </Fragment>
  )
}
