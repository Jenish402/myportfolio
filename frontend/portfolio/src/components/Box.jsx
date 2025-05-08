// import React from 'react';
// import glintphoto from '../assets/glintphoto.png';
// import glintphoto1 from '../assets/glintphoto1.png';
// import glintphoto2 from '../assets/glintphoto2.png';
// import glintphoto3 from '../assets/glintphoto3.png';
// import glintphoto4 from '../assets/glintphoto4.png';
// import { motion } from 'framer-motion';

// const boxData = [

//     {
//         images : [glintphoto, glintphoto1, glintphoto2, glintphoto3, glintphoto4],
//         description : "glint4u is a service-based tech startup offering web development, design, and scalable digital solutions. I designed and developed the official website glint4u.tech, showcasing the company’s services, team, and portfolio. The site reflects a modern, responsive, and user-friendly interface aimed at attracting clients and building an online presence."
//     },

//     {
//         images : [glintphoto, glintphoto1, glintphoto2, glintphoto3, glintphoto4],
//         description : "glint4u is a service-based tech startup offering web development, design, and scalable digital solutions. I designed and developed the official website glint4u.tech, showcasing the company’s services, team, and portfolio. The site reflects a modern, responsive, and user-friendly interface aimed at attracting clients and building an online presence."
//     },

//     {
//         images : [glintphoto, glintphoto1, glintphoto2, glintphoto3, glintphoto4],
//         description : "glint4u is a service-based tech startup offering web development, design, and scalable digital solutions. I designed and developed the official website glint4u.tech, showcasing the company’s services, team, and portfolio. The site reflects a modern, responsive, and user-friendly interface aimed at attracting clients and building an online presence."
//     },

//     {
//         images : [glintphoto, glintphoto1, glintphoto2, glintphoto3, glintphoto4],
//         description : "glint4u is a service-based tech startup offering web development, design, and scalable digital solutions. I designed and developed the official website glint4u.tech, showcasing the company’s services, team, and portfolio. The site reflects a modern, responsive, and user-friendly interface aimed at attracting clients and building an online presence."
//     }
// ]

// function Box({ closeicon, handleClick, animate, images, description }) {
//     return (
//       <motion.div
//         animate={animate}
//         transition={{ type: "spring", stiffness: 100 }}
//         className="...">
        
//         <div onClick={handleClick} className="...">
//           {closeicon}
//         </div>
  
//         <div className="...">
//           <ul className="...">
//             {boxData.map((img, index) => (
//               <li key={index}>
//                 <img src={img} alt={`glint${index}`} className="..." />
//               </li>
//             ))}
//           </ul>
//         </div>
  
//         <div>
//           <p className="...">{boxData.description}</p>
//         </div>
//       </motion.div>
//     );
//   }
  

// export default Box;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Box({ closeIcon, handleClick, projectData = null }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use default data if no project data is provided
  const data = projectData || {
    title: "Glint",
    images: [], // This will be populated with actual images
    description: "glint4u is a service-based tech startup offering web development, design, and scalable digital solutions. I designed and developed the official website glint4u.tech, showcasing the company's services, team, and portfolio. The site reflects a modern, responsive, and user-friendly interface aimed at attracting clients and building an online presence.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    projectLink: "https://glint4u.tech",
    timeline: "August, 2024"
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? data.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === data.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed overflow-y-scroll inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4  max-sm:mt-[130px] max-sm:pt-[250px]">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white w-full overflow-y-scroll max-w-4xl rounded-lg overflow-hidden relative flex flex-col border-4 border-black max-sm:mt-[70px]"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b-2 border-black">
          <h2 className="text-2xl koulen-font">{data.title}</h2>
          <div 
            onClick={handleClick}
            className="text-3xl cursor-pointer hover:text-red-600 transition-colors"
          >
            {closeIcon}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row p-4 gap-6">
          {/* Image slider */}
          <div className="md:w-1/2 relative">
            <div className="h-64 md:h-80 border-2 border-black rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
              {data.images && data.images.length > 0 ? (
                <img 
                  src={data.images[currentImageIndex]} 
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400 text-center p-4">
                  <p>Image placeholder</p>
                </div>
              )}
            </div>
            
            {/* Navigation arrows */}
            {data.images && data.images.length > 1 && (
              <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2">
                <button
                  onClick={handlePrevImage}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  aria-label="Previous image"
                >
                  <IoIosArrowBack className="text-xl" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  aria-label="Next image"
                >
                  <IoIosArrowForward className="text-xl" />
                </button>
              </div>
            )}
            
            {/* Image counter */}
            {data.images && data.images.length > 1 && (
              <div className="text-center mt-2">
                <p className="text-sm AD-font">
                  {currentImageIndex + 1} / {data.images.length}
                </p>
              </div>
            )}
          </div>
          
          {/* Project details */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2 koulen-font">Description</h3>
              <p className="text-gray-700 AD-font">{data.description}</p>
            </div>
            
            {data.technologies && (
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 koulen-font">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {data.projectLink && (
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 koulen-font">Project Link</h3>
                <a 
                  href={data.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline AD-font"
                >
                  {data.projectLink}
                </a>
              </div>
            )}
            
            {data.timeline && (
              <div>
                <h3 className="text-lg font-bold mb-2">Timeline</h3>
                <p className="text-gray-700 AD-font">{data.timeline}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Box;