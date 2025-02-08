import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 2rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeIn 1s ease-out;
  }

  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    max-width: 600px;
  }

  .cta-button {
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledButton = styled(motion.button)`
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 4px;
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ContactButton = styled.a`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <h1>Hi, I'm Debbie Maria Tommy</h1>
      <p>a UNSW graduate Computer Engineer's Story</p>
      <ContactButtons>
        <ContactButton href="mailto:debbie.tommy03@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email Me
        </ContactButton>
        <ContactButton href="https://linkedin.com/in/debbie-tommy" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          LinkedIn
        </ContactButton>
      </ContactButtons>
    </HeroSection>
  );
};

export default Hero;

