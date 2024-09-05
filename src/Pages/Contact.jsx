import { Link } from "react-router-dom"
import emailjs from 'emailjs-com';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData,setFormData] = useState({
    name:'',
    email: '',
    message : ''
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kkw1rhc','template_lzmj27u',e.target,'LEB16c9BhejheiRKh')
     .then((result) => {
      toast.success('Message Sent SuccessFully !');
      setFormData({name:'',email:'',message:''})
     },(error) => {
      toast.error("Failed to send Message")
     });
  }
  return (
    <div className="h-[100vh] px-6 md:px-40 py-5 text-white">
      <div className="bg-contact-bg p-4 w-full h-fit md:h-full rounded-2xl">
        <div className="py-4 md:py-16 px-4 md:px-20">
          <div>
          <h2 className="font-poppins font-bold text-6xl text-black">Hello ! Let's Talk</h2>
          <p className="py-4 font-poppins font-medium text-base md:text-xl text-gray-800/[0.8]">Fill the form to contact me or send mail to <Link className="bg-a-text text-transparent bg-clip-text font-bold hover:border-b-2 border-a-text">vaibhavmeshram2908@gmail.com</Link></p>
          </div>
          <div className="py-4 md:py-12" >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8  max-w-[650px]">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="pb-4 px-1 bg-transparent outline-none font-poppins text-xl text-black/[0.7] border-b-2 placeholder:text-neutral-900/[0.7] placeholder:text-base placeholder:font-poppins border-black/[0.6] focus:border-blue-600 duration-300 " placeholder="Enter your Name" />
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="pb-4 px-1 bg-transparent outline-none font-poppins text-xl text-black/[0.7] border-b-2 placeholder:text-neutral-900/[0.7] placeholder:text-base placeholder:font-poppins border-black/[0.6] focus:border-blue-600 duration-300 " placeholder="Enter your Email " />
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="pb-4 px-1 md:h-[150px] bg-transparent outline-none font-poppins text-xl text-black/[0.7] border-b-2 placeholder:text-neutral-900/[0.7] placeholder:text-base placeholder:font-poppins border-black/[0.6] focus:border-blue-600 duration-300 " placeholder="Type your message here " />
              <button type="submit" className="  md:w-[200px] bg-black rounded-full px-8 py-4 font-poppins  hover:bg-black/[0.9] hover:border-blue-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Contact