import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const ProjectsPage = () => {
  const [showAnkiModal, setShowAnkiModal] = useState(false);
  const [showUltravisionModal, setShowUltravisionModal] = useState(false);
  const [showCommModal, setShowCommModal] = useState(false);
  const [showFPGAModal, setShowFPGAModal] = useState(false);

  return (
    <div className="bg-black text-[#FDFFFF] p-8">
      <motion.h2
        className="text-3xl font-bold mb-8 font-stardom"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ANKI Project Card */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setShowAnkiModal(true)}
        >
          <h3 className="text-xl font-semibold mb-2 font-stardom">Anki (CSV Flashcards)</h3>
          <p className="text-gray-300">
            Lightweight, browser-based flashcard practice. Import a CSV with front/back columns and study with simple spaced repetition.
          </p>
          <button
            className="mt-4 text-sm bg-[#E67E22] hover:bg-orange-500 text-black font-medium py-2 px-4 rounded"
            onClick={(e) => { e.stopPropagation(); setShowAnkiModal(true); }}
          >
            Learn more
          </button>
        </motion.div>

        {/* Ultravision Project Card */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setShowUltravisionModal(true)}
        >
          <h3 className="text-xl font-semibold mb-2 font-stardom">Ultravision (Ultrasonic Headband)</h3>
          <p className="text-gray-300">
            Assistive wearable for vision/hearing impairment using ultrasonic sensing and haptic feedback; designed, built and calibrated with a real user.
          </p>
          <button
            className="mt-4 text-sm bg-[#E67E22] hover:bg-orange-500 text-black font-medium py-2 px-4 rounded"
            onClick={(e) => { e.stopPropagation(); setShowUltravisionModal(true); }}
          >
            Learn more
          </button>
        </motion.div>

        {/* Communication Platform Project Card */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setShowCommModal(true)}
        >
          <h3 className="text-xl font-semibold mb-2 font-stardom">Communication Platform (Backend)</h3>
          <p className="text-gray-300">
            Flask-based backend for authentication, channels, messaging with reactions, and CRUD—built in a team with comprehensive tests.
          </p>
          <button
            className="mt-4 text-sm bg-[#E67E22] hover:bg-orange-500 text-black font-medium py-2 px-4 rounded"
            onClick={(e) => { e.stopPropagation(); setShowCommModal(true); }}
          >
            Learn more
          </button>
        </motion.div>

        {/* FPGA Audio Networking Project Card */}
        <motion.div
          className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setShowFPGAModal(true)}
        >
          <h3 className="text-xl font-semibold mb-2 font-stardom">FPGA Audio Networking</h3>
          <p className="text-gray-300">
            Real-time audio capture via I2S on a Kria KV260, streamed over Ethernet (UDP); HDL + C on ARM.
          </p>
          <button
            className="mt-4 text-sm bg-[#E67E22] hover:bg-orange-500 text-black font-medium py-2 px-4 rounded"
            onClick={(e) => { e.stopPropagation(); setShowFPGAModal(true); }}
          >
            Learn more
          </button>
        </motion.div>
      </div>

      {/* ANKI Modal */}
      {showAnkiModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setShowAnkiModal(false)}>
          <div className="bg-[#111] text-[#FDFFFF] w-11/12 max-w-xl rounded-xl shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              onClick={() => setShowAnkiModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-stardom mb-2">Anki (CSV Flashcards)</h3>
            <p className="text-gray-300 mb-4">
              A minimal flashcard tool inspired by Anki, built for quick study sessions right in your browser. Import your own CSV with columns named <span className="font-mono">front</span> and <span className="font-mono">back</span>, and review using keyboard shortcuts: Space to reveal, 1 Again, 2 Good, 3 Easy, 4 Skip.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-6">
              <li>CSV import with header recognition</li>
              <li>Simple spaced repetition controls</li>
              <li>Keyboard-first workflow</li>
            </ul>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                onClick={() => setShowAnkiModal(false)}
              >
                Close
              </button>
              <Link
                to="/anki"
                className="px-4 py-2 rounded bg-[#E67E22] hover:bg-orange-500 text-black font-medium"
                onClick={() => setShowAnkiModal(false)}
              >
                Open Anki
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Ultravision Modal */}
      {showUltravisionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setShowUltravisionModal(false)}>
          <div className="bg-[#111] text-[#FDFFFF] w-11/12 max-w-xl rounded-xl shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              onClick={() => setShowUltravisionModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-stardom mb-2">Ultravision — Ultrasonic Headband</h3>
            <p className="text-gray-300 mb-4">
              Ultrasonic headband built for a user with vision and hearing impairment. Detects obstacles via an HC‑SR04 ultrasonic sensor and conveys distance through a calibrated haptic pulse algorithm. Includes firmware modules for device state handling and configurable distance thresholds, plus PCB files and BOM. The user was able to walk for the first time in their life without a cane.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-6">
              <li>Obstacle detection with ultrasonic sensing</li>
              <li>Haptic feedback with custom pulse algorithm</li>
              <li>Configurable distance states and Arduino firmware</li>
              <li>PCB design files and bill of materials</li>
            </ul>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                onClick={() => setShowUltravisionModal(false)}
              >
                Close
              </button>
              <a
                href="https://github.com/ShouryaSaklecha/Ultravision"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#E67E22] hover:bg-orange-500 text-black font-medium"
                onClick={() => setShowUltravisionModal(false)}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Communication Platform Modal */}
      {showCommModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setShowCommModal(false)}>
          <div className="bg-[#111] text-[#FDFFFF] w-11/12 max-w-xl rounded-xl shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              onClick={() => setShowCommModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-stardom mb-2">Communication Platform — Flask Backend</h3>
            <p className="text-gray-300 mb-4">
              Backend for a lightweight communication app built with Flask and HTTP. Supports authentication, user/channel management, message posting with reactions, and app statistics. Includes strong unit tests and design documentation.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-6">
              <li>Auth, members, channels, and messaging APIs</li>
              <li>Reactions and full CRUD flows</li>
              <li>Statistics endpoints and test coverage</li>
            </ul>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                onClick={() => setShowCommModal(false)}
              >
                Close
              </button>
              <a
                href="https://github.com/ShouryaSaklecha/communication-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#E67E22] hover:bg-orange-500 text-black font-medium"
                onClick={() => setShowCommModal(false)}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FPGA Audio Networking Modal */}
      {showFPGAModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setShowFPGAModal(false)}>
          <div className="bg-[#111] text-[#FDFFFF] w-11/12 max-w-xl rounded-xl shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              onClick={() => setShowFPGAModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-stardom mb-2">FPGA Audio Networking — Real-time UDP</h3>
            <p className="text-gray-300 mb-4">
              Audio networking pipeline on a Kria KV260: capture microphone audio via I2S, buffer with DMA, and stream over Ethernet using UDP in real time. HDL in VHDL and C on the ARM processor, with client tooling for playback.
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-6">
              <li>I2S microphone interface and DMA</li>
              <li>UDP streaming server on FPGA SoC</li>
              <li>Client utility for receiving and playback</li>
            </ul>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                onClick={() => setShowFPGAModal(false)}
              >
                Close
              </button>
              <a
                href="https://github.com/ShouryaSaklecha/FPGA_Audio_Networking"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#E67E22] hover:bg-orange-500 text-black font-medium"
                onClick={() => setShowFPGAModal(false)}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
