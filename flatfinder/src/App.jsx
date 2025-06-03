import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Amenities from './Components/Amenities'
import './App.css';
import Register from './Components/Register'
import Highlight from './Components/Highlight'
import Errorpage from './Components/Errorpage'
import Images from'./Components/Images'
import Footer from './Components/Footer'

// import Images from'/components/Images'


const App = () => {
  return (
    <div>
      
     <BrowserRouter>
     <Navbar></Navbar>
   
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/About' element={<About></About>}></Route>
     <Route path='/Services' element={<Services></Services>}></Route>
     <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/Amenities' element={<Amenities></Amenities>}></Route>
      {/* <Route path='/Register' element={<Register></Register>}></Route> */}
      <Route path='/Highlight' element={<Highlight></Highlight>}></Route>
      <Route path='*' element={<Errorpage></Errorpage>}></Route>
      <Route path='/Images' element={<Images></Images>}></Route>

      
      
      
      
    {/* <Route path='/Images' element={<Images></Images>}></Route>  */}
     </Routes> 
    <Footer></Footer>
    </BrowserRouter>
    </div>
  )
}

export default App
