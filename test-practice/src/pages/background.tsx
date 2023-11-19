import React, { ReactNode } from "react";
import nature from "../assets/nature.jpg";

interface IsProps {
  children: ReactNode;
  className: string;
}

const Background: React.FC<IsProps> = ({ children, className = "" }) => {
  return (
    <div>
      <img
        className={`${className} h-screen w-screen bg-cover bg-center flex items-center justify-center overflow-hidden `}
        src={nature}
        alt="background"
      />
      {children}
    </div>
  );
};

export default Background;
