import React from 'react'
import './fifth.scss'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Fifth = () => {
    const data = [
        {
          id:"1",
          img: "./team_1.jpg",
          title: "Head Chef",
        },
        {
          id:"2",
          img: "./team_2.jpg",
          title: "Assistant Chef",
        },
        {
          id:"3",
          img: "./team_3.jpg",
          title: "Assistant Chef",
        },
      ];
  return (
    <>
       <div className="Team_wrapper">
        <div className="tem_text">
          <h1>
            Meet The <span>Team </span>
          </h1>
          <p>Our talented team members who delivers only the best results</p>
        </div>
        <div className="Team_members">
          {data.map(({ img, title,id}) => (
            <span key={id}>
              <img src={img} alt="" />
              <span className="Absol">
                <h1>{title}</h1>
              </span>
            </span>
          ))}
        </div>
        <div className="switch_buttons">
          <div className="slider_button">
            <span>
              <FaArrowLeft />
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fifth
