interface HeaderProps {
  padding?: string;
}

const Header: React.FC<HeaderProps> = ({ padding }) => {
  return (
    <div
      className={`z-10 absolute flex items-center top-0 left-0 bg-darkred-header bg-opacity-[0.13] w-full h-[90px] ${padding}`}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <h2 className="uppercase">Chris Miller</h2>
        </div>
        <div>
          <ul className="flex">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
