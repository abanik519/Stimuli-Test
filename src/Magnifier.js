import React, { useState } from "react";
import "./Magnifier.css";
import logo from "./logo.svg";

const Magnifier = () => {
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [isMagnifierVisible, setIsMagnifierVisible] = useState(false);

  const handleMouseMove = (e) => {
    const image = e.target;
    const { left, top, width, height } = image.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const magnifierX = (mouseX / width) * 100;
    const magnifierY = (mouseY / height) * 100;

    setMagnifierPosition({ x: magnifierX, y: magnifierY });
  };

  const handleMouseEnter = () => {
    setIsMagnifierVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMagnifierVisible(false);
  };

  return (
    <div className="magnifier-container">
      <div
        className={`magnifier ${isMagnifierVisible ? "visible" : ""}`}
        style={{
          left: `${magnifierPosition.x}%`,
          top: `${magnifierPosition.y}%`,
          backgroundSize: "200% 200%", // Adjust the zoom level as needed
          backgroundPosition: `-${magnifierPosition.x * 2}% -${
            magnifierPosition.y * 2
          }%`,
        }}
      ></div>
      <img
        src={logo}
        alt="Magnifiable Image"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Magnifier;
