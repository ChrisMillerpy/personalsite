interface HeaderProps {
  padding?: string;
}

const Header: React.FC<HeaderProps> = ({ padding }) => {
  return (
    <div
      className={`fixed flex items-center justify-between top-0 left-0 bg-darkred-header bg-opacity-20 backdrop-filter backdrop-blur-lg w-full h-[90px] ${padding} z-50`}
    >
      <div>
        <h2 className="uppercase font-bold text-[24px] tracking-normal">
          Chris Miller
        </h2>
      </div>
      <nav>
        <ul className="flex font-outfit">
          <li className="ml-20">
            <a href="">projects</a>
          </li>
          <li className="ml-20">
            <a href="">blog</a>
          </li>
          <li className="ml-20">
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
