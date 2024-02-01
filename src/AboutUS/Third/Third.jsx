import React from 'react'
import './Third.scss'
import About_data from './Abtmomo'
const Third = () => {
  return (
    <>
        {About_data.map(({img,title,span,desc,momo,id})=>(
            <section>
                <div key={Math.random()} className="third">
                <div className="box" id={id}>
                    <div className="abtext">
                        <h1>{title} <span>{span}</span></h1>
                        <p>{desc}</p>
                    </div>
                    <div className="abimg">
                        <img src={img} className='rightimg' alt={img} />
                        <span>
                            <img src={momo} alt={momo} />
                        </span>
                    </div>
                </div>
                </div>
            </section>
        ))}
    </>
  )
}
export default Third
