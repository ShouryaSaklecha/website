import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpeg"; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const HomePage = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainContent(true);
    }, 2000); // 2 seconds delay before transition
  }, []);

  if (!showMainContent) {
    return (
      <motion.div 
        className="bg-black text-[#FDFFFF] flex justify-center items-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-stardom text-6xl md:text-9xl font-bold text-[#E67E22] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        >
          Hello, I am Shourya.
        </motion.h1>
      </motion.div>
    );
  }

  return (
    <div className="bg-black text-[#FDFFFF] flex flex-col md:flex-row h-screen">
      {/* Profile Image */}
      <motion.img 
        src={profileImage} 
        alt="Profile" 
        className="w-full md:w-1/2 h-1/2 md:h-full border-4 border-[#FDFFFF] shadow-lg object-cover" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Text Content */}
      <motion.div 
        className="md:ml-8 text-left w-full md:w-1/2 h-full flex flex-col justify-start overflow-y-auto p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h1 
          className="font-stardom text-4xl font-bold text-[#E67E22]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="mt-4">
            Currently an FPGA Engineer building neuromorphic systems, engineered for ultra-high speeds and low power consumption. Essentially, design of custom processors for industrial grade cameras (See cuvos.com.au). I work at the intersection of Software and Hardware, building a career that can fluidly move between microelectronics and software design. True full-stack.
          </p>
          <p className="mt-4">
            Some of the things I have worked on as a uni student: a geo-imagery satellite, world's fastest solar vehicle (and 2 other world records), Australia's first hydrogen/solar/electric car, a novel assistive device for people with Usher's syndrome, another novel luma enhancement algorithm built on hardware. Published papers, 2x scholarships, World Solar Challenge winner. Pretty eventful 4 years.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2 className="mt-6">Working with Me</h2>
          <p>
            I am based in Sydney, Australia. I hold a Bachelors in Computer Engineering from UNSW, with Honours. I am resourceful in the following skills/tools:
            <p>Hardware: VHDL | Xilinx FPGAs | Vivado | Vitis HLS | RTL Design | Digital System Design | Microcontrollers | Microprocessors | Verilog | PCB Design | Matlab | Fusion360 CAD </p>
<p>Software: Python | Java | C++ (20) | Javascript | HTML | CSS | React | Git</p>
Others: Engineering Design | Figma | Bubble | UI/UX | Excel | Notion | Research | Formal Systems Engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <h2 className="mt-6">Other Really Important Things</h2>
          <p>
            Things that do not revolve around my work life:
            <br />
            I read quite a bit. Both fiction and non-fiction, research papers even. I have been playing guitar and bass since 2012, hoping to learn piano soon. Aviation interests me (I can identify planes in the sky), so does theology and philosophy. I like teaching kids physics and computer science, so much so that I do it for free sometimes. In 2025, I am hoping to write more, and that's mainly the purpose of this website.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
