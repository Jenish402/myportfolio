import React, { useEffect, useRef, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import underline from '../assets/underline.svg'
import Underline from '../components/Underline'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import rightarrow from '../assets/right-arrow.json'
import download from '../assets/download.json'
import { motion } from 'framer-motion'
import linescratch from '../assets/linescratch.webp'

function Home() {

  return (
    <div className='w-full h-screen flex overflow-hidden fixed scroll-smooth'>

      <Helmet>
        <title>Jenish Soni | AI Engineer & Full Stack Developer</title>
        <meta
          name="description"
          content="Explore Jenish Soni's professional portfolio showcasing expertise in AI Engineering, Machine Learning, and MERN Stack Development."
        />
        <meta
          name="keywords"
          content="Jenish Soni, AI Engineer, Full Stack Developer, MERN Stack, Portfolio, Machine Learning, Deep Learning, React, Web Developer"
        />
        <meta name="author" content="Jenish Soni" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className='flex w-full max-md:flex-col'>
        <div className='sticky top-0'>
          <Navbar />
        </div>

        <main className='main-right-container flex-1 flex-col h-screen w-full overflow-y-auto pl-[20px] pr-[20px] pb-[20px]'>
          {/* Hero section */}
          <section id='hero' className='min-h-screen flex flex-col'>
            <div className='mb-[50px] max-md:mb-[0px] max-2xl:mb-[40px]'>
              <h1 className='pt-[70px] text-[25px] max-md:pt-[30px] AD-font'>
                Welcome to my portfolio
                <img className='h-auto w-[150px]' src={underline} alt="Stylish underline graphic" />
              </h1>
            </div>

            <div className='flex w-full items-center justify-between max-md:flex-col-reverse max-lg:gap-y-[30px] max-lg:gap-x-[40px] max-lg:items-start max-md:items-center max-md:justify-center'>
              <motion.div
                whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                transition={{ duration: 0.7 }}
                className='flex flex-col w-[700px] gap-y-[50px] max-lg:w-[500px] max-md:gap-y-[30px] max-md:w-full max-2xl:gap-y-[30px]'>
                <h1 className='flex gap-x-[10px] text-[50px] max-lg:text-[35px] AD-font max-sm:text-[30px] max-2xl:text-[40px]'><p>Hi, I'm</p>
                  <Typewriter
                    words={["JENISH SONI 👋", "AI Engineer", "Web Developer", "Tech Enthusiast"]}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </h1>

                <p className='text-justify max-lg:text-[15px] AD-font'>
                  Hey there! I’m an AI Engineer and Full Stack Developer who’s super passionate about building smart systems and sleek, responsive web apps. <br /> <br />

                  I love blending AI with modern web tech to create solutions that are not just powerful, but also practical and user-friendly. With hands-on experience in machine learning, deep learning, and the MERN stack, I enjoy turning complex data into something useful and engaging. <br /><br />

                  Let’s connect, create, and bring cool ideas to life!
                </p>

                <div className='flex gap-x-[30px] items-center'>
                  <a href="./jenishsoniresume-1.pdf" target="_blank" rel="noopener noreferrer">
                    <button className='hover:text-shadow-lg/30 hover:shadow-[inset_-12px_-8px_50px_#46464620]  hover:duration-500 flex items-center cursor-pointer AD-font border-t-[2px] border-l-[2px] border-r-[2px] border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[20px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[12px] max-sm:rounded-[10px] max-2xl:px-[25px] max-2xl:py-[12px]'>
                      <p>Download CV</p>
                      <Lottie className='h-[40px] max-sm:h-[25px] max-2xl:h-[30px]' animationData={download} loop={true}></Lottie>
                    </button>
                  </a>

                  <Link to={'/underconstruction'}>
                    <button className='flex items-center w-fit cursor-pointer relative text-[18px] AD-font'>
                      <p className='relative max-sm:text-[12px]'>View my work
                        <img className='absolute w-[70px]' src={linescratch} alt="" />
                      </p>
                      <Lottie className='h-[50px] max-sm:h-[40px] ' animationData={rightarrow} loop={true}></Lottie>
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* <div>
                <OrbitingCircles>
                <File />
                <Settings />
                <File />
              </OrbitingCircles>
              <OrbitingCircles radius={100} reverse>
                <File />
                <Settings />
                <File />
                <Search />
              </OrbitingCircles>

              </div> */}

            </div>

            {/* Divider section line */}
            <Underline />
          </section>

          {/* About section */}
          <section id='about'>
            <About />
            <Underline />
          </section>

          {/* Education */}
          <section id='education'>
            <Education />
            <Underline />
          </section>

          <section id='projects'>
            <Projects />
            <Underline />
          </section>

          <section id='contact'>
            <Contact />
            <Underline />
          </section>

          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Home