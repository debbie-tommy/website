import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const SkillsSection = styled.section `
  padding: 6rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
const SkillCard = styled.div `
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  /* Make cards visible by default */
  opacity: 1;
  transform: translateY(0);

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #4facfe;
  }

  h3 {
    margin-bottom: 1rem;
    color: #fff;
  }

  .progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-top: 1rem;

    .progress {
      height: 100%;
      background: linear-gradient(45deg, #00f2fe, #4facfe);
      border-radius: 3px;
      width: 0;
      animation: fillProgress 1.5s ease forwards;
    }
  }

  @keyframes fillProgress {
    from {
      width: 0;
    }
    to {
      width: var(--progress);
    }
  }
`;
const Skills = () => {
    const skills = [
        {
            name: 'Frontend Development',
            level: 90,
            icon: '💻',
            description: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Backend Development',
            level: 85,
            icon: '⚙️',
            description: 'Node.js, Express, MongoDB'
        },
        {
            name: 'Data Science',
            level: 80,
            icon: '📊',
            description: 'Python, Pandas, NumPy, Scikit-learn'
        },
        {
            name: 'C/C++ Programming',
            level: 85,
            icon: '🔧',
            description: 'Object-Oriented Programming, Data Structures'
        },
        {
            name: 'React',
            level: 95,
            icon: '⚛️',
            description: 'Native, Redux, Hooks, Context API'
        }
        // Add more skills as needed
    ];
    return (_jsxs(SkillsSection, { id: "skills", children: [_jsx("h2", { children: "Skills & Expertise" }), _jsx("div", { className: "skills-grid", children: skills.map((skill, index) => (_jsxs(SkillCard, { children: [_jsx("div", { className: "icon", children: skill.icon }), _jsx("h3", { children: skill.name }), _jsx("p", { children: skill.description }), _jsx("div", { className: "progress-bar", children: _jsx("div", { className: "progress", style: { '--progress': `${skill.level}%` } }) })] }, index))) })] }));
};
export default Skills;
