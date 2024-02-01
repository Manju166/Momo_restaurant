import React from 'react'
import Nav from './Home/Navbar/Nav'
import { BrowserRouter as Rou, Routes, Route } from "react-router-dom";
import Dashboard from './Home/Dashboard';
import Footer from './Home/footer/Footer';
import About from './AboutUS/About';
function App() {
  return (
    <>
     <div>
     <Rou>
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path='About' element={<About/>}/>
      </Routes>
      <Footer/>
    </Rou>
     </div>
    </>
  )
}

export default App
