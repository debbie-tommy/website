import { useState, useEffect } from 'react';
import styled from 'styled-components';

import logoImage from '../assets/logo.png';

interface NavProps {
  $scrolled: boolean;  // Note the $ prefix
}

interface NavLinksProps {
  $mobileMenuOpen: boolean;
}

const Nav = styled.nav<NavProps>`
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${(props: NavProps) => props.$scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent'};
  backdrop-filter: ${(props: NavProps) => props.$scrolled ? 'blur(10px)' : 'none'};
  box-sizing: border-box;
`;

const ScrollProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, #00f2fe, #4facfe);
  transition: var(--transition);
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  
  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  gap: 2rem;
  list-style: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$mobileMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(26, 26, 46, 0.95);
    padding: 2rem;
    backdrop-filter: blur(10px);
    text-align: center;
  }
  
  li a {
    color: white;
    text-decoration: none;
    position: relative;
    padding: 0.5rem 0;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #4facfe;
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollPosition / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <ScrollProgress style={{ width: `${scrollProgress}%` }} />
      <Logo>
        <img src={logoImage} alt="Logo" />
      </Logo>
      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      <NavLinks className={mobileMenuOpen ? 'active' : ''} $mobileMenuOpen={mobileMenuOpen}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
