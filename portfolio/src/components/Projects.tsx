import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 6rem 4rem;
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
  }

  .tech-stack {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    span {
      background: rgba(79, 172, 254, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.9rem;
    }
  }

  .links {
    display: flex;
    gap: 1rem;

    a {
      color: #4facfe;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "LurkforWork",
      description: "A LinkedIn clone: Interacts with a RESTful API backend via fetch and promises. This single-page application (SPA) dynamically updates the DOM to provide an app-like experience without full-page reloads. ",
      image: "/path-to-image.jpg",
      tech: ["Vanilla Js", "HTML", "CSS"],
      githubLink: "https://github.com/debbie-tommy/lurkaround"
    },
    // Add more projects

  ];

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="links">
                {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </ProjectCard>
        ))}
      </div>
    </ProjectsSection>
  );
};

export default Projects;
