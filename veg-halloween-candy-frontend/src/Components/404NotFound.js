import React from 'react';
import ghostGif from '../assets/ghost.gif';


export default function NotFound(){
  return (
    <div style={{
      "width": "100vw",
      "height": "100vh",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction":"column"
    }}>
    {<img alt="spooky-animated-ghost" style={{"width": "320px", "margin-top":"5%"}}src={ghostGif}></img>}
      <h1 alt="invalid url" style={{"color":"white", "font-size":"5rem"}}>404 NOT FOUND!</h1>
    </div>
  )
}
