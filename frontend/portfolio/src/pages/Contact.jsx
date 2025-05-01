import React from 'react'
import pinlogo from '../assets/pinlogo.png'
import contactimage from '../assets/contactimage.png'
import taplogo from '../assets/taplogo.png'
import textline from '../assets/textline.png'

function Contact() {
    return (

        <div className='flex flex-col gap-y-[50px]'>
            <div className='relative flex justify-between'>
                <h1 className='relative text-[50px] max-sm:text-[60px] koulen-font'>CONTACT ME
                    <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[20px]' src={textline} alt="" />
                </h1>
            </div>

            <div className='education flex flex-col w-full p-[30px] border-[2px] border-black rounded-[50px] border-b-[20px] max-md:p-[15px]'>
                <div className='relative mb-[50px]'>
                    <h2 className='text-[40px] koulen-font'>SAY HELLO!</h2>
                    <img className='absolute top-[-40px] right-[-30px] h-[130px] max-lg:h-[80px]' src={pinlogo} alt="" />
                </div>
                <div className='flex gap-x-[20px] justify-between items-center max-md:flex-col-reverse max-md:gap-y-[50px]'>
                    <div className='w-[600px] max-lg:w-[400px] max-md:w-full'>
                        <form action="" className='flex flex-col gap-y-[20px]'>
                            <input className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' type="text" placeholder='Name' />
                            <input className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' type="text" placeholder='E-mail' />
                            <input className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' type="text" placeholder='Website' />
                            <textarea className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] AD-font' placeholder='Message' name="textarea" id=""></textarea>
                            <button className='koulen-font text-[25px] border-t-[2px] border-l-[2px] bg-[#D9D981] border-r-[2px] border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[20px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[20px] max-sm:rounded-[10px]'>
                                send
                            </button>
                        </form>
                    </div>
                    <div className='relative'>
                        <img className='h-fit w-[500px] border-[4px] border-black rounded-[40px] object-contain' src={contactimage} alt="" />
                        <div>
                            <img className='w-full absolute top-[-30px] items-center h-[70px]' src={taplogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact