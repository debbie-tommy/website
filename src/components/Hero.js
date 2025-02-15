import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
const HeroSection = styled.section `
  min-height: 100vh;
  padding: 6rem 4rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  gap: 3rem;
  
  // Add subtle background pattern
  background: 
    linear-gradient(to bottom, rgba(26, 26, 46, 0.8), rgba(26, 26, 46, 0.95)),
    radial-gradient(circle at 25% 25%, rgba(0, 242, 254, 0.05) 1%, transparent 10%),
    radial-gradient(circle at 75% 75%, rgba(79, 172, 254, 0.05) 1%, transparent 10%);
  background-size: 100% 100%, 50px 50px, 50px 50px;
`;
const Title = styled.div `
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
  }

  p {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;
const AboutText = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.8;
  letter-spacing: 0.3px;
  
  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    padding: 0;
    transition: all 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 1);
      transform: translateX(5px);
    }
  }

  .highlight {
    color: #4facfe;
    font-weight: 600;
  }

  .emphasis {
    font-style: italic;
  }

  .bold {
    font-weight: 500;
  }
`;
const ContactButtons = styled.div `
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
`;
const ContactButton = styled.a `
  padding: 0.8rem 2rem;
  background: ${props => props.primary ?
    'linear-gradient(45deg, #00f2fe, #4facfe)' :
    'transparent'};
  border: ${props => props.primary ?
    'none' :
    '2px solid rgba(79, 172, 254, 0.5)'};
  border-radius: 30px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ?
    '0 10px 20px rgba(0, 242, 254, 0.2)' :
    '0 5px 15px rgba(79, 172, 254, 0.1)'};

    &:before {
      width: 300px;
      height: 300px;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
const Hero = () => {
    return (_jsxs(HeroSection, { children: [_jsxs(Title, { children: [_jsx(motion.h1, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: {
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100
                        }, children: "Hi, I'm Debbie Maria Tommy" }), _jsx(motion.p, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: _jsx(Typewriter, { words: ['Engineering Solutions, One Line of Code at a Time'], cursor: true, cursorStyle: '_', typeSpeed: 70, deleteSpeed: 50, loop: 1 }) })] }), _jsx(AboutText, { children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: [_jsxs("p", { children: ["I've always been drawn to a bit of everything\u2014design, music, robotics, sports, even marketing. Some call it indecisiveness\u2014I call it ", _jsx("span", { className: "highlight", children: "curiosity" }), ". That's why I chose Computer Engineering\u2014a space where hardware meets software, logic meets creativity, and ideas turn into reality."] }), _jsxs("p", { children: ["But real learning doesn't just happen in lectures\u2014it happens in ", _jsx("span", { className: "emphasis", children: "late-night debugging, deep-dive research, and side projects that push limits" }), ". I love building things that make sense, refining ideas, and seeing how small iterations lead to big improvements."] }), _jsxs("p", { children: ["Tech can be overwhelming\u2014imposter syndrome? Been there. But instead of letting it hold me back, I see it as a ", _jsx("span", { className: "highlight", children: "reason to keep learning, adapting, and improving" }), ". The best solutions aren't just efficient\u2014they should be ", _jsx("span", { className: "bold", children: "intuitive, scalable, and actually useful" }), "."] }), _jsxs("p", { children: ["Beyond tech, I'm social at heart\u2014I ", _jsx("span", { className: "emphasis", children: "thrive in collaborative spaces" }), ", love exchanging ideas, and enjoy solving challenges as a team. And when I'm not coding? You'll probably find me on the badminton court, at a piano, or brainstorming my next big build."] }), _jsxs("p", { children: ["I'm here to ", _jsx("span", { className: "highlight", children: "solve problems, create impact, and grow" }), " with every challenge\u2014and I'd love to connect with like-minded people along the way!"] })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.2 }, children: _jsxs(ContactButtons, { children: [_jsxs(ContactButton, { href: "mailto:debbie.tommy03@gmail.com", primary: true, children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }) }), "Email Me"] }), _jsxs(ContactButton, { href: "https://linkedin.com/in/debbie-tommy", target: "_blank", rel: "noopener noreferrer", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" }) }), "LinkedIn"] })] }) })] }));
};
export default Hero;
