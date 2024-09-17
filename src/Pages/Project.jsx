import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import axios from "axios";
const Project = () => {
  const [projects,setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portfolio-server-vaibhav.vercel.app/projects');
        setProjects(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProjects()
  },[])
  return (
    <div className="h-auto px-4  py-5 text-white bg-black/[0.2]">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 py-6'>
       {projects.map((project) => ( 
        <div key={project._id} className="bg-blue-100 h-fit px-4 py-6 rounded-3xl text-black flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={project.image} alt="" className="h-auto w-auto rounded-3xl transform object-cover transition-transform duration-200 hover:scale-125" />
          </div>
          <div>
            <h2 className="font-poppins text-3xl font-semibold ">{project.name}</h2>
            <div className="flex items-center justify-between">
              <p className="font-poppins font-medium text-lg">{project.description}</p>
              <a href={project.link} target='_blank'  className="hover:bg-black p-3 hover:rounded-full text-center hover:text-white"><GoArrowUpRight className="text-2xl  font-poppins font-bold " /> </a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Project;
{/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center justify-items-center">
        <div className="bg-white text-black p-6 rounded-2xl h-fit w-fit flex gap-4 flex-col shadow hover:shadow-xl">
          <div className="rounded-xl bg-white  h-[200px] md:h-[250px] w-[250px] md:w-[450px]" style={{
            backgroundImage: `url('https://devakshay.vercel.app/assets/img/swiftrevel.webp')`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat:'no-repeat'
          }}></div>
          <h2 className="font-poppins px-2 text-2xl font-medium">Project Name</h2>
          <div className="flex gap-4 px-2">
            <FaReact size={28} className="text-sky-500 hover:scale-110 duration-300" />
            <SiJavascript size={24} className="text-sky-500 hover:scale-110 duration-300" />
            <RiTailwindCssFill size={28} className="text-sky-500 hover:scale-110 duration-300" />
            <SiMongodb size={28} className="text-sky-500 hover:scale-110 duration-300" />
          </div>
          <div className="flex relative gap-4 items-center">
            <Link className="bg-gray-100 p-4 rounded-full border-2 border-gray-300 hover:border-4"><GoArrowUpRight size={20}/></Link>
            <Link className="rounded-full p-4 w-12 h-12" style={{
            backgroundImage: `url('https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg')`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
          }}></Link>
          </div>
        </div>
      </div> */}