import React, { useState } from 'react';
import Project from './Project';

// Helper function to get random coordinates for projects
const getRandomPosition = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Calculate the intersection of the edge with the border of the square
const calculateEdgeIntersection = (x1, y1, x2, y2, squareSize) => {
  const halfSize = squareSize / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  let scale = 1;

  if (absDx > absDy) {
    scale = halfSize / absDx;
  } else {
    scale = halfSize / absDy;
  }

  return {
    x: x1 + dx * scale,
    y: y1 + dy * scale,
  };
};

const SunswiftVT = () => {
  const squareSize = 100;

  // Project positions with a default set
  const [projects, setProjects] = useState([
    new Project('Project A'),
    new Project('Project B'),
    new Project('Project C'),
  ]);

  // Manually create some edges for demonstration
  projects[0].addEdge(projects[1]);
  projects[1].addEdge(projects[2]);
  projects[2].addEdge(projects[0]);

  // Set random positions for the squares representing projects
  const [projectPositions, setProjectPositions] = useState(
    projects.map((project) => ({
      project,
      x: getRandomPosition(100, 500), // Random X position
      y: getRandomPosition(100, 500), // Random Y position
      isDragging: false, // Track dragging status
      color: 'lightblue', // Default color
    }))
  );

  // Modal state for adding a new project
  const [isModalOpen, setModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectRequirements, setNewProjectRequirements] = useState('');
  const [newProjectInterfaces, setNewProjectInterfaces] = useState('');

  // State to track the clicked project for editing requirements
  const [selectedProject, setSelectedProject] = useState(null);
  const [editRequirements, setEditRequirements] = useState('');

  // Handle dragging start
  const handleMouseDown = (index) => (event) => {
    setProjectPositions((positions) =>
      positions.map((pos, i) =>
        i === index ? { ...pos, isDragging: true } : pos
      )
    );
  };

  // Handle dragging end
  const handleMouseUp = () => {
    setProjectPositions((positions) =>
      positions.map((pos) => ({ ...pos, isDragging: false }))
    );
  };

  // Handle mouse movement for dragging
  const handleMouseMove = (event) => {
    setProjectPositions((positions) =>
      positions.map((pos) =>
        pos.isDragging
          ? {
              ...pos,
              x: event.clientX - squareSize / 2, // Update X position
              y: event.clientY - squareSize / 2, // Update Y position
            }
          : pos
      )
    );
  };

  // Open the modal to add a project
  const openModal = () => setModalOpen(true);

  // Close the modal
  const closeModal = () => setModalOpen(false);

  // Handle new project submission
  const handleAddProject = () => {
    // Create a new project instance
    const newProject = new Project(newProjectName);

    // Add requirements to the project
    const requirements = newProjectRequirements.split(',').map((req) => req.trim());
    requirements.forEach((req) => newProject.addRequirement(req));

    // Create edges based on interfaces
    const interfaceProjects = newProjectInterfaces.split(',').map((name) => name.trim());
    const projectsWithEdges = projects.filter((project) => interfaceProjects.includes(project.name));
    projectsWithEdges.forEach((project) => newProject.addEdge(project));

    // Add the new project to the list and assign it a random position
    setProjects([...projects, newProject]);
    setProjectPositions([
      ...projectPositions,
      {
        project: newProject,
        x: getRandomPosition(100, 500), // Random X position
        y: getRandomPosition(100, 500), // Random Y position
        isDragging: false,
        color: 'lightblue', // Default color
      },
    ]);

    // Close the modal
    closeModal();
  };

  // Handle clicking a project (to edit requirements)
  const handleClickProject = (project) => {
    const projectPosition = projectPositions.find(pos => pos.project === project);

    // Toggle between red and light blue when the project is clicked
    if (projectPosition.color === '#ff0000') {
      setProjectPositions(
        projectPositions.map(pos =>
          pos.project === project ? { ...pos, color: 'lightblue' } : pos
        )
      );
    } else {
      setSelectedProject(project);
      setEditRequirements(project.requirements.join(', ')); // Show existing requirements
    }
  };

  // Handle updating the requirements and changing colors of connected nodes
  const handleUpdateRequirements = () => {
    if (selectedProject) {
      const updatedRequirements = editRequirements.split(',').map((req) => req.trim());
      selectedProject.requirements = updatedRequirements;

      // Find the connected nodes (projects) and change their color to bright red
      const updatedPositions = projectPositions.map((pos) => {
        if (selectedProject.edges.includes(pos.project)) {
          return { ...pos, color: '#ff0000' }; // Update color to bright red for connected nodes
        }
        return pos;
      });

      // Apply the updated positions (including color changes)
      setProjectPositions(updatedPositions);
      setSelectedProject(null); // Close form after update
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button 
        onClick={openModal} 
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          padding: '10px', 
          fontSize: '16px'
        }}
      >
        Add a Project
      </button>

      {/* Modal for adding a new project */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            color: 'black',  // Set text color to black
          }}
        >
          <h2 style={{ color: 'black' }}>Add New Project</h2>
          <label style={{ color: 'black' }}> 
            Project Name:
            <input 
              type="text" 
              value={newProjectName} 
              onChange={(e) => setNewProjectName(e.target.value)} 
              style={{ marginLeft: '10px' }}
            />
          </label>
          <br />
          <label style={{ color: 'black' }}> 
            Requirements (comma separated):
            <input 
              type="text" 
              value={newProjectRequirements} 
              onChange={(e) => setNewProjectRequirements(e.target.value)} 
              style={{ marginLeft: '10px', marginTop: '10px' }}
            />
          </label>
          <br />
          <label style={{ color: 'black' }}> 
            Interfaces (existing project names, comma separated):
            <input 
              type="text" 
              value={newProjectInterfaces} 
              onChange={(e) => setNewProjectInterfaces(e.target.value)} 
              style={{ marginLeft: '10px', marginTop: '10px' }}
            />
          </label>
          <br />
          <button onClick={handleAddProject} style={{ marginTop: '20px' }}>Add Project</button>
          <button onClick={closeModal} style={{ marginLeft: '10px', marginTop: '20px' }}>Cancel</button>
        </div>
      )}

      {/* Dark overlay behind modal */}
      {isModalOpen && <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }} 
      />}

      {/* SVG Graph Visualization */}
      <svg
        width="600"
        height="600"
        style={{ border: '1px solid black' }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {projectPositions.map((pos, index) => (
          <g key={index} onClick={() => handleClickProject(pos.project)}>
            {/* Render the square representing the project */}
            <rect
              x={pos.x}
              y={pos.y}
              width={squareSize}
              height={squareSize}
              fill={pos.color}
              stroke="black"
              strokeWidth="2"
              onMouseDown={handleMouseDown(index)}
            />
            {/* Render the project name */}
            <text
              x={pos.x + 10}
              y={pos.y + 50}
              fontSize="14"
              fontFamily="Arial"
              fill="black"
            >
              {pos.project.name}
            </text>

            {/* Render edges (lines) */}
            {pos.project.edges.map((edgeProject, i) => {
              const sourceX = pos.x + squareSize / 2; // Center of the current project
              const sourceY = pos.y + squareSize / 2;

              // Find the position of the target project
              const targetPos = projectPositions.find(
                (p) => p.project === edgeProject
              );
              if (targetPos) {
                const targetX = targetPos.x + squareSize / 2;
                const targetY = targetPos.y + squareSize / 2;

                // Calculate intersection points at the borders of the squares
                const sourceIntersection = calculateEdgeIntersection(
                  sourceX,
                  sourceY,
                  targetX,
                  targetY,
                  squareSize
                );
                const targetIntersection = calculateEdgeIntersection(
                  targetX,
                  targetY,
                  sourceX,
                  sourceY,
                  squareSize
                );

                return (
                  <line
                    key={i}
                    x1={sourceIntersection.x}
                    y1={sourceIntersection.y}
                    x2={targetIntersection.x}
                    y2={targetIntersection.y}
                    stroke="orange"
                    strokeWidth="2"
                  />
                );
              }
              return null;
            })}
          </g>
        ))}
      </svg>

      {/* Form for editing requirements */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            color: 'black',
          }}
        >
          <h2>Edit Requirements for {selectedProject.name}</h2>
          <label>Existing Requirements: </label>
          <textarea 
            value={editRequirements} 
            onChange={(e) => setEditRequirements(e.target.value)} 
            style={{ width: '100%', height: '100px', marginTop: '10px' }} 
          />
          <br />
          <button onClick={handleUpdateRequirements} style={{ marginTop: '20px' }}>
            Update Requirements
          </button>
        </div>
      )}
    </div>
  );
};

export default SunswiftVT;
