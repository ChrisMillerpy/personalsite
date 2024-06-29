"use client";

import { useState } from "react";
import BurgerMenuSVG from "../svg/components-svg/BurgerMenuSVG";
import disableScroll from "disable-scroll";

interface BurgerProps {
  isMenuOpen?: boolean;
  handleClick?: any;
}

const Burger: React.FC<BurgerProps> = ({ isMenuOpen, handleClick }) => {
  return (
    <div className="md:hidden block">
      <button onClick={handleClick}>
        <BurgerMenuSVG isMenuOpen={isMenuOpen} />
      </button>
    </div>
  );
};

interface HeaderProps {
  padding?: string;
}

const Header: React.FC<HeaderProps> = ({ padding }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event: any) => {
    if (event.target.id === "chrisMiller") {
      setIsMenuOpen(false);
      disableScroll.off();
    } else {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        disableScroll.off();
      } else {
        setIsMenuOpen(true);
        disableScroll.on();
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[90px] ${
        isMenuOpen ? "h-full" : "h-90px"
      } transition-height flex items-center justify-center bg-darkred-header bg-opacity-20 backdrop-filter backdrop-blur-lg ${padding} z-50`}
    >
      <div
        className={`fixed top-0 left-0 w-full h-[90px] flex flex-row items-center justify-between ${padding}`}
      >
        <div>
          <a onClick={handleClick} href="#hero">
            <h2
              id="chrisMiller"
              className="uppercase font-bold text-[24px] tracking-normal"
            >
              Chris Miller
            </h2>
          </a>
        </div>

        <nav>
          <ul className="font-outfit hidden md:flex">
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

        <Burger isMenuOpen={isMenuOpen} handleClick={handleClick} />
      </div>
      <nav className={`${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="font-outfit flex flex-col items-center gap-10">
          <li className="text-3xl">
            <a onClick={handleClick} href="#projects">
              projects
            </a>
          </li>
          <li className="text-3xl">
            <a onClick={handleClick} href="#blog">
              blog
            </a>
          </li>
          <li className="text-3xl">
            <a onClick={handleClick} href="#contact">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
