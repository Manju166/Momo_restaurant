import React from 'react'
import './nav.scss'
import {Link} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion';
const Nav = () => {
const navlink =[
    {
        name:"About Us",
        link:"About"
    },
    {
        name:"Our Menu",
        link:"Menu"
    },
    {
        name:"Our Services",
        link:"Services"
    },
    {
        name:"Allergy Advice",
        link:"Advice"
    },
]
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }} className='content'>
        <motion.div initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, duration: 1 }}className='logo'>
            <img src='logo.png'/>
             <Link to="" className='webn'>momos</Link>
        </motion.div>
        <div className='left_wrapper'>
          {navlink.map(({name,link},index)=>(
            <motion.span initial={{scale:0}} key={Math.random()} animate={{scale:1}} transition={{type:"spring", stiffness:100}}  whileHover={{scale:1.2}} whileTap={{scale:0.93}}>
            <Link key={index} className='links' to={link}>{name}</Link>
            </motion.span>
          ))}
        </div>

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3, stiffness: 100 }} className='right_wrapper'>
            <Link><FaFacebook/></Link>
            <Link><FaTiktok/></Link>
            <Link><FaInstagram/></Link>
        <div className='btnf'>
        <button>Contact Us</button>
        </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Nav
