import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

const SkillCard = styled.div`