import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <footer className='flex flex-col w-full gap-y-[30px] mb-[80px]' aria-label="Site Footer">
            <section className='flex items-start justify-between w-full max-sm:flex-col max-sm:gap-y-[20px]'>
                <div className='flex flex-col' aria-label="Newsletter Signup">
                    <h2 className='text-[40px] koulen-font'>keep up with me</h2>
                    <div className='flex '>
                        <input className='outline-none AD-font w-[500px] bg-transperent border-[2px] border-black text-[20px] p-[10px] rounded-tl-[15px] rounded-bl-[15px] max-lg:w-[350px] max-sm:w-[180px]' type="text" placeholder='E-mail' aria-label="Email address" />
                        <button className='koulen-font bg-[#D9D981] text-[25px] px-[40px] border-[2px] rounded-tr-[15px] rounded-br-[15px]'>send</button>
                    </div>
                </div>
                {/* <nav  aria-label="Footer Navigation"> */}
                    <ul className='flex flex-col items-end w-full pr-[15px] gap-y-[10px] text-[20px] koulen-font max-sm:flex-row max-sm:gap-x-[20px] max-sm:text-[15px]'>
                        <a href="#hero"><li>Home</li></a>
                        <a href="#about"><li>About</li></a>
                        <a href="#education"><li>Education</li></a>
                        <a href="#projects"><li>Projects</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                {/* </nav> */}
            </section>

            <div className='flex justify-between items-center w-full border-[2px] border-black border-b-[10px] rounded-[30px] p-[10px] max-md:flex-col max-md:gap-y-[20px] max-md:justify-center'>
                <div className='w-full AD-font text-[30px] max-lg:text-[20px]'>
                    <h4>JENISH - © 2025. Powered by Jenish Soni ❤️</h4>
                </div>
                <div className='w-full flex flex-col items-end justify-between max-md:flex-row'>
                    <div className='flex items-center justify-center gap-x-[30px] max-md:mb-[0] max-lg:gap-x-[20px] max-md:gap-x-[10px]'>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={facebook} alt="Facebook logo" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={instagram} alt="Instagram logo" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={twitter} alt="Twitter logo" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <img className='h-[50px] w-auto max-lg:h-[35px] max-md:h-[28px]' src={linkedin} alt="LinkedIn logo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer