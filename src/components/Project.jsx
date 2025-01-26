import project1 from '../assets/modernMobiles2.png'
import project2 from '../assets/Workasana.png'
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
            frontend: ['React', 'Redux Toolkit', 'Axios', 'React-router'],
            backend: ['Express', 'Node', 'MongoDB']
        },
        description: `Modern Mobiles an e-commerce application that enables users to browse,
         shop, and make purchases mobiles online. These apps provide a convenient and seamless shopping 
         experience by integrating various features that enhance user engagement and streamline the buying process.`
    },
    {
        id: 2,
        name: "Workasana",
        website: "https://workasana.vercel.app/",
        sourceCode: "https://github.com/Raja28/Workasana",
        thumbnail: project2,
        tech: {
            frontend: ['React', 'Redux Toolkit', 'Axios', 'React-router'],
            backend: ['Express', 'Node', 'MongoDB']
        },
        description: `A task management app built with the MERN stack (MongoDB, Express.js, React, Node.js) 
        allows users to create, update, and organize tasks efficiently. With a user-friendly 
        interface powered by React, the app stores task data in a MongoDB database, while 
        Express and Node.js handle backend logic. This full-stack solution offers features 
        like task prioritization, deadlines, and real-time updates, helping individuals or 
        teams stay organized and productive.`
    }
]
export default function Projects() {

    return (
        <section className="text-richblack-25 mb-24">
            <div >
                <div className="flex flex-col items-center">
                    <p className="mx-auto text-2xl md:text-4xl font-semibold">Projects</p>
                    <small className="md:scale-150 mt-3 text-richblack-100">Things I’ve built so far</small>
                </div>
            </div>
            <div>
                {
                    projectInfo.map(project => (
                        <div key={project?.id}
                            className='max-w-8/12 border flex flex-wrap md:flex-nowrap gap-3 rounded-lg mt-8 bg-pure-greys-900'
                        >

                            <img src={project.thumbnail}
                                alt="project-thumbnail"
                                className='md:w-2/5 rounded-lg object-cover h-auto'
                            />

                            <div className='flex flex-col py-5 px-2 rounded-lg '>

                                <div className='flex justify-between'>
                                    <a href={project.website}
                                        className='flex items-center  gap-1 text-2xl' target="_blank">
                                        {project.name}
                                        <LiaExternalLinkAltSolid className='size-5' />
                                    </a>
                                    <a href={project.sourceCode}
                                        className='flex items-center px-2 gap-1 text' target="_blank">
                                        <FaGithub className='size-4' />
                                        <p className='text-sm'>Source</p>
                                    </a>

                                </div>
                                <p className='mt-3 text-[15px]'>
                                    {project.description}
                                </p>


                                <div className='mt-3 text-[15px]'>
                                    <div className='flex items-start gap-2'>
                                        <p className=''>Frontend:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {
                                                project.tech.frontend.map(tool => (
                                                    <p key={tool} className='border py-1 px-3 rounded-2xl text-sm'>
                                                        {tool}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-2 mt-3'>
                                        <p className=''>Backend:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {
                                                project.tech.backend.map(tool => (
                                                    <p key={tool} className='border py-1 px-3 rounded-2xl text-sm'>
                                                        {tool}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )

}