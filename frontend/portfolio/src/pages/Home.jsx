import React, { useEffect, useRef, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import underline from '../assets/underline.png'
import myphoto from '../assets/myphoto.png'
import Underline from '../components/Underline'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import rightarrow from '../assets/right-arrow.json'
import animatedcircle from '../assets/musicmod.json'
import musicFile from "../assets/music.mp3";
// import Lottie from 'lottie-react'
import musiccircle from '../assets/musiccircle.json'
import pc from '../assets/pc.json'
import download from '../assets/download.json'

function Home() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((e) => console.log("Autoplay blocked:", e));
        setHasInteracted(true);
      }
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div className='w-full h-screen flex overflow-hidden fixed'>

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
            <div className='mb-[50px] max-md:mb-[0px]'>
              <h1 className='pt-[70px] text-[25px] max-md:pt-[30px] AD-font'>
                Welcome to my portfolio
                <img className='h-auto w-[150px]' src={underline} alt="Stylish underline graphic" />
              </h1>
            </div>

            <div className='flex flex-1 w-full items-center justify-between max-md:flex-col-reverse max-lg:gap-y-[30px] max-lg:gap-x-[40px] max-lg:items-start max-md:items-center max-md:justify-center'>
              <div className='flex flex-col w-[700px] gap-y-[50px] max-lg:w-[500px] max-md:gap-y-[30px] max-md:w-full'>
                {/* <h1 className='text-[50px] max-lg:text-[35px] AD-font'>Hi, I'm JENISH SONI 👋</h1> */}
                <h1 className='flex gap-x-[10px] text-[50px] max-lg:text-[35px] AD-font max-sm:text-[30px]'><p>Hi, I'm</p>
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
                  An enthusiastic AI Engineer and Full Stack Developer, passionate about building intelligent systems and dynamic web applications. <br /> <br />

                  I combine the power of artificial intelligence with robust web technologies to deliver scalable and impactful solutions.
                  With a strong foundation in Machine Learning, Deep Learning, and MERN Stack Development, I aim to bridge the gap between data-driven intelligence and user-centric design. <br /><br />

                  Let's innovate, build, and create the future together.
                </p>

                <div className='flex gap-x-[30px] items-center'>
                  <a href="./jenishsoniresume-1.pdf" target="_blank" rel="noopener noreferrer">
                    <button className='flex items-center cursor-pointer AD-font border-t-[2px] border-l-[2px] border-r-[2px] border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[20px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[12px] max-sm:rounded-[10px]'>
                      <p>Download CV</p>
                      <Lottie className='h-[40px] max-sm:h-[25px]' animationData={download} loop={true}></Lottie>
                    </button>
                  </a>

                  <Link to={'/underconstruction'}>
                    <button className='flex items-center w-fit cursor-pointer relative text-[18px] AD-font'>
                      <p className='max-sm:text-[12px]'>View my work</p>
                      <Lottie className='h-[50px] max-sm:h-[40px]' animationData={rightarrow} loop={true}></Lottie>
                    </button>
                  </Link>
                </div>
              </div>

              <div className='relative flex flex-col items-center '>
                {/* <img className='h-[400px] w-auto object-contain' src={myphoto} alt="Portrait of Jenish Soni" /> */}
                <Lottie animationData={musiccircle} loop={true}></Lottie>
                {/* <Lottie className='absolute top-[150px] h-[200px]' animationData={pc} loop={true}></Lottie> */}

                {/* <audio ref={audioRef} src={musicFile} loop preload="auto" />
                  <button
                    onClick={togglePlay}
                    className='absolute bottom-[170px] left-[230px] border-[1px] border-black p-[12px] w-fit rounded-full koulen-font text-[20px] mb-[15px]'
                  >
                    {isPlaying ? <TbPlayerPauseFilled /> : <PiPlayFill />}
                    <Lottie className='absolute w-[200px] left-[-75px] bottom-[100px]' animationData={musicstrip} loop={true}></Lottie>
                    {/* <Lottie className='absolute top-[-200px]' animationData={musicnotes} loop={true}></Lottie> */}
                {/* <Lottie className='absolute top-[-200px] left-[-100px]' animationData={musicnotes} loop={true}></Lottie> */}
                {/*</button> */}
              </div>
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

          {/* <Construction /> */}
        </main>
      </div>
    </div>
  )
}

export default Home