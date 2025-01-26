import { useState } from 'react'
import Navbar from './components/Navbar'
import hello from '../src/assets/hello.png'
import cssIcon from '../src/assets/cssIcon.png'
import expressIcon2 from '../src/assets/expressIcon2.png'
import htmlIcon from '../src/assets/htmlIcon.png'
import MyPic3 from '../src/assets/Designer.jpeg'
import mongodbIcon from '../src/assets/mongodbIcon.png'
import nodeIcon from '../src/assets/nodeIcon.png'
import reactIcon from '../src/assets/reactIcon.png'
import reduxIcon from '../src/assets/reduxIcon.png'
import jsIcon from '../src/assets/jsIcon.png'
import bootstrapIcon from '../src/assets/bootstrapIcon.png'
import tailwindIcon from '../src/assets/tailwindIcon.png'
import Projects from './components/Project.jsx'
import Footer from './components/Footer.jsx'

const teachStack = [
  htmlIcon, cssIcon, jsIcon, reactIcon, reduxIcon, bootstrapIcon, tailwindIcon, expressIcon2, nodeIcon, mongodbIcon
]

// import './App.css'

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-richblack-900 font-inter">
      <Navbar />
      <main className='w-10/12 mx-auto text-richblack-25 '>
        <section className='mt-12 md:mt-24 '>
          <div className='flex items-end flex-wrap md:flex-nowrap justify-between mx-auto '>

            {/* left */}
            <div className='font-semibold text-2xl sm:text-4xl
            md:text-3xl lg:text-5xl flex flex-col md:items-start items-center my-auto'
              style={{ width: "100%" }}>
              <div className='flex gap-3 items-center'>
                <span>Hi</span>
                <img src={hello}
                  alt="handWave"
                  width={60} height={60}
                  className=''
                />
              </div>
              <div className=''>My name is</div>
              <div className='bg-gradient-to-b from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text '>Raja S</div>
              <div>I build things for web</div>
            </div>

            {/* right */}
            <div className=' mt-8 md:mt-0 '
              style={{ width: "100%", }}
            >
              <img src={MyPic3}


                alt="user-image"
                className=' mx-auto size-3/4 md:size-2/4 rounded-full object-cover border-3  '

              />
            </div>
          </div>
        </section>

        {/* Tech-stack */}
        <section >
          <div className='mt-20 mb-16'>

            <div className='flex flex-col items-center'>

              <h2 className='mx-auto md:text-4xl text-2xl font-semibold '>My Tech Stack</h2>
              <small className='md:scale-150 mt-3 text-richblack-100 '>Technologies I’ve been working with recently</small>
            </div>

            <div className='mt-7'>
              <div className='flex lg:gap-x-20 lg:gap-y-10 md:gap-x-14 md:gap-y-7 justify-between flex-wrap '>
                {
                  teachStack.map(tech => (
                    <span key={tech} className=''>
                      <img src={tech} alt={tech}
                        className='lg:size-28 md:size-24 size-20 object-cover p-5
                      hover:scale-105 transition-all duration-200' />
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        {/* project */}
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
