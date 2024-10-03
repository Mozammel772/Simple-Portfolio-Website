import React from 'react'
import CompleteProjects from './Pages/HomePage/CompleteProjects/CompleteProjects'
import Contact from './Pages/HomePage/Contact/Contact'
import Home from './Pages/HomePage/Home/Home'
import SKills from './Pages/HomePage/Skills/Skills'
import Footer from './SharedPages/Footer/Footer'
import Navbar from './SharedPages/Navbar/Navbar'


const App = () => {

  return (
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <SKills></SKills>
    <CompleteProjects></CompleteProjects>
    <Contact></Contact>
    <Footer></Footer>
    </div>

  )
}

export default App