import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {

    const links = [
        {
            name: FaGithub,
            url: "https://github.com/Raja28/"

        },
        {
            name: FaLinkedin,
            url: 'https://www.linkedin.com/in/raja28'
        },
        {
            name: FaInstagram,
            url: 'https://www.instagram.com/raja_s_28?igsh=MTh5cjQxdThwZ3lseQ=='
        },
        {
            name: MdMailOutline,
            url: 'mailto:rajadavid03@gmail.com'
        },

    ]

    return (
        <footer className="  bg-pure-greys-800">
            <div className="w-10/12 mx-auto flex justify-between my-12">
                <Link to="/"
                    className=""
                >
                    {/* bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text  */}
                    <span className="
                            bg-gradient-to-b from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text 
                            w-8 h-8 text-5xl font-semibold font-mono "
                    >Raja
                    </span>
                    <div className="text-richblack-5 text-xs flex justify-between">
                        {/* <HiOutlineHeart /> */}
                        <div className="mt-1">
                            &copy; Raja - 2025, Inc.
                        </div>
                    </div>
                </Link>

                <div className="flex flex-col text-richblack-100 px-1">
                    <span className="text-richblack-5 mb-2">Connect with me</span>
                    <div className="flex justify-between w-full ">
                        {/* <FaGithub />
                        <FaLinkedin />
                        <FaInstagram /> */}
                        {
                            links.map(link => (
                                link.name === "MdMailOutline" ? (
                                    <a
                                        key={link.url}
                                        href={`mailto:${link.url}`}
                                        className="cursor-pointer hover:scale-105"
                                    >
                                        <link.name />
                                        {/* <img src={link.name} alt="Mail Icon" style={{ width: '32px', height: '32px', cursor: 'pointer' }} /> */}
                                    </a>

                                )
                                    :
                                    (
                                        <a key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            className="cursor-pointer hover:scale-105">
                                            <link.name />
                                        </a>
                                    )
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )

}