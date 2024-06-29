import React from "react";

interface BurgerMenuSVGProps {
  isMenuOpen?: boolean;
}

const BurgerMenuSVG: React.FC<BurgerMenuSVGProps> = ({ isMenuOpen }) => {
  return (
    <>
      {/* This is the burger/open menu icon */}
      <svg
        className={`md:hidden ${isMenuOpen ? "hidden" : "block"}`}
        width="39"
        height="30"
        viewBox="0 0 39 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2H37"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M2 15H37"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M2 28H37"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* This is the cross/close menu icon */}
      <svg
        className={`md:hidden block ${isMenuOpen ? "block" : "hidden"}`}
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.12573 2.62567L26.8745 27.3744"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M2 26.7487L26.7487 1.99998"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default BurgerMenuSVG;
