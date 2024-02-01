import React from 'react'
import './Touch.scss'
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import Numvalid from './Numvalid';
const Touch = () => {
  return (
    <>
    <div className="tou">
      <div className="head">
        <h2>Get <span>In Touch</span></h2>
        <h4>Our friendly team would love to hear from you</h4>
      </div>
      <div className="ff">
        <div className="con">
            <div className="adr">
            <h3><CiLocationOn id='icon'/> Our Address</h3>
            <i>New Baneshwor, kathmandu, Bagmati, Nepal</i>
            </div>
            <h2><LuPhone id='icon'/> Our Contacts</h2>
            <div className="divone">
            <div className="num">
                <h4>Mobile</h4>
                <i>9805689789</i><br/>
                <i>9841275897</i>
            </div>
            <div className="num">
                <h4>Landline</h4>
                <i>01-4783972</i>
            </div>
            </div>
            <h2><IoMdTime  id='icon'/> Our Service Time</h2>
            <div className="divtwo">
            <div className="t">
                <h4>MON-FRI</h4>
                <i>10 am - 8 pm</i>
            </div>
            <div className="t">
                <h4>SAT-SUN</h4>
                <i>Closed</i>
            </div>
            </div>
            <p>Get in touch in social networks</p>
            <div className="socicon">
            <RiFacebookCircleLine />
            <IoLogoInstagram />
            <IoLogoTiktok />
            </div>
        </div>
        <div className="form">
            <form action="">
            <div className="input-box">
            <div className="uinput">
            <h3>First Name</h3>
            <input type="text" placeholder="" />
            </div>
            <div className="uinput">
            <h3>Last Name</h3>
            <input type="text" placeholder="" />
            </div></div>
            <h3>Email</h3>
            <input type="email" placeholder=""/><br/>
            <h3 >What can we do for you</h3>
            <select id="option-select">
            <option value="">Choose</option>
            </select>
            <h3>Phone Number</h3>
            <span><Numvalid/></span>
            <h3>Message</h3>
            <textarea cols="71" rows="10" placeholder=""></textarea>
                <button type="submit">Send Message</button>
                </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Touch
