import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { motion } from 'framer-motion';
const ProjectsSection = styled.section `
  padding: 6rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  
  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2.5rem;
    margin: 0 auto;
  }
`;
const ProjectCard = styled(motion.div) `
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(79, 172, 254, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .content {
    padding: 2rem;
  }

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    color: #4facfe;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .tech-stack {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    span {
      background: rgba(79, 172, 254, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      border: 1px solid rgba(79, 172, 254, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(79, 172, 254, 0.2);
        border-color: rgba(79, 172, 254, 0.3);
      }
    }
  }

  .links {
    display: flex;
    gap: 1.5rem;

    a {
      color: #4facfe;
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      
      svg {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
      }
      
      &:hover {
        color: #00f2fe;
        
        svg {
          transform: translateX(3px);
        }
      }
    }
  }
`;
const Projects = () => {
    const projects = [
        {
            title: "LurkforWork",
            description: "A LinkedIn clone: Interacts with a RESTful API backend via fetch and promises. This single-page application (SPA) dynamically updates the DOM to provide an app-like experience without full-page reloads.",
            techStack: ["Vanilla Js", "HTML", "CSS"],
            demoLink: "https://www.youtube.com/watch?v=Ndgo2ws34Zk",
            githubLink: "https://github.com/debbie-tommy/Lurkaround"
        },
        {
            title: "Rubber Ducky- Ethical Hacking Tool",
            description: "A Rubber Ducky is a USB attack device that plugs into a computer via USB and allows you to send keystrokes to a computer. This project is a simple implementation of a Rubber Ducky using an Arduino.",
            techStack: ["Arduino", "Security Mindset"],
            demoLink: "https://www.youtube.com/watch?v=VJvwoObT-0c",
            githubLink: "https://github.com/debbie-tommy/COMP6441_SomethingAwesome"
        }
    ];
    return (_jsxs(ProjectsSection, { id: "projects", children: [_jsx("h2", { children: "Projects" }), _jsx("div", { className: "projects-grid", children: projects.map((project, index) => (_jsx(ProjectCard, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.2 }, children: _jsxs("div", { className: "content", children: [_jsx("h3", { children: project.title }), _jsx("p", { children: project.description }), _jsx("div", { className: "tech-stack", children: project.techStack.map((tech, i) => (_jsx("span", { children: tech }, i))) }), _jsxs("div", { className: "links", children: [_jsxs("a", { href: project.demoLink, target: "_blank", rel: "noopener noreferrer", children: ["Demo", _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z", clipRule: "evenodd" }) })] }), _jsxs("a", { href: project.githubLink, target: "_blank", rel: "noopener noreferrer", children: ["GitHub", _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z", clipRule: "evenodd" }) })] })] })] }) }, index))) })] }));
};
export default Projects;
