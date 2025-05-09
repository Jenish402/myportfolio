import React, { useState, useRef } from 'react'
import pinlogo from '../assets/pinlogo.webp'
import contactimage from '../assets/contactimage.webp'
import taplogo from '../assets/taplogo.webp'
import textline from '../assets/textline.png'
import { motion } from "framer-motion";

function Contact() {
    // Initialize form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });
    
    // Create a ref for the hidden iframe
    const iframeRef = useRef(null);
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
        
        try {
            // Create a new form element
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://script.google.com/macros/s/AKfycbwPCvKRsXL-nAUW0KwOWXmzy89NeLW-GQ8eyFk64m8Xwr34jP5D1uJsUWFIonL9T5XdIA/exec';
            form.target = 'hidden-iframe';
            
            // Add form fields
            Object.entries(formData).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });
            
            // Append form to document
            document.body.appendChild(form);
            
            // Submit the form
            form.submit();
            
            // Remove form
            document.body.removeChild(form);
            
            // Set a timeout to assume success (since we can't easily detect completion in the iframe)
            setTimeout(() => {
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    website: '',
                    message: ''
                });
                
                // Show success message
                alert('Message sent successfully!');
                
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            }, 2000);
            
        } catch (err) {
            console.error('Error:', err);
            alert('Failed to send message. Please try again later.');
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
    };

    return (
        <section className='flex flex-col gap-y-[50px]' aria-labelledby="contact-heading">
            {/* Hidden iframe for form submission */}
            <iframe 
                ref={iframeRef}
                name="hidden-iframe"
                style={{display: 'none'}}
                title="Hidden iframe for form submission"
            ></iframe>
            
            <header className='relative flex justify-between'>
                <motion.h1 
                whileInView={{opacity: [0, 1], x: [-50, 0] }}
                transition={{ duration: 0.7 }}
                className='relative text-[50px] max-sm:text-[40px] koulen-font'>CONTACT ME
                    <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[0px]' src={textline} alt="" />
                </motion.h1>
            </header>

            <motion.section 
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            transition={{ duration: 0.7 }}
            className='education flex flex-col w-full p-[30px] border-[2px] border-black rounded-[50px] border-b-[20px] max-md:p-[15px]' aria-labelledby="say-hello-heading">
                <div className='relative mb-[50px]'>
                    <h2 className='text-[40px] koulen-font'>SAY HELLO!</h2>
                    <img className='absolute top-[-40px] right-[-30px] h-[130px] max-lg:h-[80px] max-2xl:h-[100px]' src={pinlogo} alt="Pin icon beside heading" />
                </div>
                <div className='flex gap-x-[20px] justify-between items-center max-md:flex-col-reverse max-md:gap-y-[50px]'>
                    <div className='w-[600px] max-lg:w-[400px] max-md:w-full max-2xl:w-[400px]'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-y-[20px]' aria-label="Contact form">
                            <input 
                                className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' 
                                type="text" 
                                placeholder='Name' 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' 
                                type="email" 
                                placeholder='E-mail' 
                                name='email' 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' 
                                type="text" 
                                placeholder='Website' 
                                name="website" 
                                value={formData.website}
                                onChange={handleChange} 
                            />
                            <textarea 
                                className='bg-[#C9C5B5] border-[2px] border-black w-full text-[20px] pl-[10px] rounded-[15px] p-[10px] AD-font' 
                                placeholder='Message' 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button 
                                type='submit' 
                                className='cursor-pointer koulen-font text-[25px] border-t-[2px] border-l-[2px] bg-[#D9D981] border-r-[2px] border-b-[10px] rounded-[18px] py-[15px] px-[30px] max-lg:py-[8px] max-lg:px-[15px] max-lg:border-b-[8px] max-md:text-[20px] max-md:border-b-[5px] max-md:border-l-[1px] max-md:border-t-[1px] max-md:border-r-[1px] max-sm:text-[20px] max-sm:rounded-[10px] max-2xl:py-[7px]'
                            >
                                send
                            </button>
                        </form>
                    </div>
                    <div className='relative'>
                        <img className='h-fit w-[500px] border-[4px] border-black rounded-[40px] object-contain' src={contactimage} alt="Contact illustration" />
                        <div>
                            <img className='w-full absolute top-[-30px] items-center h-[70px]' src={taplogo} alt="Decorative tap logo" />
                        </div>
                    </div>
                </div>
            </motion.section>
        </section>
    )
}

export default Contact