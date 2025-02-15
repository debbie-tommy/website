import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dpWorldLogo from '../assets/dpworld.jpeg';
import ibmLogo from '../assets/ibm.png';
import offworldLogo from '../assets/owr.png';
import wiesocLogo from '../assets/wiesoc.png';
const ExperienceSection = styled.section `
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;
const TimelineContainer = styled.div `
  position: relative;
  margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    opacity: 0.3;
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const TimelineItem = styled(motion.div) `
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  
  @media (min-width: 768px) {
    justify-content: ${props => props.$isEven ? 'flex-start' : 'flex-end'};
    padding-left: ${props => props.$isEven ? '50%' : '0'};
    padding-right: ${props => props.$isEven ? '0' : '50%'};
  }
`;
const TimelineContent = styled.div `
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: var(--accent-color);
    border-radius: 50%;
    left: -7px;
    top: 20px;
    
    @media (min-width: 768px) {
      left: ${props => props.$isEven ? '-7px' : 'auto'};
      right: ${props => props.$isEven ? 'auto' : '-7px'};
    }
  }
`;
const CompanyLogo = styled.img `
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 1rem;
`;
const JobTitle = styled.h3 `
  font-size: 1.25rem;
  color: var(--accent-color);
  margin: 0;
`;
const CompanyName = styled.h4 `
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;
const Duration = styled.p `
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0;
`;
const Location = styled.p `
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0;
`;
const SubRole = styled.div `
  margin-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0.8rem;
    width: 6px;
    height: 6px;
    background: var(--accent-color);
    border-radius: 50%;
    opacity: 0.7;
  }
`;
const Experience = () => {
    const experiences = [
        {
            title: "Machine Learning and Cyber Security Intern",
            company: "DP World",
            department: "Group Technology",
            duration: "Dec 2023 - Mar 2024 · 4 months",
            location: "Dubai, United Arab Emirates",
            logo: dpWorldLogo
        },
        {
            title: "Client Engineering",
            company: "IBM",
            duration: "Jan 2023 - Feb 2023 · 2 months",
            location: "Sydney, Australia",
            description: "UNSW Partnership x IBM Client engineering project",
            logo: ibmLogo
        },
        {
            company: "Offworld Robotics",
            duration: "2 years 1 month",
            logo: offworldLogo,
            subRoles: [
                {
                    title: "Marketing And Public Relations Manager",
                    duration: "Dec 2021 - Feb 2023 · 1 year 3 months"
                },
                {
                    title: "Director Of Marketing And Public Relations",
                    duration: "Feb 2021 - Dec 2021 · 11 months"
                }
            ]
        },
        {
            company: "UNSW Women in Engineering Society",
            duration: "3 years 4 months",
            logo: wiesocLogo,
            subRoles: [
                {
                    title: "Treasurer",
                    duration: "Nov 2021 - Feb 2023 · 1 year 4 months"
                },
                {
                    title: "Director Of Public Relations",
                    duration: "Nov 2019 - Dec 2021 · 2 years 2 months"
                }
            ]
        }
    ];
    return (_jsxs(ExperienceSection, { id: "experience", children: [_jsx("h2", { children: "Experience" }), _jsx(TimelineContainer, { children: experiences.map((exp, index) => (_jsx(TimelineItem, { "$isEven": index % 2 === 0, initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.2 }, children: _jsxs(TimelineContent, { "$isEven": index % 2 === 0, children: [_jsx(CompanyLogo, { src: exp.logo, alt: `${exp.company || exp.title} logo` }), _jsx(JobTitle, { children: exp.title }), exp.company && _jsx(CompanyName, { children: exp.company }), exp.duration && _jsx(Duration, { children: exp.duration }), exp.location && _jsx(Location, { children: exp.location }), exp.department && _jsx(Location, { children: exp.department }), exp.description && _jsx("p", { children: exp.description }), exp.subRoles && exp.subRoles.map((role, roleIndex) => (_jsxs(SubRole, { children: [_jsx(JobTitle, { children: role.title }), _jsx(Duration, { children: role.duration })] }, roleIndex)))] }) }, index))) })] }));
};
export default Experience;
