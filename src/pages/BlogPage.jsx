import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <div className="bg-black text-[#FDFFFF] p-8 flex flex-col items-start min-h-screen">
      <h1 className="font-stardom text-3xl text-[#FF9F1C]">Brain Dump</h1>
      <p className="mt-4 max-w-2xl">
        A space where I write things I want out there, and questions people ask me way too often
      </p>

      <div className="mt-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/blog/a-moment-for-2025" className="block">
            <motion.div
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2 font-stardom">A moment in 2025</h3>
              <p className="text-gray-300">
                Retrospection on the year I turned 24.
              </p>
              <span className="mt-4 inline-block text-sm bg-[#E67E22] hover:bg-orange-500 text-black font-medium py-2 px-4 rounded">
                Read
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
