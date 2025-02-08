import styled from 'styled-components';

const SkillsSection = styled.section`
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

const SkillCard = styled.div`
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
      description: 'HTML, CSS, JavaScript, React' 
    },
    { 
      name: 'Backend Development', 
      level: 85, 
      icon: '⚙️',
      description: 'Node.js, Express, MongoDB' 
    },
    { 
      name: 'React', 
      level: 95, 
      icon: '⚛️',
      description: 'Redux, Hooks, Context API' 
    },
    { 
      name: 'TypeScript', 
      level: 88, 
      icon: '📝',
      description: 'Types, Interfaces, Generics' 
    },
    // Add more skills as needed
  ];

  return (
    <SkillsSection id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
              />
            </div>
          </SkillCard>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
