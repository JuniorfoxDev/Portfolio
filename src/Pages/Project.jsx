import { useEffect, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { ImSpinner } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Project = () => {
  const [detailsModel,setDetailsModel] = useState(null);
  const [loading,setLoading] = useState(true);
  const [projects,setProjects] = useState([]);
  const shortDescription = (desc,length) =>  {
    if(desc.length <= length) return desc;
    return desc.slice(0,length) + " ...";
  }
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://portfolio-server-vaibhav.vercel.app/projects");
        setProjects(response.data);
      } catch (error) {
        console.log("Failed to get Data",error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  },[])
  return (
    <div className="p-8 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ImSpinner className="animate-spin text-white text-5xl" />
        </div>
      ) : ( 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="bg-[#1e293b] rounded-3xl shadow-lg w-84  overflow-hidden">
              <img src={project.image} alt={project.name} loading="lazy" className="object-cover w-full h-60 transform transition-transform duration-300 hover:scale-110" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-50 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-100 mb-6 leading-relaxed">
                  {shortDescription(project.description,80)}
                </p>
                <div className="flex justify-between items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-300 text-sm font-medium">
                    View Project
                    <span className="text-base ml-1">
                      <LuExternalLink />
                    </span>
                  </a>
                  <button onClick={() => setDetailsModel(project)} className="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium py-2 px-4 rounded-md">
                    View Details
                  </button>
                  {/* <a href="#" className="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium py-2 px-4 rounded-md">
                    View Details
                    <span className="text-base ml-1">
                      <FaLongArrowAltRight />
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
          {detailsModel && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
              <div className="bg-[#1e293b] rounded-lg max-w-md w-full p-6 relative text-slate-100">
                <button onClick={() => setDetailsModel(null)} className="absolute top-2 right-2 text-slate-400 hover:text-slate-200">
                  <IoClose size={24} />
                </button>
                <h1 className="text-lg text-slate-50 py-2">{detailsModel.name}</h1>
                <h2 className="text-sm text-slate-300 py-4">{detailsModel.description}</h2>
              </div>
            </div>
          )}
      </div>
      )}
    </div>
  )
}
export default Project;