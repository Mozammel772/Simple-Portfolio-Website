import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../SharedPages/Footer/Footer'
import Navbar from '../../../SharedPages/Navbar/Navbar'
import Contact from '../Contact/Contact'
import Skills from "../Skills/Skills"
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='my-image.png' width='450' className='motion-safe:hover:-translate-x-0.5 motion-safe:transition' />
                    <div>
                        <h1 className="text-5xl font-bold">Hey, I'm Mozammel</h1>
                        <p className="py-6 pr-10">I'm a Developer. I am experienced with ReactJS, JavaSCript, HTML, CSS and Basic Knowledge of (NodeJS, ExpressJS, MongoDB)</p>
                        {/* <CustomLink to="/contactMe" className="btn btn-primary">Contact Me!</CustomLink> */}
                        {/* <CustomLink to="/contactMe" className="btn btn-primary">Contact Me!</CustomLink> */}
                        <Link to={"/contact"} className='btn btn-secondary'>Contact</Link>
                    </div>
                </div>
            </div>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home
