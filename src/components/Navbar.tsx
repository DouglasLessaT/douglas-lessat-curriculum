
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-resume-dark/90 backdrop-blur-sm border-b border-resume-cyan/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-white" style={{ fontStyle:'italic' }}>
            <span className="text-resume-cyan font-roboto">D</span>L
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-resume-cyan transition-colors">Sobre</a>
          <a href="#skills" className="text-white hover:text-resume-cyan transition-colors">Habilidades</a>
          <a href="#experience" className="text-white hover:text-resume-cyan transition-colors">Experiência</a>
          <a href="#education" className="text-white hover:text-resume-cyan transition-colors">Formação</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-resume-gray border-b border-resume-cyan/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#about" className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Sobre</a>
            <a href="#skills" className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Habilidades</a>
            <a href="#experience" className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Experiência</a>
            <a href="#education" className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Formação</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
