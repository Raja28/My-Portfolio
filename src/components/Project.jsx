// import project1 from '../assets/modernMobiles2.png'
// import project2 from '../assets/Workasana.png'
// import project3 from '../assets/MyCRM.png'
// import { LiaExternalLinkAltSolid } from "react-icons/lia";
// import { FaGithub } from "react-icons/fa";

// const projectInfo = [
//     {
//         id: 1,
//         name: "Modern Mobiles",
//         website: "https://modern-mobiles.vercel.app/",
//         sourceCode: "https://github.com/Raja28/ModernMobiles",
//         thumbnail: project1,
//         tech: {
//             frontend: ['React', 'Redux Toolkit', 'Axios', 'React-router'],
//             backend: ['Express', 'Node', 'MongoDB']
//         },
//         description: `Modern Mobiles an e-commerce application that enables users to browse,
//          shop, and make purchases mobiles online. These apps provide a convenient and seamless shopping 
//          experience by integrating various features that enhance user engagement and streamline the buying process.`
//     },
//     {
//         id: 2,
//         name: "Workasana",
//         website: "https://workasana.vercel.app/",
//         sourceCode: "https://github.com/Raja28/Workasana",
//         thumbnail: project2,
//         tech: {
//             frontend: ['React', 'Redux Toolkit', 'Axios', 'React-router'],
//             backend: ['Express', 'Node', 'MongoDB']
//         },
//         description: `A task management app built with the MERN stack (MongoDB, Express.js, React, Node.js) 
//         allows users to create, update, and organize tasks efficiently. With a user-friendly 
//         interface powered by React, the app stores task data in a MongoDB database, while 
//         Express and Node.js handle backend logic. This full-stack solution offers features 
//         like task prioritization, deadlines, and real-time updates, helping individuals or 
//         teams stay organized and productive.`
//     },
//     {
//         id: 3,
//         name: "MyCRM",
//         website: "https://my-crm-client.vercel.app/",
//         sourceCode: "https://github.com/Raja28/MyCRM",
//         thumbnail: project3,
//         tech: {
//             frontend: ['React', 'Redux Toolkit', 'Axios', 'React-router'],
//             backend: ['Express', 'Node', 'MongoDB']
//         },
//         description: `Designed and developed MyCRM, a full-stack CRM application using the MERN stack 
//         (MongoDB, Express.js, React, Node.js) to manage the complete lead lifecycle.
//         Implemented key CRM features including sales agent assignment, lead stage tracking, 
//         and collaborative commenting for enhanced sales team coordination.`
//     },
// ]
// export default function Projects() {

//     return (
//         <section className="text-richblack-25 mb-24">
//             <div >
//                 <div className="flex flex-col items-center">
//                     <p className="mx-auto text-2xl md:text-4xl font-semibold">Projects</p>
//                     <small className="md:scale-150 mt-3 text-richblack-100">Things I’ve built so far</small>
//                 </div>
//             </div>
//             <div>
//                 {
//                     projectInfo.map(project => (
//                         <div key={project?.id}
//                             className='max-w-8/12 border flex flex-wrap md:flex-nowrap gap-3 rounded-lg mt-8 bg-pure-greys-900 '
//                         >

//                             <img src={project.thumbnail}
//                                 alt="project-thumbnail"
//                                 className='md:w-2/5 lg:w-2/5 rounded-lg object-cover h-auto'
//                             />

//                             <div className='flex flex-col py-5 px-2 rounded-lg '>

//                                 <div className='flex justify-between'>
//                                     <a href={project.website}
//                                         className='flex items-center  gap-1 text-2xl' target="_blank">
//                                         {project.name}
//                                         <LiaExternalLinkAltSolid className='size-5' />
//                                     </a>
//                                     <a href={project.sourceCode}
//                                         className='flex items-center px-2 gap-1 text' target="_blank">
//                                         <FaGithub className='size-4' />
//                                         <p className='text-sm'>Source</p>
//                                     </a>

//                                 </div>
//                                 <p className='mt-3 text-[15px]'>
//                                     {project.description}
//                                 </p>


//                                 <div className='mt-3 text-[15px]'>
//                                     <div className='flex items-start gap-2'>
//                                         <p className=''>Frontend:</p>
//                                         <div className='flex flex-wrap gap-2'>
//                                             {
//                                                 project.tech.frontend.map(tool => (
//                                                     <p key={tool} className='border py-1 px-3 rounded-2xl text-sm'>
//                                                         {tool}
//                                                     </p>
//                                                 ))
//                                             }
//                                         </div>
//                                     </div>
//                                     <div className='flex items-start gap-2 mt-3'>
//                                         <p className=''>Backend:</p>
//                                         <div className='flex flex-wrap gap-2'>
//                                             {
//                                                 project.tech.backend.map(tool => (
//                                                     <p key={tool} className='border py-1 px-3 rounded-2xl text-sm'>
//                                                         {tool}
//                                                     </p>
//                                                 ))
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </section >
//     )

// }

import project1 from "../assets/modernMobiles2.png";
import project2 from "../assets/Workasana.png";
import project3 from "../assets/MyCRM.png";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

const projectInfo = [
  {
    id: 1,
    name: "Modern Mobiles",
    website: "https://modern-mobiles.vercel.app/",
    sourceCode: "https://github.com/Raja28/ModernMobiles",
    thumbnail: project1,
    tech: {
      frontend: ["React", "Redux Toolkit", "Axios", "React-router"],
      backend: ["Express", "Node", "MongoDB"],
    },
    description: `Modern Mobiles an e-commerce application that enables users to browse,
         shop, and make purchases mobiles online. These apps provide a convenient and seamless shopping 
         experience by integrating various features that enhance user engagement and streamline the buying process.`,
  },
  {
    id: 2,
    name: "Workasana",
    website: "https://workasana.vercel.app/",
    sourceCode: "https://github.com/Raja28/Workasana",
    thumbnail: project2,
    tech: {
      frontend: ["React", "Redux Toolkit", "Axios", "React-router"],
      backend: ["Express", "Node", "MongoDB"],
    },
    description: `A task management app built with the MERN stack (MongoDB, Express.js, React, Node.js) 
        allows users to create, update, and organize tasks efficiently. With a user-friendly 
        interface powered by React, the app stores task data in a MongoDB database, while 
        Express and Node.js handle backend logic. This full-stack solution offers features 
        like task prioritization, deadlines, and real-time updates, helping individuals or 
        teams stay organized and productive.`,
  },
  {
    id: 3,
    name: "MyCRM",
    website: "https://my-crm-client.vercel.app/",
    sourceCode: "https://github.com/Raja28/MyCRM",
    thumbnail: project3,
    tech: {
      frontend: ["React", "Redux Toolkit", "Axios", "React-router"],
      backend: ["Express", "Node", "MongoDB"],
    },
    description: `Designed and developed MyCRM, a full-stack CRM application using the MERN stack 
        (MongoDB, Express.js, React, Node.js) to manage the complete lead lifecycle.
        Implemented key CRM features including sales agent assignment, lead stage tracking, 
        and collaborative commenting for enhanced sales team coordination.`,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-20 text-richblack-25 sm:mb-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          Projects
        </h2>
        <small className="mt-3 text-sm text-richblack-100 sm:text-base">
          Things I’ve built so far
        </small>
      </div>

      {/* Project Cards */}
      <div className="mt-10 flex flex-col gap-8">
        {projectInfo.map((project) => (
          <article
            key={project?.id}
            className="
              overflow-hidden rounded-2xl border border-richblack-700
              bg-richblack-800/60 shadow-lg backdrop-blur-sm
              transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
            "
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Image */}
              <div className="w-full md:w-[42%] lg:w-[40%]">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="h-56 w-full object-cover sm:h-64 md:h-full"
                />
              </div>

              {/* Right Content */}
              <div className="flex w-full flex-col p-5 sm:p-6 md:w-[58%] lg:w-[60%]">
                {/* Top Row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-xl font-semibold text-richblack-5 transition-colors duration-300 hover:text-cyan-300 sm:text-2xl"
                  >
                    <span>{project.name}</span>
                    <LiaExternalLinkAltSolid className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-richblack-600 px-3 py-2 text-sm text-richblack-100 transition-all duration-300 hover:border-richblack-400 hover:bg-richblack-700 hover:text-white"
                  >
                    <FaGithub className="text-base" />
                    <span>Source</span>
                  </a>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-richblack-100 sm:text-[15px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <p className="min-w-[90px] text-sm font-medium text-richblack-25">
                      Frontend:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.frontend.map((tool) => (
                        <span
                          key={tool}
                          className="
                            rounded-full border border-richblack-600
                            bg-richblack-700/60 px-3 py-1.5
                            text-xs text-richblack-25 sm:text-sm
                          "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <p className="min-w-[90px] text-sm font-medium text-richblack-25">
                      Backend:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.backend.map((tool) => (
                        <span
                          key={tool}
                          className="
                            rounded-full border border-richblack-600
                            bg-richblack-700/60 px-3 py-1.5
                            text-xs text-richblack-25 sm:text-sm
                          "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}