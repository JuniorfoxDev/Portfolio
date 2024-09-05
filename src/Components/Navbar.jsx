import { NavLink } from "react-router-dom"
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMobileOpen,setIsMobileOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    }
    const [text,setText] = useState("");
    const fullText = "Vaibhav.";
    useEffect(() => {
        let index =0;
        const IntervalId = setInterval(() => {setText(fullText.slice(0,index)); index++; if(index > fullText.length){clearInterval(IntervalId)}},100)
        return () => clearInterval(IntervalId)
    },[]);
    const handleScroll = () => {
        if(window.scrollY > 60){
            setIsScrolled(true);
        } else{
            setIsScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])
    return (
        <div className={` ${isScrolled ? 'bg-transparent backdrop-filter z-40 backdrop-blur-sm' : 'bg-[#F7F2F2]' }  transition-all duration-300 sticky top-0 flex items-center justify-around py-4`}>
            <NavLink to='/' className="font-sevillo text-3xl bg-nav-text bg-clip-text text-transparent"  onClick={toggleMobileMenu}>{text}</NavLink>
            <div className="hidden md:flex gap-4 uppercase">
                <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 font-poppins text-base" : "font-poppins text-base"}>Profile</NavLink>
                <NavLink to='/About' className={({ isActive }) => isActive ? "text-blue-500 font-poppins text-base" : "font-poppins text-base"}>About</NavLink>
                <NavLink to='/Skills' className={({ isActive }) => isActive ? "text-blue-500 font-poppins text-base" : "font-poppins text-base"}>Skills</NavLink>
                <NavLink to='/Projects' className={({ isActive }) => isActive ? "text-blue-500 font-poppins text-base" : "font-poppins text-base"}>ShowCases</NavLink>
                <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-blue-500 font-poppins text-base" : "font-poppins text-base"}>Contact</NavLink>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMobileMenu}>
                    {isMobileOpen ? <AiOutlineMenuFold size={24}/> : <AiOutlineMenuUnfold size={24}/>}
                </button>
            </div>
            {isMobileOpen && (
                <div className="flex flex-col items-center absolute top-16 left-0  w-full  bg-[#F2F2F2] p-4 md:hidden uppercase">
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 py-2" : "font-poppins text-2xl py-2"} onClick={toggleMobileMenu}>Profile</NavLink>
                    <NavLink to='/About' className={({ isActive }) => isActive ? "text-blue-500 py-2" : "font-poppins text-2xl py-2"} onClick={toggleMobileMenu}>About</NavLink>
                    <NavLink to='/Skills' className={({ isActive }) => isActive ? "text-blue-500 py-2" : "font-poppins text-2xl py-2"} onClick={toggleMobileMenu}>Skills</NavLink>
                    <NavLink to='/Projects' className={({ isActive }) => isActive ? "text-blue-500 py-2" : "font-poppins text-2xl py-2"} onClick={toggleMobileMenu}>ShowCases</NavLink>
                    <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-blue-500 py-2" : "font-poppins text-2xl py-2"} onClick={toggleMobileMenu}>Contact</NavLink>
                </div>
            )}
        </div>
    )
}

export default Navbar