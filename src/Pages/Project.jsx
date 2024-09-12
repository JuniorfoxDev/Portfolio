import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { data } from "autoprefixer";
const Project = () => {
  const project = [
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
    {
      heading: 'Marks Chocolate',
      subHeading: 'We Explore avatars that deviate from human form',
      image:'https://flexplate.netlify.app/mogen/assets/images/projects/03.jpg'
    },
  ];
  return (
    <div className="h-auto px-4  py-5 text-white bg-black/[0.2]">
        <div className="grid grid-cols-1 mx-4  md:grid-cols-3 md:mx-32 gap-4 ">
          {project.map((item,index)=> (
            <div key={index} className="bg-white h-fit px-4 py-5 rounded-3xl text-black flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-3xl">
                <img src={item.image} alt="" className="h-auto w-auto rounded-3xl transform object-cover transition-transform duration-200 hover:scale-125"/>
              </div>
              <div>
                <h2 className="font-poppins text-3xl font-semibold px-1">{item.heading}</h2>
                <div className="flex items-center justify-between px-1 py-2  ">
                <p className="font-poppins text-base">{item.subHeading}</p>
                <Link className="hover:bg-black p-3 hover:rounded-full text-center hover:text-white"><GoArrowUpRight className="text-2xl  font-poppins font-bold "/> </Link>
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