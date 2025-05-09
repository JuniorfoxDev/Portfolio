import { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
import { ImSpinner } from "react-icons/im";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://portfolio-server-vaibhav.vercel.app/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 bg-black/20 text-white">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ImSpinner className="animate-spin text-white text-5xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-3xl text-black p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
              >
                View Project
                <GoArrowUpRight className="text-xl" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
