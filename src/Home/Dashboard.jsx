import React from 'react'
import First from './FirstPage/First'
import Second from './FirstPage/Second'
import Menu from './Menutemp/Menu'
import Video from './Video/Video'
import Review from './Review/Review'
import Touch from './Intouch/Touch'
import Location from './Location/Location'
const Dashboard = () => {
  return (
    <>
      <section>
        <First/>
      </section>
      <Second/>
      <section>
        <Menu/>
      </section>
      <section>
        <Video/>
      </section>
      <section><Review/></section>
      <section><Touch/></section>
      <section><Location/></section>
    </>
  )
}

export default Dashboard
