import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className="inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <div className="absolute w-max font-bold -top-12 -left-5 z-50 p-2 text-sm text-white bg-primary rounded-lg shadow-xl">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
