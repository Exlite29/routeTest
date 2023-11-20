import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="text-right mt-4 mr-4">
      <nav className="flex">
        <ul className="list-none flex gap-10 mb-40">
          <li className="mr-4">
            <Link to="/home" className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/profile" className="cursor-pointer">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
