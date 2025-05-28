import { useState } from "react";
import { FaPhone, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showServices, setShowServices] = useState(false); // ✅ Pour gérer le dropdown
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/avocats");
  };

  return (
    <header className="bg-[#140051] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/">
          <img
            src="public/img/logoo.png"
            alt="VotreAvocat.ma"
            className="mb-2 w-20 cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          <Link to="/" className="hover:text-indigo-400">Accueil</Link>

          {/* Dropdown Services */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="hover:text-indigo-400 focus:outline-none flex items-center gap-1">
              Services
            </button>
            {showServices && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg z-50">
                <Link to="/avocat" className="block px-4 py-2 hover:bg-indigo-100">Avocat</Link>
                <Link to="/client" className="block px-4 py-2 hover:bg-indigo-100">Client</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-indigo-400">À propos</Link>
          <Link to="/actualites" className="hover:text-indigo-400">Dernières articles</Link>
          <Link to="/devenir-membre" className="hover:text-indigo-400">Devenir Membre</Link>
          <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4 relative">
          <div className="relative">
            <FaSearch
              className="text-xl cursor-pointer hover:text-purple-400"
              onClick={handleSearchClick}
            />
            
          </div>

          <Link
            to="/login"
            className="bg-white text-[#140051] px-3 py-1 rounded font-semibold hover:bg-indigo-100 transition"
          >
            Se connecter
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <FaPhone className="text-lg" />
            <span className="font-semibold">05 22 88 91 58</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
