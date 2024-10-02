import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../SharedPages/Footer/Footer'
import Navbar from '../../../SharedPages/Navbar/Navbar'
import CompleteProjects from '../CompleteProjects/CompleteProjects'
import Contact from '../Contact/Contact'
import Skills from "../Skills/Skills"
const Home = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='/src/Pages/HomePage/image/my-photo.jpg' width='450' className='motion-safe:hover:-translate-x-0.5 motion-safe:transition' />
                    <div>
                        <h1 className="text-5xl font-bold">Hey, I'm <span className='text-secondary '>Mozammel</span></h1>
                        <p className="py-6 pr-10 text-xl font-semibold">I'm a Developer. I am experienced with WordPress, ReactJS, JavaSCript, HTML, CSS and Basic Knowledge of (NodeJS, ExpressJS, MongoDB)</p>
                        <Link to={"/contact"} className='btn btn-secondary'>Contact</Link>
                    </div>
                </div>
            </div>
            <Skills></Skills>
            <CompleteProjects></CompleteProjects>
            {/* <Reviews></Reviews> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home
