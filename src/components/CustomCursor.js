import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Cursor = styled.div `
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
`;
const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);
    return _jsx(Cursor, { style: { transform: `translate(${position.x - 10}px, ${position.y - 10}px)` } });
};
export default CustomCursor;
