// If you want to use TypeScript, use .ts file extension instead of .js

class Project {
    constructor(name) {
      this.name = name;                 // Project name
      this.requirements = [];           // List of requirements (strings)
      this.edges = [];                  // List of edges (connections to other projects)
    }
  
    // Method to add a requirement
    addRequirement(requirement) {
      this.requirements.push(requirement);
    }
  
    // Method to add an edge (connection) to another project
    addEdge(targetProject) {
      this.edges.push(targetProject);
    }
  
    // Method to remove a requirement
    removeRequirement(requirement) {
      this.requirements = this.requirements.filter(req => req !== requirement);
    }
  
    // Method to remove an edge
    removeEdge(targetProject) {
      this.edges = this.edges.filter(edge => edge !== targetProject);
    }
  
    // Method to get the project details (requirements and edges)
    getDetails() {
      return {
        name: this.name,
        requirements: this.requirements,
        edges: this.edges.map(edge => edge.name) // Return names of connected projects
      };
    }
  }
  
  export default Project;
  