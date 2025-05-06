import React, { useRef, useState } from 'react'
import textline from '../assets/textline.png'
import { FaRegFolderClosed, FaRegClock } from "react-icons/fa6";
import linescratch from '../assets/linescratch.png'
import projectimage from '../assets/projectimage.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
    // Create separate refs for each scrollable section
    const aiSkillsRef = useRef(null);
    const webSkillsRef = useRef(null);

    // Debug logging for ref
    React.useEffect(() => {
        if (aiSkillsRef.current) {
            console.log('AI Skills Ref mounted successfully');
        }
        if (webSkillsRef.current) {
            console.log('Web Skills Ref mounted successfully');
        }
    }, []);

    const scroll = (scrollRef, direction) => {
        console.log('Scroll triggered', { ref: scrollRef, direction });
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            console.warn('Scroll ref is null, cannot scroll');
        }
    };

    return (
        <section className='flex flex-col w-full gap-y-[40px]' aria-label="Projects Section">
            <header className='flex w-full items-center justify-between'>
                <div className='relative flex justify-between'>
                    <motion.h1 
                    whileInView={{opacity: [0, 1], x: [-50, 0] }}
                    transition={{ duration: 0.7 }}
                    className='relative text-[50px] max-sm:text-[40px] koulen-font'>PROJECTS
                        <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[10px] max-sm:w-[100px]' src={textline} alt="" />
                    </motion.h1>
                </div>
                <div className='flex items-center cursor-pointer' >
                    <Link to='/underconstruction' className='AD-font max-sm:text-[15px]'>View more</Link>
                    <Link to='/underconstruction'><IoIosArrowRoundForward className='text-[50px] max-sm:h-[30px]' /></Link>
                </div>

            </header>
            <section className='flex flex-col gap-y-[30px] w-full' aria-labelledby="ai-ml-projects-title">

                {/* First Carousel - AI/ML Projects */}
                <motion.div 
                whileInView={{opacity: [0, 1], x: [-100, 0] }}
                transition={{ duration: 0.7 }}
                className='flex items-center'>
                    <button
                        onClick={() => scroll(aiSkillsRef, 'left')}
                        className='flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 rounded-full h-fit'
                        aria-label="Scroll left AI projects"
                    >
                        <IoIosArrowBack className='text-[30px]' />
                    </button>
                    <div className='flex gap-x-[20px] w-full overflow-x-auto' ref={aiSkillsRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => scroll(aiSkillsRef, 'right')}
                        className='flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 rounded-full h-fit'
                        aria-label="Scroll right AI projects"
                    >
                        <IoIosArrowForward className='text-[30px]' />
                    </button>
                </motion.div>

                {/* Second Carousel - Web Development Projects */}
                <motion.div 
                whileInView={{opacity: [0, 1], x: [200, 0] }}
                transition={{ duration: 0.7 }}
                className='flex items-center'>
                    <button
                        onClick={() => scroll(webSkillsRef, 'left')}
                        className='flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 rounded-full h-fit'
                        aria-label="Scroll left Web projects"
                    >
                        <IoIosArrowBack className='text-[30px]' />
                    </button>
                    <div className='flex gap-x-[20px] w-full overflow-x-auto' ref={webSkillsRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>

                        <div className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[200px]'>
                            <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                <div className='flex items-center max-sm:gap-x-[5px]'>
                                    <FaRegFolderClosed />
                                    <p className='max-sm:text-[12px] AD-font'>AI/ML</p>
                                </div>
                                <div>
                                    <img className='max-md:w-[40px] max-sm:hidden' src={linescratch} alt="" />
                                </div>
                                <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                    <FaRegClock />
                                    <p className='max-sm:text-[12px] AD-font'>september 10, 2024</p>
                                </div>
                            </div>

                            <div>
                                <img className='rounded-tl-[20px] rounded-tr-[20px] border-b-[5px] border-black' src={projectimage} alt="" />
                            </div>
                            <div className='p-[10px]'>
                                <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>ANOMALY DETECTION</h3>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => scroll(webSkillsRef, 'right')}
                        className='flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 rounded-full h-fit'
                        aria-label="Scroll right Web projects"
                    >
                        <IoIosArrowForward className='text-[30px]' />
                    </button>
                </motion.div>

            </section>
        </section>
    )
}

export default Projects