import React from "react";
import profileImage from "../assets/profile.jpeg"; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";


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
          I like electronics, software engineering and, just building stuff (this website included). My work life revolves around low-latency hardware design for video processing, and uni life revolves around Electrical and Computer Engineering (UNSW). I am still a college senior, on track to graduate with honours in December 2024. 
          <br />
          <br />
          Apart from being a full-time geek, I enjoy playing the guitar and teaching STEM subjects to school kids. 
          Scroll to learn more about my education, projects, and work experience!
        </p>
        {/* <a href="/path-to-your-resume" className="mt-4">Short on Time? Get My Resume.</a> */}
        
        <h2>Overview</h2>
        <p>
          Areas of Interest/Academic Exposure:
          <br />
          My skills range from designing PCBs to hi-fidelity figma prototypes.
          FPGA/Digital Design, Software Engineering, Electronics, Embedded Systems, Human-Computer Interaction (UX/UI Design, Cognitive Load Theory), 
          Systems Engineering, and Project Management. True full-stack.
        </p>

        <h2>My Skills:</h2>
        <p>
          VHDL | FPGA | Assembly | Digital System Design | Microcontrollers | Python | Java | C++(20) | Javascript | HTML | CSS | React | Fusion360 CAD | PCB Design | MATLAB | Engineering Design | Figma | Bubble | UI/UX | Excel | Notion | Research
        </p>

        <h2>Notable Achievements:</h2>
        <p>
          SAT Math 99th Percentile | Outstanding International Student Scholarship UBC | University of Sydney Scholarship | Pearson Test of English: 90/90 | Peter Farell Cup: Finalist | Startmate Student Fellow
        </p>
        <h2>Building more things...find my socials in the meantime:</h2>
                {/* Social Icons Section */}
                <div className="mt-4 flex space-x-6">
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
