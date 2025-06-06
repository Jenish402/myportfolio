import React from 'react'
import { Helmet } from 'react-helmet';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import textline from '../assets/textline.png'
import pinlogo from '../assets/pinlogo.webp'
import Lottie from 'lottie-react';
import graduate from '../assets/graduate.json'
import { motion } from "framer-motion";


function Education() {

    return (
        <section className='relative w-full' aria-labelledby="education-title">

            <Helmet>
                <title>JENISH SONI - AI Engineer | Web Developer</title>
                <meta name="description" content="Explore my academic background including B.Tech, HSC, and SSC with performance details and institutions attended." />
                <meta name="keywords" content="education, academic, background, SSC, HSC, B.Tech, CGPA, Silver Oak University" />
            </Helmet>

            <div className='relative mb-[40px]'>
                <motion.h1
                    whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                    transition={{ duration: 0.7 }}
                    className='relative text-[50px] max-sm:text-[40px] koulen-font'>EDUCATION
                    <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[10px] max-sm:w-[100px]' loading='lazy' src={textline} alt="" />
                </motion.h1>
            </div>
            <div className='relative education  w-full h-[650px] p-[20px] border-[2px] rounded-[50px] border-b-[20px] max-lg:h-[800px]'>
                <img className='absolute right-0 top-0 max-lg:h-[80px] max-2xl:h-[100px]' loading='lazy' src={pinlogo} alt="Pin decoration graphic" />
                <div className=' relative top-[50px] left-[50%] h-[500px] w-[3px] bg-black max-lg:left-[5%] max-lg:h-[650px]'>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute h-[20px] w-[20px] bg-black rounded-full top-[85px] left-[-8.5px] max-lg:top-[120px]'></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute h-[40px] w-[40px] border-[1px] border-black rounded-full top-[74.5px] left-[-18.5px] max-lg:top-[110px]'></motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='absolute h-[20px] w-[20px] bg-black rounded-full top-[210px] left-[-8.5px] max-lg:top-[315px]'></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='absolute h-[40px] w-[40px] border-[1px] border-black rounded-full top-[200px] left-[-18.5px] max-lg:top-[305px]'></motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='absolute h-[20px] w-[20px] bg-black rounded-full bottom-[110px] left-[-8.5px] max-lg:bottom-[120px]'></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='absolute h-[40px] w-[40px] border-[1px] border-black rounded-full bottom-[100px] left-[-18.5px] max-lg:bottom-[110px]'></motion.div>

                    <motion.article
                        whileInView={{ opacity: [0, 1], x: [100, -10] }}
                        transition={{ duration: 0.5 }}
                        className=' flex gap-x-[20px] justify-between p-[10px] absolute top-[20px] right-[-350px] border-[1.5px] border-r-[5px] w-fit h-[150px] rounded-[20px] border-b-[10px] max-lg:left-[50px] max-lg:top-[55px] max-sm:w-[200px] max-sm:left-[60px] eduBox max-sm:gap-x-0'><BiSolidLeftArrow className='absolute left-[-27px] top-[55px]' size={35} />


                        <div className='flex flex-col'>
                            <div className='mb-[15px]'>
                                <div className='flex gap-x-[10px]'>
                                    <h4 className='relative text-[18px] AD-font max-sm:text-[15px]'>SSC</h4>
                                    <Lottie className='h-[25px]' animationData={graduate} loop={true}></Lottie>
                                </div>
                                <p className='hidden max-md:block AD-font max-sm:text-[13px]'>(2018-2019)</p>
                            </div>
                            <h3 className='text-[22px] AD-font max-sm:text-[18px]'>M.T High School</h3>
                            <p className='AD-font'>Percentage = 76%</p>
                        </div>
                        <div>
                            <p className='max-md:hidden AD-font'>(2018-2019)</p>
                        </div>
                    </motion.article>


                    <motion.article
                        whileInView={{ opacity: [0, 1], x: [-100, 10] }}
                        transition={{ duration: 1 }}
                        className=' flex gap-x-[20px] justify-between p-[10px] absolute top-[150px] left-[-360px] border-[1.5px] border-r-[5px] w-fit h-[150px] rounded-[20px] border-b-[10px] max-lg:left-[50px] max-lg:w-[309px] max-md:w-[230px] max-sm:w-[210px] max-lg:top-[250px] max-sm:left-[40px] eduBox max-sm:gap-x-0'><BiSolidRightArrow className='absolute right-[-27px] top-[55px] max-lg:hidden' size={35} />
                        <BiSolidLeftArrow className='absolute left-[-27px] top-[55px] hidden max-lg:block' size={35} />
                        <div className='flex flex-col'>
                            <div className='mb-[15px]'>
                                <div className='flex gap-x-[10px]'>
                                    <h4 className='relative text-[18px] AD-font max-sm:text-[15px]'>HSC</h4>
                                    <Lottie className='h-[25px]' animationData={graduate} loop={true}></Lottie>
                                </div>
                                <p className='hidden AD-font max-md:block  max-sm:text-[13px]'>(2021-2025)</p>
                            </div>
                            <h3 className='text-[22px] AD-font max-sm:text-[18px]'>BITS Hign School</h3>
                            <p className='AD-font'>Percentage = 76%</p>
                        </div>
                        <div>
                            <p className='max-md:hidden AD-font'>(2020-2021)</p>
                        </div>
                    </motion.article>


                    <motion.article
                        whileInView={{ opacity: [0, 1], x: [100, 0] }}
                        transition={{ duration: 1 }}
                        className=' flex gap-x-[20px] justify-between p-[10px] absolute bottom-[50px] right-[-390px] border-[1.5px] border-r-[5px] w-fit h-[150px] rounded-[20px] border-b-[10px] max-lg:left-[50px] max-lg:bottom-[55px] max-md:h-[180px] max-md:w-[210px] max-md:bottom-[25px] eduBox max-sm:gap-x-0'><BiSolidLeftArrow className='absolute left-[-27px] top-[55px]' size={35} />
                        <div className='flex flex-col w-fit'>
                            <div className='mb-[15px]'>
                                <div className='flex gap-x-[10px]'>
                                    <h4 className='relative text-[18px] AD-font max-sm:text-[15px]'>B.Tech</h4>
                                    <Lottie className='h-[25px]' animationData={graduate} loop={true}></Lottie>
                                </div>
                                <p className='hidden max-md:block AD-font max-sm:text-[13px]'>(2021-2025)</p>
                            </div>
                            <h3 className='text-[22px] AD-font max-sm:text-[18px]'>Silver Oak University</h3>
                            <p className='AD-font'>CGPA = 9.4</p>
                        </div>
                        <div>
                            <p className='max-md:hidden AD-font'>(2021-2025)</p>
                        </div>
                    </motion.article>


                </div>
            </div>
        </section >
    )
}

export default Education