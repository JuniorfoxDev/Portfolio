import img1 from "../assets/avtar.png"
const About = () => {
  return (
    <div className="h-[100vh] px-4 md:px-40 py-5 text-white">
        <div className="bg-white p-4 w-full rounded-2xl md:h-[250px] border-2 border-card-border shadow hover:shadow-xl text-black my-4">
          <div className="flex items-center">
          <img src={img1} alt="" className="w-[120px] h-[120px]"/>
          <h2 className="font-poppins font-bold text-xl md:text-3xl bg-ab-text bg-clip-text text-transparent">Hey, I'm Vaibhav Meshram</h2>
          </div>
          <p className="px-4 md:px-16 text-lg font-poppins">An enthusiastic Software Developer from Nagpur, India. with a strong passion for Full Stack Development. With hands-on experience in developing impactful solutions, I am dedicated to leveraging my skills to drive innovation and deliver high-quality results.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between ">
          <div className="bg-white p-8 h-full w-full rounded-2xl text-black shadow hover:shadow-xl">
            <h2 className="font-poppins font-bold text-3xl bg-a-text bg-clip-text text-transparent">Education</h2>
            <div className="bg-[#18182F] p-3 rounded-xl my-2 w-full h-full hover:scale-105 duration-300">
                <div className="flex items-center gap-6">
                  <h2 className="font-poppins text-white text-lg">College of Engineering and Technology, Akola</h2>
                  <h5 className="font-poppins text-white text-xs">2021 - 2024</h5>
                </div>
                <p className="my-2 font-poppins font-bold text-white text-xl">B.E. Computer Science and Engineering</p>
                <p className="font-poppins font-bold text-white text-lg">7.02 CGPA</p>
            </div>
            <div className="bg-[#18182F] p-3 rounded-xl my-2 w-full h-full hover:scale-105 duration-300">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="font-poppins text-white text-lg">TGPCET, Nagpur</h2>
                  <h5 className="font-poppins text-white text-xs">2019 - 2021</h5>
                </div>
                <p className="my-2 font-poppins font-bold text-white text-xl">Diploma in Computer Science and Engineering</p>
                <p className="font-poppins font-bold text-white text-lg"> 8.4 CGPA</p>
            </div>
            <div className="bg-[#18182F] p-3 rounded-xl my-2 w-full h-full hover:scale-105 duration-300">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="font-poppins text-white text-lg">M.P. Deo Memorial College</h2>
                  <h5 className="font-poppins text-white text-xs">2017 - 2019</h5>
                </div>
                <p className="my-2 font-poppins font-bold text-white text-xl">HSC</p>
                <p className="font-poppins font-bold text-white text-lg"></p>
            </div>
            <div className="bg-[#18182F] p-3 rounded-xl my-2 w-full h-full hover:scale-105 duration-300">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="font-poppins text-white text-lg">K.V.V.S.N</h2>
                  <h5 className="font-poppins text-white text-xs">2017</h5>
                </div>
                <p className="my-2 font-poppins font-bold text-white text-xl">SSC</p>
                <p className="font-poppins font-bold text-white text-lg"></p>
            </div>
          </div>
          <div className="bg-white p-8 h-full w-full rounded-2xl shadow hover:shadow-xl">
          <h2 className="font-poppins font-bold text-3xl bg-a-text bg-clip-text text-transparent">Internship</h2>
          <div className="bg-[#18182F] p-3 rounded-xl my-2 w-full h-full hover:scale-105 duration-300">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="font-poppins text-white text-lg">Cybrix Technologies Pvt Ltd.</h2>
                  <h5 className="font-poppins text-white text-xs">2021</h5>
                </div>
                <p className="my-2 font-poppins font-bold text-white text-xl">Java Developer Intern</p>
                <p className="font-poppins font-normal text-white text-base">Completed an internship focused on advanced Java development, including web page creation using applets and Swift.</p>
                <p className="font-poppins font-normal text-white text-base">Developed a comprehensive Library Management System using Servlets.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About