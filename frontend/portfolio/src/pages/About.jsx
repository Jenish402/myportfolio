import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import pythonlogo from '../assets/pythonlogo.webp'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import textline from '../assets/textline.png'
import dottedline from '../assets/dottedline.webp'
import myphoto from '../assets/myPhoto.webp'
import pinlogo from '../assets/pinlogo.webp'
import tenserflowlogo from '../assets/tenserflowlogo.webp'
import numpylogo from '../assets/numpylogo.webp'
import keraslogo from '../assets/keraslogo.webp'
import pytorchlogo from '../assets/pytorchlogo.webp'
import scikitlearnlogo from '../assets/scikitlearnlogo.webp'
import pandaslogo from '../assets/pandaslogo.webp'
import reactlogo from '../assets/reactlogo.webp'
import nodejslogo from '../assets/nodejslogo.webp'
import mongodblogo from '../assets/mongodblogo.webp'
import expresslogo from '../assets/expressjslogo.svg'
import htmlcsslogo from '../assets/htmlcsslogo.webp'
import tailwindcsslogo from '../assets/tailwindcsslogo.webp'
import nextjslogo from '../assets/nextjslogo.webp'
import { motion } from "framer-motion";

function About() {
    const aiSkillsRef = useRef(null);
    const webSkillsRef = useRef(null);

    const scroll = (scrollRef, direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className='flex flex-col w-full min-h-screen mt-0 pb-0'>

            <Helmet>
                <title>About | AI Engineer & Full Stack Developer</title>
                <meta name="description" content="Discover more about an AI Engineer and Full Stack Developer specializing in Machine Learning, Python, and MERN stack technologies." />
                <meta name="keywords" content="AI Engineer, Full Stack Developer, Machine Learning, MERN Stack, React, Python, Web Development" />
                <meta name="author" content="Your Name" />
            </Helmet>

            <section className='flex flex-col gap-y-[30px] w-full'>
                <header className='relative'>
                    <motion.h1 
                    whileInView={{opacity: [0, 1], x: [-50, 0] }}
                    transition={{ duration: 0.7 }}
                    className='relative text-[50px] max-sm:text-[40px] koulen-font'>ABOUT
                        <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[10px] max-sm:w-[100px]' loading='lazy' src={textline} alt="" />
                    </motion.h1>
                </header>

                <motion.article  
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                transition={{ duration: 0.7 }}
                className='relative about flex flex-col gap-y-[50px] p-[20px] w-full rounded-[60px] border-l-[2px] border-t-[2px] border-r-[2px] border-b-[20px] max-sm:border-[1px] max-sm:border-b-[10px]'>
                    <img className='absolute right-0 top-0 max-lg:h-[80px] max-2xl:h-[100px]' loading='lazy' src={pinlogo} alt="Pin icon decoration" />
                    <div className='flex justify-between gap-x-[30px] w-full max-sm:flex-col'>
                        <div className='bg-[#C9C5B5] h-[400px] rounded-[50px] flex items-center justify-center w-fit border-t-[2px] border-l-[2px] border-r-[2px] border-b-[20px] max-sm:border-b-[10px] max-sm:p-[0px]'>
                            <img className='h-full w-full object-cover rounded-[30px] max-2xl:w-[400px] max-sm:w-[330px]' loading='lazy' src={myphoto} alt="Profile photo of the developer" />
                        </div>
                        <div className='w-[800px] max-md:w-full max-sm:mt-[20px]'>
                            <h1 className='text-[50px] max-lg:text-[35px] max-sm:text-[30px] koulen-font'>WHO AM I ?</h1>
                            <img className='mt-[20px] mb-[20px] max-lg:mt-[10px] max-lg:mb-[10px]' loading='lazy' src={dottedline} alt="Dotted line separator" />
                            <div className='text-justify AD-font'>
                                <div>
                                    I am a dedicated AI Engineer and Full Stack Developer with a passion for solving real-world problems through technology. <br /> <br />

                                    I specialize in crafting intelligent solutions powered by AI and designing high-performance web applications.
                                    My expertise spans across Python, Machine Learning, Deep Learning frameworks like TensorFlow and PyTorch, and the complete MERN stack (MongoDB, Express.js, React.js, Node.js) for web development. <br /><br />
                                </div>

                                <div className='max-lg:hidden'>
                                    Over time, I have worked on projects ranging from predictive modeling to building scalable web platforms, always focusing on delivering reliable, efficient, and innovative solutions. <br /><br />

                                    Apart from coding, I have a deep interest in continuous learning — staying updated with the latest advancements in AI, Software Engineering, and Technology trends. <br /><br />

                                    When I am not coding, you'll find me exploring new ideas, reading about AI innovations, or collaborating with like-minded people to bring new visions to life.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='mb-[50px] hidden max-lg:block AD-font'>
                            Over time, I have worked on projects ranging from predictive modeling to building scalable web platforms, always focusing on delivering reliable, efficient, and innovative solutions. <br /><br />

                            Apart from coding, I have a deep interest in continuous learning — staying updated with the latest advancements in AI, Software Engineering, and Technology trends. <br /><br />

                            When I am not coding, you'll find me exploring new ideas, reading about AI innovations, or collaborating with like-minded people to bring new visions to life.
                        </div>
                        <ul className='flex flex-col gap-y-[10px] text-[20px] max-lg:text-[18px]'>
                            <li><span className='koulen-font'>Location</span> : <span className='AD-font'>Ahmedabad, India</span></li>
                            <li><span className='koulen-font'>Languages</span> : <span className='AD-font'>English, Gujarati, Hindi</span></li>
                            <li className='mb-[30px]'><span className='koulen-font'>Interests</span> : <span className='AD-font'>Artificial Intelligence, Web Development, Startups, Technology Research</span></li>
                            <li className='text-[30px] text-[#F16363] max-lg:text-[20px] koulen-font'>&ldquo;"Every line of code I write is a step towards building a smarter, more connected world."</li>
                        </ul>
                    </div>
                </motion.article>
            </section>

            <section className='flex flex-col w-full mt-[100px] gap-y-[30px]'>
                <div>
                    <motion.h1 
                    whileInView={{opacity: [0, 1], x: [-50, 0] }}
                    transition={{ duration: 0.7 }}
                    className='relative text-[50px] max-sm:text-[40px] koulen-font'>SKILLS
                        <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[10px] max-sm:w-[100px]' loading='lazy' src={textline} alt="" />
                    </motion.h1>
                </div>

                <div className='flex flex-col w-full gap-y-[25px]'>
                    <div><h3 className='text-[25px] koulen-font'>AI & ML Skills:</h3></div>
                    <div className='flex flex-col gap-y-[30px] w-full'>
                        {/* AI & ML Skills Carousel */}
                        <div className='flex items-center w-full'>
                            <button
                                onClick={() => scroll(aiSkillsRef, 'left')}
                                className='flex-shrink-0  cursor-pointer hover:bg-gray-100 rounded-full'
                            >
                                <IoIosArrowBack className='text-[30px]' />
                            </button>

                            <div className='w-full overflow-hidden'>
                                <ul
                                    ref={aiSkillsRef}
                                    className='flex items-center justify-between gap-x-[20px] overflow-x-auto w-full  scrollbar-hide'
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    <li
                                    className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Python</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={pythonlogo} alt="Python logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>TensorFlow</p>
                                        <div className='border-t-[7px] rounded-[30px]'>
                                            <img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={tenserflowlogo} alt="Tenserflow logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>PyTorch</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain py-[20px] px-[30px] max-sm:h-[100px]' loading='lazy' src={pytorchlogo} alt="Pytorch logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Scikit-Learn</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={scikitlearnlogo} alt="Scikit Learn logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Pandas</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={pandaslogo} alt="Pandas logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>NumPy</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={numpylogo} alt="Numpy logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Keras</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='rounded-[40px] h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={keraslogo} alt="Keras logo" /></div>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => scroll(aiSkillsRef, 'right')}
                                className='flex-shrink-0 cursor-pointer hover:bg-gray-100 rounded-full'
                            >
                                <IoIosArrowForward className='text-[30px]' />
                            </button>
                        </div>

                        {/* Web Development Skills */}
                        <div><h3 className='text-[25px] koulen-font'>Web Development Skills:</h3></div>
                        <div className='flex items-center justify-between w-full'>
                            <button
                                onClick={() => scroll(webSkillsRef, 'left')}
                                className='flex-shrink-0  cursor-pointer hover:bg-gray-100 rounded-full'
                            >
                                <IoIosArrowBack className='text-[30px]' />
                            </button>

                            <div className='w-full overflow-hidden'>
                                <ul
                                    ref={webSkillsRef}
                                    className='flex items-center justify-between gap-x-[20px] overflow-x-auto w-full scrollbar-hide overflow-y-hidden'
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    <li 
                                    className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>React</p>
                                        <div className='border-t-[7px] rounded-[30px]'><motion.img 
                                        animate={{ rotate: 360 }}
                                        transition={{
                                          repeat: Infinity,
                                          duration: 5,
                                          ease: "linear"
                                        }}
                                        className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' src={reactlogo} alt="React logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Node.js</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={nodejslogo} alt="Node.js logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>MongoDB</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={mongodblogo} alt="MongoDB logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Express</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={expresslogo} alt="Express logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>HTML/CSS</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={htmlcsslogo} alt="HTML/CSS logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Tailwind</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={tailwindcsslogo} alt="TailwindCSS logo" /></div>
                                    </li>

                                    <li className='flex flex-col items-center border-[2px] border-b-[10px] rounded-[50px] max-w-[150px] max-sm:min-w-[100px] max-sm:rounded-[20px] flex-shrink-0'>
                                        <p className='text-[20px] pt-[10px] pb-[10px] max-sm:text-[17px] AD-font'>Next.js</p>
                                        <div className='border-t-[7px] rounded-[30px]'><img className='h-[150px] w-auto object-contain p-[20px] max-sm:h-[100px]' loading='lazy' src={nextjslogo} alt="Next.js logo" /></div>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => scroll(webSkillsRef, 'right')}
                                className='flex-shrink-0 hover:text-white cursor-pointer hover:bg-gray-100 rounded-full'
                            >
                                <IoIosArrowForward className='text-[30px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}
export default About