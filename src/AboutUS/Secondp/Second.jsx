import React from 'react'
import './Second.scss'
import { FaCirclePlay } from "react-icons/fa6";
const Second = () => {
  return (
    <>
    <div className="sec">
      <div className="vtext">
        <h2>Process behind the making</h2>
        <p>See how we make momos that you like from only the best ingredients</p>
        <div className="btn">
            <button><span><FaCirclePlay/></span>Watch the Video</button>
        </div>
      </div>
        <img src="About_2.jpg" alt="" height={550}/>
      </div>
    </>
  )
}

export default Second
