import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImSpinner } from "react-icons/im";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portfolio-server-vaibhav.vercel.app/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen px-4 py-5 text-white bg-black/[0.2]">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ImSpinner className="animate-spin text-white text-5xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white h-fit px-4 py-6 rounded-3xl text-black flex flex-col gap-5"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.name}
                  className="h-auto w-auto rounded-3xl object-cover transition-transform duration-200 hover:scale-125"
                />
              </div>
              <div>
                <h2 className="font-poppins text-3xl font-semibold">
                  {project.name}
                </h2>
                <div className="flex items-center justify-between">
                  <p className="font-poppins font-medium text-lg">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-black p-3 hover:rounded-full text-center hover:text-white"
                  >
                    <GoArrowUpRight className="text-2xl font-poppins font-bold" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
