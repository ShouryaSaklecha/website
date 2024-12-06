import React from "react";
import profileImage from "../assets/profile.jpeg"; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div className="bg-black text-[#FDFFFF] p-8 flex flex-col md:flex-row justify-center items-start">
      {/* Profile Image */}
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-full md:w-1/3 border-4 border-[#FDFFFF] shadow-lg" 
      />

      {/* Text Content */}
      <div className="md:ml-8 text-left w-full md:w-1/2">
        <h1>Hello, I am Shourya.</h1>
        <p className="mt-4">
          Currently an FPGA Engineer building neuromorphic systems, engineered for low latency and power consumption. I work at the intersection of Software and Hardware, building a career that can fluidly move between microelectronics and software design. True full-stack. </p>
        <p className="mt-4">  
          Some of the things I have worked on as a uni student: a geo-imagery satellite, world's fastest solar vehicle (and 2 other world records), Australia's first hydrogen/solar/electric car, a novel assistive device for people with Usher's syndrome, another novel luma enhancement algorithm built on hardware. Published papers, 2x scholarships, World Solar Challenge winner. Pretty eventful 4 years. 
        </p>
        {/* <a href="/path-to-your-resume" className="mt-4">Short on Time? Get My Resume.</a> */}
        
        <h2>Real Stuff</h2>
        <p>
          Things that do not revolve around my work life:
          <br />
          I read quite a bit. Both fiction and non-fiction, research papers even. I have been playing guitar and bass since 2012, hoping to learn piano soon. Aviation interests me (I can identify planes in the sky), so does theology and philosophy. I like teaching kids physics and computer science, so much so that I do it for free sometimes. In 2025, I am hoping to write more, and that's mainly the purpose of this website.
        </p>

        <h2>Working with Me</h2>
        I am based in Sydney, Australia for the time being. I hold a Bachelors in Electrical and Computer Engineering from UNSW, with Honours. I am resourceful in the following skills/tools:
        <p>
          <b>Hardware:</b> VHDL | Xilinx FPGAs | Vivado | Vitis HLS | RTL Design | Digital System Design | Microcontrollers | Microprocessors | Verilog |  PCB Design | Matlab |  Fusion360 CAD 
          <br /> <b>Software:</b> Python | Java | C++ (20) | Javascript | HTML | CSS | React | Git  
          <br /> <b>Others:</b> Engineering Design | Figma | Bubble | UI/UX | Excel | Notion | Research | Formal Systems Engineering
        </p>

        <h2>Getting in Touch</h2>
        <p>Find me on:</p>
        {/* Social Icons Section */}
        <div className="mt-4 flex space-x-6 items-center">
          <a href="https://www.linkedin.com/in/shourya-saklecha/" target="_blank" rel="noopener noreferrer" className="text-[#FDFFFF]">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://x.com/Shouryasaklecha" target="_blank" rel="noopener noreferrer" className="text-[#FDFFFF]">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://github.com/ShouryaSaklecha" target="_blank" rel="noopener noreferrer" className="text-[#FDFFFF]">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
