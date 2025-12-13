import React from "react";
import profileImage from "../assets/profile.jpeg"; // Adjust the path based on your folder structure
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="bg-black text-[#FDFFFF] flex flex-col md:flex-row h-auto md:h-screen">
      {/* Profile Image */}
      <motion.img 
        src={profileImage} 
        alt="Profile" 
        className="w-full md:w-1/2 h-auto md:h-full border-4 border-[#FDFFFF] shadow-lg object-cover" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Text Content */}
      <motion.div 
        className="md:ml-8 text-left w-full md:w-1/2 h-auto md:h-full flex flex-col justify-start p-4 overflow-y-auto"
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
            I’m an FPGA Research Engineer working on neuromorphic systems. These are essentially bio-inspired custom chips for industrial-grade cameras (satellites, aircrafts, etc.) designed to run at high speed and low power (see{" "}
            <a href="https://cuvos.com.au" target="_blank" rel="noreferrer">
              Cuvos
            </a>
            ). My work sits at the overlap of hardware and software, and I enjoy building solutions that move fluidly between microelectronics and software design.
          </p>
          <p className="mt-4">
            Earlier, at university, I was lucky to work on some meaningful projects: a geo-imagery satellite, contributions to the world’s fastest solar vehicle (and two other world records), Australia’s first hydrogen/solar/electric car, assistive tech for people with Usher’s syndrome, and a hardware luma-enhancement algorithm. I also published research, received scholarships, and took part in the World Solar Challenge. It was a full and rewarding four years.
          </p>
        </motion.div>

        

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2 className="mt-6">Working with Me</h2>
          <p>
            I’m based in Sydney, Australia, and hold a Bachelor’s in Computer Engineering (Honours) from UNSW. Here are areas I’ve built experience in:
            <p>Hardware: VHDL | Xilinx FPGAs | Vivado | Vitis HLS | RTL Design | Digital System Design | Microcontrollers | Verilog | PCB Design | Matlab | Fusion360 CAD</p>
            <p>Software: Python | Java | C++ (20) | JavaScript | HTML | CSS | React | Git</p>
            Others: Engineering Design | Figma | Bubble | UI/UX | Excel | Notion | Research | Formal Systems Engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <h2 className="mt-6">Outside of Work</h2>
          <p>
            I read a mix of fiction, non-fiction, and research papers. I’ve played guitar and bass since 2012 and hope to learn piano next. Aviation has always interested me (I can usually identify planes overhead), and I enjoy exploring philosophy and theology. I also like teaching physics and computer science to high-school students and sometimes volunteer my time. In 2025, I plan to write more — one reason I started this site.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
