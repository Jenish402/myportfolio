import React, { useEffect, useRef, useState } from 'react'
import jenishlogo from '../assets/JENISH.png'
import line from '../assets/line.png'
import mail from '../assets/mail.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import menu from '../assets/menu.png'
import { PiArrowBendDownRightBold } from "react-icons/pi";
import Lottie from 'lottie-react'
import download from '../assets/download.json'


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const bookRef = useRef();
  const [activeItem, setActiveItem] = useState(null);

  // Close the menu when clicking outside
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  const menuItems = [
    { name: "Home", href: "/#hero", id: "hero", pageIndex: 0 },
    { name: "About", href: "/#about", id: "about", pageIndex: 1 },
    { name: "Education", href: "/#education", id: "education", pageIndex: 2 },
    { name: "Projects", href: "/#projects", id: "projects", pageIndex: 3 },
    { name: "Contact", href: "/#contact", id: "contact", pageIndex: 4 },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <nav className='z-[100] sticky top-0 w-[350px] h-screen flex flex-col items-center p-[20px] max-md:w-screen max-md:h-[130px] max-md:pt-[20px] max-md:pb-[150px] max-sm:pb-[0px] max-lg:w-[220px]'>
      <div className='flex flex-col items-center w-full max-lg:items-start'>
        <div className='pt-[50px] mb-[50px] flex items-center w-full max-md:mb-[10px] max-lg:pt-[20px] max-lg:justify-between max-md:pt-[0px] max-2xl:mb-[20px]'>
          <img className='h-[60px] w-auto max-lg:h-[50px] max-sm:h-[35px]' src={jenishlogo} alt="JENISH" />
          <div className='relative z-[10000]'>
            <img
              className='h-[25px] w-auto md:hidden cursor-pointer'
              src={menu}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
              <div className="fixed inset-0 bg-black/30">
                <ul
                  ref={menuRef}
                  className=" z-[1000] absolute top-[40px] right-0 bg-[#C9C5B5] h-fit w-fit flex flex-col gap-y-[10px] p-[20px] border-b-[7px] items-start pr-[60px] border-[2px] border-black rounded-[20px] koulen-font md:hidden max-md:right-[20px] max-md:top-[60px]"
                >
                  <li onClick={() => setIsOpen(false)}><a href="/#hero">Home</a></li>
                  <li onClick={() => setIsOpen(false)}><a href="/#about">About</a></li>
                  <li onClick={() => setIsOpen(false)}><a href="/#education">Education</a></li>
                  <li onClick={() => setIsOpen(false)}><a href="/#projects">Projects</a></li>
                  <li onClick={() => setIsOpen(false)}><a href="/#contact">Contact</a></li>
                </ul>
              </div>
            )}

          </div>
        </div>

        <div className='bg-[#C9C5B5] border-black border-t-[2px] border-l-[2px] border-r-[2px] border-b-[10px]  rounded-[18px] w-full flex py-[30px] mb-[50px] max-md:hidden max-2xl:py-[20px] max-2xl:mb-[30px]'>
          <ul className='flex flex-col items-end w-full pr-[15px] gap-y-[10px] koulen-font max-2xl:gap-y-[5px]'>
            {menuItems.map((item, index) => (
              <a
                className='relative'
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  setActiveItem(index);
                  handleScroll(item.id);
                }}
              >
                <li className="flex items-center gap-2">
                  {item.name}
                  {activeItem === index && <PiArrowBendDownRightBold className='absolute left-[-25px] top-0' size={18} />}
                </li>
              </a>
            ))}
          </ul>
        </div>

        <img className='h-full w-full mb-[30px] max-md:hidden max-2xl:mb-[25px]' src={line} alt="" />

        <div className='w-full flex flex-col items-center justify-between max-md:flex-row'>
          <div className='flex items-center justify-center gap-x-[30px] mb-[30px] max-md:mb-[0] max-lg:gap-x-[20px] max-md:gap-x-[10px] max-2xl:mb-[25px]'>
            <a href="mailto:iamjenishsoni402@gmail.com"><img className='h-[50px] w-auto object-contain max-lg:h-[35px] max-md:h-[28px]' src={mail} alt="" /></a>
            <a href="https://www.instagram.com/0001jenish_soni1000?igsh=MTdpYnZwanh0Nzl5ag=="><img className='h-[50px] w-auto object-contain max-lg:h-[35px] max-md:h-[28px]' src={instagram} alt="" /></a>
            <a href="https://github.com/Jenish402"><img className='h-[50px] w-auto object-contain max-lg:h-[35px] max-md:h-[28px]' src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/jenish-soni-a14174224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='h-[50px] w-auto object-contain max-lg:h-[35px] max-md:h-[28px]' src={linkedin} alt="" /></a>
          </div>

          <img className='h-full w-full mb-[30px] max-md:hidden' src={line} alt="" />

          <a href="./jenishsoniresume-1.pdf" target="_blank" rel="noopener noreferrer">
            <button className='flex items-center AD-font border-t-[2px] border-l-[2px] border-r-[2px] cursor-pointer border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[15px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[10px] max-sm:rounded-[10px]'>
              <p>Download CV</p>
              <Lottie className='h-[40px] max-sm:h-[25px]' animationData={download} loop={true}></Lottie>
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar