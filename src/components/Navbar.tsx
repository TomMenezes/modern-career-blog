
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Seu Nome
            </h1>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
