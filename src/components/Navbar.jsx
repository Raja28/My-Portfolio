// import { Link } from "react-router-dom";


// const navLinks = [
//     // {
//     //     id: "home",
//     //     name: "Home",
//     //     link: "",
//     // },
//     // {
//     //     id: "projects",
//     //     name: "Projects",
//     //     link: "",
//     // },
//     // {
//     //     id: "techStack",
//     //     name: "Tech Stack",
//     //     link: "techStack",
//     // },
//     // {
//     //     id: "about",
//     //     name: "About",
//     //     link: "",
//     // },
//     // {
//     //     id: "contact",
//     //     name: "Contact",
//     //     link: "",
//     // },
// ]

// export default function Navbar() {
//     return (
//         <>
//             <header>
//                 <nav className="flex justify-center h-16 items-center border-b-[1px] border-b-richblack-700">
//                     <div className="w-10/12 flex items-center justify-between text-richblack-25">
//                         <Link to="/"
//                             className=""
//                         >
//                             {/* bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text  */}
//                             <span className="
//                             bg-gradient-to-b from-[#C850C0] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text 
//                             w-8 h-8 text-5xl font-semibold font-mono "
//                             >
//                                 Raja
//                             </span>
//                         </Link>

//                         {/* <ul className="flex gap-7 font-thin h-9 items-center">
//                             {
//                                 navLinks.map(links => (
//                                     <li
//                                     key={links.id}
//                                         className="group hover:visible` 
//                                     transition-all duration-400 cursor-pointer"
//                                     >
//                                         <span className="">
//                                             {links.name}
//                                         </span>
//                                         <div className="h-[1.4px] did invisible group-hover:visible bg-richblack-25"></div>
//                                     </li>
//                                 ))
//                             }
//                         </ul> */}
//                         <a
//                             href="https://drive.google.com/file/d/17bBXHI-MNHsnj9EVaVWKjPcMkFxOjmBe/view?usp=drive_link"
//                             target="_blank"
//                             type="button"
//                             className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 
//                             focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 
//                             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
//                         >
//                             Resume
//                         </a>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     )
// }

import { Link } from "react-router-dom";

const navLinks = [
  // {
  //   id: "home",
  //   name: "Home",
  //   link: "",
  // },
  // {
  //   id: "projects",
  //   name: "Projects",
  //   link: "",
  // },
  // {
  //   id: "techStack",
  //   name: "Tech Stack",
  //   link: "techStack",
  // },
  // {
  //   id: "about",
  //   name: "About",
  //   link: "",
  // },
  // {
  //   id: "contact",
  //   name: "Contact",
  //   link: "",
  // },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-richblack-900/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <span
            className="
              bg-gradient-to-r from-[#C850C0] via-[#12D8FA] to-[#A6FFCB]
              bg-clip-text text-transparent
              text-2xl font-bold tracking-tight
              sm:text-3xl lg:text-4xl
            "
          >
            Raja
          </span>
        </Link>

        {/* Desktop Nav Links */}
        {navLinks.length > 0 && (
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((links) => (
              <li key={links.id} className="group relative cursor-pointer">
                <span className="text-sm font-medium text-richblack-25 transition-colors duration-300 group-hover:text-white">
                  {links.name}
                </span>
                <div className="absolute left-0 top-full mt-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        )}

        {/* Right Side */}
        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/1D2oa26ukSznH-W0Wf0v37E060rizKbWu/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-pink-500 via-pink-500 to-rose-500
              px-4 py-2
              text-sm font-semibold text-white
              shadow-lg shadow-pink-500/20
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-pink-500/30
              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-richblack-900
              sm:px-5 sm:py-2.5
            "
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}