import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Zille-Huma</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['companies', 'services', 'experience', 'skills', 'projects', 'gallery', 'contact', 'future'].map(item => <li key={item}>
                <button onClick={() => scrollToSection(item)} className="text-slate-700 hover:text-blue-600 transition-colors capitalize">
                  {item === 'future' ? 'Future Plans' : item}
                </button>
              </li>)}
          </ul>
        </nav>
        <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <ul className="flex flex-col py-4">
            {['companies', 'services', 'experience', 'skills', 'projects', 'gallery', 'contact', 'future'].map(item => <li key={item} className="px-4 py-2">
                <button onClick={() => scrollToSection(item)} className="text-slate-700 hover:text-blue-600 transition-colors capitalize w-full text-left">
                  {item === 'future' ? 'Future Plans' : item}
                </button>
              </li>)}
          </ul>
        </div>}
    </header>;
};
export default Header;