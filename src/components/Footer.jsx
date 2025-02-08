import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Corrected import for envelope icon

const Footer = () => {
  return (
    <footer className="bg-black text-[#FDFFFF] p-4 flex justify-center items-center">
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:shouryasak@gmail.com" className="hover:text-orange-400">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
