
import { GoArrowUpRight } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="h-[100vh] px-4 md:px-40 py-5 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div>
          <img src="https://antonyjudeshaman.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftools.ff2b8f7d.png&w=640&q=75" alt=""  />
        </div>
        <div className="bg-black/[0.9] py-10 px-10 md:px-4 md:h-full md:w-[450px] rounded-xl">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-10 md:gap-6 items-center justify-items-center">
          <FaReact size={55} className="hover:text-sky-500 hover:scale-110 duration-300"/>
              <DiNodejs size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <RiTailwindCssFill size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <SiJavascript size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <SiNextdotjs size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <IoLogoVercel size={55} className="hover:text-sky-500 hover:scale-110 duration-300"/>
              <SiTypescript size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <VscGithubInverted size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <FaHtml5 size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <FaCss3Alt size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <FaAngular size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <VscVscode size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <FaGitAlt size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <SiMongodb size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <FaJava size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
              <GrMysql size={55} className="hover:text-sky-500 hover:scale-110 duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills