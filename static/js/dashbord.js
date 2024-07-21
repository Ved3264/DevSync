// script.js

// Sample data for demonstration
const projects = [
      { name: 'Project Alpha', deadline: '2024-07-31', status: 'On Track' },
      { name: 'Project Beta', deadline: '2024-08-15', status: 'At Risk' },
      { name: 'Project Gamma', deadline: '2024-09-10', status: 'On Hold' }
  ];
  
  // Function to update dashboard metrics
  function updateMetrics() {
      document.getElementById('active-projects').textContent = projects.length;
      document.getElementById('upcoming-deadlines').textContent = projects.length;
      document.getElementById('tasks-pending').textContent = 'N/A'; // Replace with actual data if available
  }
  
  // Function to render project list
  function renderProjectList() {
      const projectList = document.getElementById('project-list');
      projectList.innerHTML = ''; // Clear existing list
  
      projects.forEach(project => {
          const listItem = document.createElement('li');
          listItem.textContent = `${project.name} - Deadline: ${project.deadline} - Status: ${project.status}`;
          projectList.appendChild(listItem);
      });
  }
  
  // Initialize the dashboard
  function initializeDashboard() {
      updateMetrics();
      renderProjectList();
  }
  
  document.addEventListener('DOMContentLoaded', initializeDashboard);
  