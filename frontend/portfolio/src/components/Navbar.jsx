import React from 'react'
import jenishlogo from '../assets/JENISH.png'
import line from '../assets/line.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import menu from '../assets/menu.png'


function Navbar() {
  return (
    <nav className='sticky top-0 w-[350px] h-screen flex flex-col items-center p-[20px] max-md:w-screen max-md:h-[130px] max-md:pt-[20px] max-md:pb-[0px] max-lg:w-[220px]'>
      <div className='flex flex-col items-center w-full max-lg:items-start'>
        <div className='pt-[50px] mb-[50px] flex items-center w-full max-md:mb-[10px] max-lg:pt-[20px] max-lg:justify-between max-md:pt-[0px]'>
          <img className='h-[60px] w-auto max-lg:h-[50px] max-sm:h-[35px]' src={jenishlogo} alt="JENISH" />
          <img className='h-[25px] w-auto md:hidden ' src={menu} alt="" />
        </div>

        <div className='bg-[#C9C5B5] border-black border-t-[2px] border-l-[2px] border-r-[2px] border-b-[10px]  rounded-[18px] w-full flex py-[30px] mb-[50px] max-md:hidden'>
          <ul className='flex flex-col items-end w-full pr-[15px] gap-y-[10px] koulen-font'>
            <a href="#hero"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#education"><li>Education</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>

        <img className='h-full w-full mb-[30px] max-md:hidden' src={line} alt="" />

        <div className='w-full flex flex-col items-center justify-between max-md:flex-row'>
          <div className='flex items-center justify-center gap-x-[30px] mb-[30px] max-md:mb-[0] max-lg:gap-x-[20px] max-md:gap-x-[10px]'>
            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={facebook} alt="" />
            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={instagram} alt="" />
            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={twitter} alt="" />  
            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={linkedin} alt="" />
          </div>

          <img className='h-full w-full mb-[30px] max-md:hidden' src={line} alt="" />

          <a href="./jenishsoniresume-1.pdf"  target="_blank" rel="noopener noreferrer">
          <button className='AD-font border-t-[2px] border-l-[2px] border-r-[2px] cursor-pointer border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[20px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[10px] max-sm:rounded-[10px]'>
            Download CV
          </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar