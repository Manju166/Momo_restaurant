import React from 'react'
import './Forth.scss'
import { ImQuotesLeft } from "react-icons/im";
const Forth = () => {
  return (
    <>
      <div className="forth">
        <div className="text">
            <div className="textt">
                <span><ImQuotesLeft /></span>
            <p>Momo is not just about sustenance, it's about bringing people together
             and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our
             guests can enjoy delicious momo, great company, and unforgettable experiences</p>
             <h1>Marcus Schleifer</h1>
             <h2>CEO</h2>
             <div className="icon">
                <span>←</span>            
                <span>→</span>            
        </div>
             </div>
        </div>
        <div className="text_img">
            <img src="Seo.jpg"/>
        </div>
      </div>
    </>
  )
}

export default Forth
