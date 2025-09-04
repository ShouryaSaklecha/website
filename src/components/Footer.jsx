import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-[#FDFFFF] p-4 flex flex-col justify-center items-center">
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/shourya-saklecha/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/ShouryaSaklecha" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:shouryasak@gmail.com" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div className="mt-2">
        <Link to="/blog" className="text-[#FF9F1C] font-normal text-sm hover:text-orange-300">
          Brain Dump
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
