import React, { useRef, useState } from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.webp'
import linkedin from '../assets/linkedin.svg'

function Footer() {

    // Initialize form data state
    const [formData, setFormData] = useState({
        email: ''
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
            form.action = 'https://script.google.com/macros/s/AKfycbzU4sCohn7HWVtw7a6DGTLTXMEf0DAcnEOX4ZSa649RcBJR84Kvum0yM7trjxjg5wC6/exec';
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
                    email: ''
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
        <footer className='flex flex-col w-full gap-y-[30px] mb-[80px]' aria-label="Site Footer">
            {/* Hidden iframe for form submission */}
            <iframe
                ref={iframeRef}
                name="hidden-iframe"
                style={{ display: 'none' }}
                title="Hidden iframe for form submission"
            ></iframe>

            <section className='flex items-start justify-between w-full max-sm:flex-col max-sm:gap-y-[20px]'>
                <div className='flex flex-col' aria-label="Newsletter Signup">
                    <h2 className='text-[40px] koulen-font'>keep up with me</h2>
                    <div className='flex '>
                        <form onSubmit={handleSubmit} className='flex'>
                            <input
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='outline-none AD-font w-[500px] bg-transperent border-[2px] border-black text-[20px] p-[10px] rounded-tl-[15px] rounded-bl-[15px] max-lg:w-[300px] max-sm:w-[180px] max-2xl:w-[400px]' type="email" placeholder='E-mail' aria-label="Email address" />
                            <button type='submit' className='koulen-font bg-[#D9D981] text-[25px] px-[40px] border-[2px] rounded-tr-[15px] rounded-br-[15px]'>send</button>
                        </form>
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