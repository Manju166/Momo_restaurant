import React,{useState, useEffect} from "react";
import "./Footer.scss";
import {Link} from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    const items = [
        { link: "About Us" },
        { link: "Our Menu" },
        { link: " Our Services" },
        { link: "Contact Us" },
    ];
    const links = [
        {legals: "Terms & Conditions"},
        {legals: "Privacy Policy"},
        {legals: "Support"},
    ];

  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear);
  }, []); 
  return (
    <>
      <section className="footer_section">
        <div className="footer_wrapper">
          <div className="footer_items">
            <div className="footer_desc">
              <div className="logo">
                <img src="logo.png" alt="" />
                <span>momos</span>
              </div>
              <span className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                dolores optio tempore voluptatibus aliquid dolorum ipsam. Neque,
                nobis, aspernatur ratione corporis exercitationem possimus vero,
              </span>
            </div>
            <div className="footer_links">
              <div className="footer_link_header">
                <div className="link_link">
                  <h1>momos</h1>
                  <span>
                    {items.map(({items,link},index)=>(
                        <div key={index}>
                            <Link to={items}>{link}</Link>
                        </div>
                    ))}
                  </span>
                </div>
                <div className="link_link">
                  <h1>Legals</h1>
                  <span>
                    {links.map(({links,legals},id)=>(
                        <div key={id}>
                            <Link to={links}>{legals}</Link>
                        </div>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <div className="footer_social_links">
              <h1>Follow Us</h1>
              <div className="social_link">
                <FaFacebook />
                <FaLinkedin />
                <FaSquareXTwitter />
              </div>
              <div className="social_link">
                <FaYoutube />
                <RiInstagramFill />
                <FaTiktok />
              </div>
            </div>
          </div>
          <span>
            <p>Copyright ©️{currentYear} Everest Momo Pvt Ltd. All Rights Reserved</p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;