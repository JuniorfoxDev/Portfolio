import { Link } from "react-router-dom";
import img1 from "../assets/avtar.png"
import celeb from '../assets/celeb.png'
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
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from "react";
import {SunIcon} from './Icons/SunIcon'
import {MoonIcon} from './Icons/MoonIcon'
const Home = () => {
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
    localStorage.setItem('darkMode',!darkMode);
  };
 const images = [
  {
    image: 'https://cdn.logojoy.com/wp-content/uploads/20230511124058/instagram-new-gradient-logo-animation.gif',
     url:'https://www.instagram.com/i.vaibhavv08/?hl=en'
  },
  {
    image: 'https://img.freepik.com/premium-photo/twitter-logo-icon-illustration-vector_895118-5895.jpg',
    url:'/'
  },{
    image : 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/74/69/57/74695756-6bad-a444-f1b4-781c807f1352/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png',
    url:'https://www.linkedin.com/in/vaibhav-meshram-950a881aa/'
  }
 ]
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className={`h-[100vh] px-4 md:px-40 py-5`}>
      <div className="grid grid-cols-1 p-4 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow hover:shadow-xl">
            <div className="flex items-center flex-col md:flex-row ">
              <img src={img1} alt="" className="w-[140px] " />
              <p className="text-base font-poppins text-wrap">I&#39;m <strong>Vaibhav</strong>, An enthusiastic Software Developer from Nagpur, India. with a strong passion for Full Stack Development. With hands-on experience in developing impactful solutions, I am dedicated to leveraging my skills to drive innovation and deliver high-quality results.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-2xl h-[200px] bg-box-text p-4  relative shadow overflow-hidden hover:shadow-xl grayscale hover:grayscale-0" style={
            { 
              backgroundImage: "url('https://images.ui8.net/res/robot/image/upload/iir1ulncnejy0ehcak47/1502284824.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              }}>
            <h2 className="font-poppins text-gray-300 px-2 text-4xl font-extrabold ">Projects</h2>
            <Link to='/Projects' className="bg-white rounded-full p-2 bottom-1 border-gray-400 border-2 hover:border-4 absolute"><GoArrowUpRight size={24}/></Link>
            
        </div>
        </div>
        <div className="col-span-1 row-span-4">
          <div className="rounded-2xl hover:shadow-xl bg-white p-4 pb-10 relative" style={{
            backgroundImage: `url('https://devakshay.vercel.app/media/Topographic-EZTJWYCO.svg')`,
            backgroundPosition: 'center',
          }}>
            <div className="h-[500px] grid grid-cols-2 gap-4 items-center justify-items-center">
              <FaReact size={55} className="hover:text-blue-900"/>
              <DiNodejs size={55} className="hover:text-blue-900" />
              <RiTailwindCssFill size={55} className="hover:text-blue-900" />
              <SiJavascript size={55} className="hover:text-blue-900" />
              <SiNextdotjs size={55} className="hover:text-blue-900" />
              <IoLogoVercel size={55} className="hover:text-blue-900"/>
              <SiTypescript size={55} className="hover:text-blue-900" />
              <VscGithubInverted size={55} className="hover:text-blue-900" />
              <FaHtml5 size={55} className="hover:text-blue-900" />
              <FaCss3Alt size={55} className="hover:text-blue-900" />
            </div>
            <Link to='/skills' className="bg-white p-2 rounded-full border-gray-300 hover:border-4 border-2 absolute bottom-1 left-4"><GoArrowUpRight size={24} /> </Link>
          </div>
        </div>
        <div className="col-span-1" >
          <div className="rounded-2xl  overflow-hidden ">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} transitionTime={1000} showIndicators={false} showArrows={false}>
            {images.map((image,index) => (
              <Link to={image.url} key={index}>
              <div  className="w-full h-[200px]" style={{backgroundImage:`url(${image.image})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
              </Link>
            ))}
          </Carousel>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="rounded-2xl hover:shadow-xl bg-white p-4 pb-10 relative h-[180px] md:h-full" style={{
            backgroundImage: `url('https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg')`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
          }}>
            <Link to='https://github.com/JuniorfoxDev' target="_blank" className="p-2 bg-[#D1D5DB] absolute bottom-2 left-4 rounded-full hover:border-4 border-2"><GoArrowUpRight size={20}/></Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-2xl bg-white h-full p-4 flex justify-center items-center">
            
            <div className={`relative w-40 h-16 flex items-center cursor-pointer rounded-full p-2 ${darkMode ? "bg-purple-600" : "bg-gray-800"}`} onClick={toggleDarkMode}>
              <div className={`w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-md transform transition-transform ${darkMode ? "translate-x-24" : ""}`}>
                {darkMode ? <SunIcon className="w-8 h-8" /> : <MoonIcon className="w-8 h-8" />}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-2xl relative bg-white p-4 md:p-6 h-[280px] overflow-hidden">
            <div className="w-80 h-80 bg-blue-400/[0.6] rounded-full absolute -right-28 -top-32"></div>
            <div className="relative">
              <img src={celeb} alt="" className="md:w-[100px] md:h-[100px] w-[120px] h-[120px] " />
            </div>
            <div className="relative">
              <h2 className="px-2 md:px-16 md:py-4 text-3xl md:text-4xl font-poppins font-bold">Get In Touch</h2>
            </div>
            <div className="relative">
              <h4 className="md:px-16 px-2 py-2 text-gray-700 font-poppins font-medium text-xs">Contact : Vaibhavmeshram2908@gmail.com</h4>
            </div>
            <Link to='/contact' className="bg-gray-300 w-12 h-12 rounded-full p-2 flex items-center justify-center absolute hover:border-4 border-gray-100"><GoArrowUpRight size={24} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home