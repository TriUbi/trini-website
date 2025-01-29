import { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%) rotate(-90deg)
    scale(${(props) => (props.isHovering ? 1.2 : 1)});
  transition: transform 0.2s ease;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "🪄";
  }
`;

const Trail = styled.div`
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
`;

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add new point to trail
      setTrail((prev) =>
        [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }].slice(-20)
      ); // Keep only last 20 points for a longer trail
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <Cursor
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        isHovering={isHovering}
      />
      {trail.map((point, index) => (
        <Trail
          key={point.id}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index / trail.length) * 0.3,
          }}
          visible={true}
        />
      ))}
    </>
  );
};

export default MagicCursor;
