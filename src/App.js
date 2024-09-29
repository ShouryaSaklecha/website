import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // Adjusted import
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

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
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;