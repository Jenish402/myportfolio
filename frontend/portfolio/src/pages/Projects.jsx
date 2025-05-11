import React, { useRef, useState } from 'react'
import textline from '../assets/textline.png'
import { FaRegFolderClosed, FaRegClock } from "react-icons/fa6";
import linescratch from '../assets/linescratch.webp'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import glintphoto from '../assets/glintphoto.webp'
import shreejiphoto from '../assets/shreejiphoto.webp'
import awsphoto from '../assets/awsphoto.webp'
import astraphoto from '../assets/astraphoto.webp'
import grocerygo from '../assets/grocerygo.webp'
import { IoIosArrowDropright } from "react-icons/io";
import Box from '../components/Box'
import { IoMdCloseCircle } from "react-icons/io";

// Project data for each project
const projectsData = [
    {
        id: "glint",
        title: "glint",
        category: "Web",
        date: "August, 2024",
        thumbnail: glintphoto,
        images: [glintphoto],
        description: "glint4u is a service-based tech startup offering web development, design, and scalable digital solutions. I designed and developed the official website glint4u.tech, showcasing the company's services, team, and portfolio. The site reflects a modern, responsive, and user-friendly interface aimed at attracting clients and building an online presence.",
        technologies: ["Next.js", "Tailwind CSS", "Node.js", "Google sheet API"],
        projectLink: "https://glint4u.tech"
    },
    {
        id: "shreeji",
        title: "Shreeji Education",
        category: "Web",
        date: "March, 2023",
        thumbnail: shreejiphoto,
        images: [shreejiphoto],
        description: "An educational platform designed for Shreeji Education, featuring course offerings, instructor profiles, and interactive learning resources.",
        technologies: ["React.js", "Tailwind CSS", "Flask", "Gooogle sheet API"],
        projectLink: "https://shriji-education-ten.vercel.app/"
    },
    {
        id: "aws",
        title: "AWS Cloud CLUB SOU",
        category: "Web",
        date: "June, 2023",
        thumbnail: awsphoto,
        images: [awsphoto],
        description: "A website for the AWS Cloud Club at SOU, providing resources, event information, and learning materials for cloud computing enthusiasts.",
        technologies: ["React.js", "Tailwind CSS", "FastAPI", "Google sheet API", "Supabase"],
        projectLink: "https://awscc.vercel.app/"
    },
    {
        id: "astra",
        title: "Project Astra",
        category: "Web",
        date: "January, 2025",
        thumbnail: astraphoto,
        images: [astraphoto],
        description: "An astronomy visualization project that renders real-time celestial data in an interactive web interface.",
        technologies: ["Next.js", "Tailwind CSS", "Shopify", "Google sheet API"],
        projectLink: "https://www.projectastrastore.com/"
    },
    {
        id: "grocerygo",
        title: "GroceryGo",
        category: "Web",
        date: "March, 2025",
        thumbnail: grocerygo,
        images: [grocerygo],
        description: "An astronomy visualization project that renders real-time celestial data in an interactive web interface.",
        technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
        projectLink: "https://grocery-go-rho.vercel.app/"
    }
];

function Projects() {
    // Create separate refs for each scrollable section
    const projectsRef = useRef(null);
    
    // State for project popup
    const [showPopUp, setShowPopup] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    // Debug logging for ref
    React.useEffect(() => {
        if (projectsRef.current) {
            console.log('Projects Ref mounted successfully');
        }
    }, []);

    const scroll = (scrollRef, direction) => {
        console.log('Scroll triggered', { ref: scrollRef, direction });
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            console.warn('Scroll ref is null, cannot scroll');
        }
    };

    // Handle opening project popup
    const openPopup = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        setCurrentProject(project);
        setShowPopup(true);
    };
    
    // Handle closing project popup
    const closePopup = () => {
        setShowPopup(false);
        setCurrentProject(null);
    };

    return (
        <section className='flex flex-col w-full gap-y-[40px]' aria-label="Projects Section">
            <header className='flex w-full items-center justify-between'>
                <div className='relative flex justify-between'>
                    <motion.h1
                        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                        transition={{ duration: 0.7 }}
                        className='relative text-[50px] max-sm:text-[40px] koulen-font'>PROJECTS
                        <img className='absolute bottom-[5px] left-[-5px] max-sm:bottom-[10px] max-sm:w-[100px]' loading='lazy' src={textline} alt="" />
                    </motion.h1>
                </div>
                <div className='flex items-center cursor-pointer' >
                    <Link to='/underconstruction' className='AD-font max-sm:text-[15px]'>View more</Link>
                    <Link to='/underconstruction'><IoIosArrowRoundForward className='text-[50px] max-sm:h-[30px]' /></Link>
                </div>
            </header>

            <section className='relative flex flex-col gap-y-[30px] w-full' aria-labelledby="projects-carousel">
                {/* Project details popup */}
                {showPopUp && currentProject && (
                    <Box 
                        closeIcon={<IoMdCloseCircle />} 
                        handleClick={closePopup} 
                        projectData={currentProject} 
                    />
                )}

                {/* Projects Carousel */}
                <div className='flex items-center'>
                    <button
                        onClick={() => scroll(projectsRef, 'left')}
                        className='flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 rounded-full h-fit'
                        aria-label="Scroll left through projects"
                    >
                        <IoIosArrowBack className='text-[30px]' />
                    </button>
                    
                    <div 
                        className='flex gap-x-[20px] w-full overflow-x-auto' 
                        ref={projectsRef} 
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projectsData.map((project) => (
                            <div 
                                key={project.id}
                                className='flex flex-col min-w-[350px] border-[3px] border-black rounded-[20px] border-b-[15px] max-md:min-w-[300px] max-md:h-fit max-sm:min-w-[250px]'
                            >
                                <div className='flex items-center justify-between px-[20px] py-[10px] max-sm:px-[10px]'>
                                    <div className='flex items-center max-sm:gap-x-[5px]'>
                                        <FaRegFolderClosed />
                                        <p className='max-sm:text-[12px] AD-font'>{project.category}</p>
                                    </div>
                                    <div>
                                        <img className='w-[70px] max-md:w-[40px] max-sm:hidden' loading='lazy' src={linescratch} alt="Decorative line" />
                                    </div>
                                    <div className='flex items-center gap-x-[10px] max-sm:gap-x-[5px]'>
                                        <FaRegClock />
                                        <p className='max-sm:text-[12px] AD-font'>{project.date}</p>
                                    </div>
                                </div>

                                <div>
                                    <img 
                                        className='cursor-pointer rounded-tl-[20px] h-[350px] object-cover rounded-tr-[20px] border-b-[5px] border-black' 
                                        src={project.thumbnail} 
                                        alt={project.title} 
                                        loading='lazy'
                                        onClick={() => openPopup(project.id)}
                                    />
                                </div>
                                
                                <div className='p-[10px] flex items-center justify-between'>
                                    <h3 className='text-[25px] max-sm:text-[20px] koulen-font'>{project.title}</h3>
                                    <IoIosArrowDropright 
                                        onClick={() => openPopup(project.id)} 
                                        className='text-[30px] cursor-pointer hover:text-red-800' 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button
                        onClick={() => scroll(projectsRef, 'right')}
                        className='flex-shrink-0 z-10 cursor-pointer hover:bg-gray-100 rounded-full h-fit'
                        aria-label="Scroll right through projects"
                    >
                        <IoIosArrowForward className='text-[30px]' />
                    </button>
                </div>
            </section>
        </section>
    )
}

export default Projects