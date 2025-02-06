import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "../assets/Stardom-Regular.otf";

const educationData = [
  {
    institution: "University of New South Wales (UNSW)",
    period: "2021 - 2024",
    description: "Did a pretty cool degree in Computer Engineering. Won lots of money winning startup pitches, worked on Sunswift 7, winning 2 world records. Graduated with honours for my thesis: An FPGA Implementation of a Neuromorphically Engineered Temporal Image Enhancement Algorithm. Showcased as one of the Faculty’s best theses."
  },
  {
    institution: "University of British Columbia, Vancouver",
    period: "2020 - 2021",
    description: "Started with wanting to build a career in Manufacturing Engineering. Learned Mechanics, Physics, 3D CAD. But foremost, learned to say sorry every chance I got (the Canadian had to rub on me). My passion for hardware transferred me from the great white north to the great dry south."
  },
  {
    institution: "Nath Valley School, Aurangabad",
    period: "2008 - 2018",
    description: "A not-so-small school in a definetly-small city. Led the School Rock Band, Cricket Team, and played Badminton at the State level."
  }
];

const EducationPage = () => {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems((prev) => (prev < educationData.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-[#FDFFFF] p-8 flex flex-col items-center">
      <motion.h2 
        className="text-3xl font-bold mb-12 font-stardom"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>
      <VerticalTimeline>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index < visibleItems ? 1 : 0, y: index < visibleItems ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "40px" }}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#1a1a1a", color: "#FDFFFF", padding: "10px", borderBottom: "none" }}
              contentArrowStyle={{ borderRight: "7px solid #E67E22" }}
              date={edu.period}
              iconStyle={{ background: "#E67E22", color: "#fff" }}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <h3 className="text-xl font-semibold mt-0 mb-2 font-stardom">{edu.institution}</h3>
              <h4 className="text-sm text-gray-400 mt-0 mb-2 font-stardom">{edu.period}</h4>
              <p className="text-gray-300 mt-0">{edu.description}</p>
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default EducationPage;
