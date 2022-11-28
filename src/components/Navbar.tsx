import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar text-white bg-[#3F0071] md:px-[15%] sm:px-20">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Todo-App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
