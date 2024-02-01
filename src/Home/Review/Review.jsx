import React from 'react'
import './Review.scss'
const Review = () => {
  return (
    <>
      <div className="rev">
        <div className="text">
            <h1>200+ <span>Happy Customers</span></h1>
            <h3>What our customers say about us</h3>
            <p>"Only the best momo you can find in the market.
             Different Varities of momo to choose from. Will
             be visiting again soon"</p>
             <h1>Livia Dias</h1>
        <div className="icon">
                <span>←</span>            
                <span>→</span>            
        </div>
        </div>
        <div className="image">
            <img src="Girl.jpeg" alt="" />
        </div>
      </div>
    </>
  )
}
export default Review
