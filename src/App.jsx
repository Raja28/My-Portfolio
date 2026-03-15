
import Navbar from './components/Navbar'
import cssIcon from '../src/assets/cssIcon.png'
import expressIcon2 from '../src/assets/expressIcon2.png'
import htmlIcon from '../src/assets/htmlIcon.png'
import mongodbIcon from '../src/assets/mongodbIcon.png'
import nodeIcon from '../src/assets/nodeIcon.png'
import reactIcon from '../src/assets/reactIcon.png'
import reduxIcon from '../src/assets/reduxIcon.png'
import jsIcon from '../src/assets/jsIcon.png'
import bootstrapIcon from '../src/assets/bootstrapIcon.png'
import tailwindIcon from '../src/assets/tailwindIcon.png'
import Projects from './components/Project.jsx'
import Footer from './components/Footer.jsx'

const techStack = [
  { icon: htmlIcon, name: "HTML" },
  { icon: cssIcon, name: "CSS" },
  { icon: jsIcon, name: "JavaScript" },
  { icon: reactIcon, name: "React" },
  { icon: reduxIcon, name: "Redux" },
  { icon: bootstrapIcon, name: "Bootstrap" },
  { icon: tailwindIcon, name: "Tailwind CSS" },
  { icon: expressIcon2, name: "Express.js" },
  { icon: nodeIcon, name: "Node.js" },
  { icon: mongodbIcon, name: "MongoDB" },
];

// import './App.css'

// function App() {

//   return (
//     <div className="flex min-h-screen flex-col bg-richblack-900 font-inter">
//       <Navbar />
//       <main className='w-10/12 mx-auto text-richblack-25 '>
//         <section className='mt-12 md:mt-24 '>
//           <div className='flex items-end flex-wrap md:flex-nowrap justify-between mx-auto '>

//             {/* left */}
//             <div className='font-semibold text-2xl sm:text-4xl
//             md:text-3xl lg:text-5xl flex flex-col md:items-start items-center my-auto'
//               style={{ width: "100%" }}>
//               <div className='flex gap-3 items-center'>
//                 <span>Hi</span>
//                 <img src={hello}
//                   alt="handWave"
//                   width={60} height={60}
//                   className=''
//                 />
//               </div>
//               <div className=''>My name is</div>
//               <div className='bg-gradient-to-b from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text '>Raja S</div>
//               <div>I build things for web</div>
//             </div>

//             {/* right */}
//             <div className=' mt-8 md:mt-0 '
//               style={{ width: "100%", }}
//             >
//               <img src={MyPic3}


//                 alt="user-image"
//                 className=' mx-auto size-3/4 md:size-2/4 rounded-full object-cover border-3  '

//               />
//             </div>
//           </div>
//         </section>

//         {/* Tech-stack */}
//         <section >
//           <div className='mt-20 mb-16'>

//             <div className='flex flex-col items-center'>

//               <h2 className='mx-auto md:text-4xl text-2xl font-semibold '>My Tech Stack</h2>
//               <small className='md:scale-150 mt-3 text-richblack-100 '>Technologies I’ve been working with recently</small>
//             </div>

//             <div className='mt-7'>
//               <div className='flex lg:gap-x-20 lg:gap-y-10 md:gap-x-14 md:gap-y-7 justify-between flex-wrap '>
//                 {
//                   teachStack.map(tech => (
//                     <span key={tech} className=''>
//                       <img src={tech} alt={tech}
//                         className='lg:size-28 md:size-24 size-20 object-cover p-5
//                       hover:scale-105 transition-all duration-200' />
//                     </span>
//                   ))
//                 }
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* project */}
//         <Projects />
//       </main>
//       <Footer />
//     </div>
//   )
// }

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-richblack-900 font-inter text-richblack-25">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-32 overflow-hidden">

          {/* Background Spotlight */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="h-[500px] w-[900px] bg-gradient-radial from-[#12D8FA]/20 via-[#C850C0]/10 to-transparent blur-3xl"></div>
          </div>

          {/* Decorative Gradient Lines */}
          <div className="absolute top-0 left-0 w-full h-full -z-20 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_60%)]"></div>

          <div className="mx-auto max-w-4xl text-center px-4">

            <p className="text-sm tracking-widest text-richblack-300 uppercase mb-4">
              Full Stack Developer
            </p>

            <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">
                Raja S
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-richblack-200 max-w-2xl mx-auto leading-relaxed">
              I build scalable and modern web applications using JavaScript,
              React, Node.js and MongoDB.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] px-6 py-3 font-semibold text-richblack-900 transition-all"
              >
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/in/raja28"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-richblack-600 px-6 py-3 font-semibold hover:border-richblack-400 transition-all"
              >
                Contact Me
              </a>
            </div>

          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 sm:py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              My Tech Stack
            </h2>
            <small className="mt-3 max-w-2xl text-sm text-richblack-100 sm:text-base">
              Technologies I’ve been working with recently
            </small>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-2xl border border-richblack-700 bg-richblack-800/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-richblack-500 hover:shadow-lg w-24 sm:w-28 md:w-32"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                  />

                  <p className="mt-2 text-xs sm:text-sm text-richblack-50">
                    {tech.name}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Projects */}
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App
