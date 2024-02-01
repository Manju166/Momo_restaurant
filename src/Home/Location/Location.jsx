import React from 'react'
import './Location.scss'
import { FaLocationDot } from "react-icons/fa6";
const Location = () => {
  return (
    <>
      <div className="loc">
      <div className="lotion">
      <div className="tet">
        <h4>New Baneshwor, kathmandu, Bagmati, Nepal</h4>
        <p>Get Direction › </p>
      </div>
        <span><FaLocationDot/></span>
        </div>
      <div className="imag">
      <img src="map.png" alt="" />
      </div>
      </div>
    </>
  )
}

export default Location

