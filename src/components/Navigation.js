import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';
const Nav = styled.nav `
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.$scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-sizing: border-box;
`;
const ScrollProgress = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, #00f2fe, #4facfe);
  transition: var(--transition);
`;
const MobileMenuButton = styled.button `
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
const Logo = styled.div `
  cursor: pointer;
  
  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;
const NavLinks = styled.ul `
  display: flex;
  gap: 2rem;
  list-style: none;
  
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
    return (_jsxs(Nav, { "$scrolled": scrolled, children: [_jsx(ScrollProgress, { style: { width: `${scrollProgress}%` } }), _jsx(Logo, { children: _jsx("img", { src: logoImage, alt: "Logo" }) }), _jsx(MobileMenuButton, { onClick: () => setMobileMenuOpen(!mobileMenuOpen), children: mobileMenuOpen ? '✕' : '☰' }), _jsxs(NavLinks, { className: mobileMenuOpen ? 'active' : '', children: [_jsx("li", { children: _jsx("a", { href: "#about", children: "About" }) }), _jsx("li", { children: _jsx("a", { href: "#experience", children: "Experience" }) }), _jsx("li", { children: _jsx("a", { href: "#skills", children: "Skills" }) }), _jsx("li", { children: _jsx("a", { href: "#projects", children: "Projects" }) })] })] }));
};
export default Navigation;
