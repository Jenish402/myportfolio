import React from 'react'
import Navbar from '../components/Navbar'
import underline from '../assets/underline.png'
import myphoto from '../assets/myphoto.png'
import Underline from '../components/Underline'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-full h-screen flex overflow-hidden fixed'>
      <div className='flex w-full max-md:flex-col'>
        
        <div className='sticky top-0'>
          <Navbar />
        </div>

        <div className='main-right-container flex-1 flex-col h-screen w-full overflow-y-auto pl-[20px] pr-[20px] pb-[20px]'>
          {/* Hero section */}
          <section className='min-h-screen flex flex-col'>
            <div className='mb-[50px] max-md:mb-[0px]'>
              <h1 className='pt-[70px] text-[25px] max-md:pt-[30px]'>
                Welcome to my portfolio
                <img className='h-auto w-[150px]' src={underline} alt="" />
              </h1>
            </div>

            <div className='flex flex-1 w-full items-center justify-between max-md:flex-col-reverse max-lg:gap-y-[30px] max-lg:gap-x-[40px] max-lg:items-start max-md:items-center'>
              <div className='flex flex-col w-[700px] gap-y-[50px] max-lg:w-[500px] max-md:gap-y-[30px] max-md:w-full'>
                <h1 className='text-[50px] max-lg:text-[35px] AD-font'>Hi, I'm JENISH SONI 👋</h1>
                <p className='text-justify max-lg:text-[15px] AD-font'>
                  An enthusiastic AI Engineer and Full Stack Developer, passionate about building intelligent systems and dynamic web applications. <br /> <br />

                  I combine the power of artificial intelligence with robust web technologies to deliver scalable and impactful solutions.
                  With a strong foundation in Machine Learning, Deep Learning, and MERN Stack Development, I aim to bridge the gap between data-driven intelligence and user-centric design. <br /><br />

                  Let's innovate, build, and create the future together.
                </p>

                <div className='flex gap-x-[30px] items-center'>
                  <button className='AD-font border-t-[2px] border-l-[2px] border-r-[2px] border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[20px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[15px] max-sm:rounded-[10px]'>
                    Download CV
                  </button>

                  <button className='text-[18px] AD-font'>View my work </button>
                </div>
              </div>

              <div>
                <img className='h-[400px] w-auto object-contain' src={myphoto} alt="" />
              </div>
            </div>
            
            {/* Divider section line */}
            <Underline />
          </section>

          {/* About section */}
          <About />

          {/* Divider section line */}
          <Underline />

          {/* Education */}
          <Education />

          {/* Divider section line */}
          <Underline />

          <Projects />

          {/* Divider section line */}
          <Underline />

          <Contact />

          {/* Divider section line */}
          <Underline />

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home