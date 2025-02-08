import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/Stardom-Regular.otf";

const workExperience = [
  {
    company: "Cuvos - Neuromorphic Enhancement Sensor Technology",
    position: "FPGA Engineer/Honours Researcher",
    period: "Dec 2023 - Present",
    description: [
      "Designed a novel luma enhancement algorithm for temporal image processing.",
      "Developed SW versions of algorithms in Python/C++, multiple IP cores in Vivado/Vitis HLS, and testbenches in VHDL/Verilog.",
      "Thesis nominated for UNSW's showcase as one of the best in the faculty."
    ]
  },
  {
    company: "Embedded Logic Solutions",
    position: "Engineering Intern",
    period: "Oct 2023 - Dec 2023", 
    description: [
      "Created demos for prototyping machines (3D printers, PCB machines) and electronic tools.",
      "Wrote debugger scripts in PRACTICE for Lauterbach Trace32 debuggers."
    ]
  },
  {
    company: "Sunswift Racing UNSW",
    position: "Systems Engineering Lead",
    period: "Jan 2023 - Present",
    description: [
      "Helped build Sunswift 7, the world's fastest solar-powered vehicle.",
      "Led a team of 8 engineers to oversee technical processes across 5 phases and 100+ subcomponents.",
      "Ensured regulatory compliance based on Australian Design Rules."
    ]
  }
];

const WorkPage = () => {
  return (
    <div className="bg-black text-[#FDFFFF] p-8 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold mb-12 font-stardom"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workExperience.map((work, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 font-stardom">{work.company}</h3>
            <h4 className="text-sm text-gray-400 mb-2 font-stardom">{work.position} | {work.period}</h4>
            <ul className="list-disc pl-4">
              {work.description.map((item, i) => (
                <li key={i} className="text-gray-300 mt-1">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;

