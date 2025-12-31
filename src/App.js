import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // Adjusted import
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import SunswiftVT from './pages/Interfacer/SunswiftVT';
import Footer from './components/Footer';
import AnkiPage from './pages/AnkiPage';
import BlogPage from './pages/BlogPage';
import BlogMoment2025 from './pages/BlogMoment2025';



const App = () => {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sunswiftVT" element={<SunswiftVT />} />
          <Route path="/anki" element={<AnkiPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/a-moment-for-2025" element={<BlogMoment2025 />} />

          {/* Define other routes here */}
        </Routes>
      </div>
      <Footer />
      </Router>
  );
};

export default App;
