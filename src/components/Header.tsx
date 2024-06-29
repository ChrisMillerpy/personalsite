"use client";

import { useState } from "react";

interface HeaderProps {
  padding?: string;
}

const Header: React.FC<HeaderProps> = ({ padding }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div
      className={`fixed flex items-center justify-between top-0 left-0 bg-darkred-header bg-opacity-20 backdrop-filter backdrop-blur-lg w-full h-[90px] ${padding} z-50`}
    >
      <div>
        <a href="#hero">
          <h2 className="uppercase font-bold text-[24px] tracking-normal">
            Chris Miller
          </h2>
        </a>
      </div>
      <nav>
        <ul className="flex font-outfit">
          <li className="ml-20">
            <a href="#projects">projects</a>
          </li>
          <li className="ml-20">
            <a href="#blog">blog</a>
          </li>
          <li className="ml-20">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
