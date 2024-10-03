import React from 'react'
const Home = () => {
    return (   
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='/src/Pages/HomePage/image/my-photo.jpg' width='450' className='motion-safe:hover:-translate-x-0.5 motion-safe:transition' />
                    <div>
                        <h1 className="text-5xl font-bold">Hey, I'm <span className='text-secondary '>Mozammel</span></h1>
                        <p className="py-6 pr-10 text-xl font-semibold">I'm a Developer. I am experienced with WordPress, ReactJS, JavaSCript, HTML, CSS and Basic Knowledge of (NodeJS, ExpressJS, MongoDB)</p>
                        <h2  className='btn btn-secondary'>Contact</h2>
                    </div>
                </div>
            </div>
            {/* <Skills></Skills>
            <CompleteProjects></CompleteProjects> */}
            {/* <Reviews></Reviews> */}
            {/* <Contact></Contact>
            <Footer></Footer> */}
        </div>
    )
}

export default Home
