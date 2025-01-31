import { Link } from "react-router-dom";
import nameAsBrand from '../assets/nameAsBrand.png'

const navLinks = [
    // {
    //     id: "home",
    //     name: "Home",
    //     link: "",
    // },
    // {
    //     id: "projects",
    //     name: "Projects",
    //     link: "",
    // },
    // {
    //     id: "techStack",
    //     name: "Tech Stack",
    //     link: "techStack",
    // },
    // {
    //     id: "about",
    //     name: "About",
    //     link: "",
    // },
    // {
    //     id: "contact",
    //     name: "Contact",
    //     link: "",
    // },
]

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="flex justify-center h-16 items-center border-b-[1px] border-b-richblack-700">
                    <div className="w-10/12 flex items-center justify-between text-richblack-25">
                        <Link to="/"
                            className=""
                        >
                            {/* bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text  */}
                            <span className="
                            bg-gradient-to-b from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text 
                            w-8 h-8 text-5xl font-semibold font-mono "
                            >
                                Raja
                            </span>
                        </Link>

                        {/* <ul className="flex gap-7 font-thin h-9 items-center">
                            {
                                navLinks.map(links => (
                                    <li
                                    key={links.id}
                                        className="group hover:visible` 
                                    transition-all duration-400 cursor-pointer"
                                    >
                                        <span className="">
                                            {links.name}
                                        </span>
                                        <div className="h-[1.4px] did invisible group-hover:visible bg-richblack-25"></div>
                                    </li>
                                ))
                            }
                        </ul> */}
                        <a
                            href="https://drive.google.com/file/d/1tceNLGmJ6iW2M5QhwZxwvhH3xIR38r66/view?usp=sharing"
                            target="_blank"
                            type="button"
                            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 
                            focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
                        >
                            Resume
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}