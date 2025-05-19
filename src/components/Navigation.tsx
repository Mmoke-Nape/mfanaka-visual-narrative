
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled ? 'bg-richblack/90 backdrop-blur-sm py-2' : 'py-6',
        isOpen ? 'bg-richblack' : ''
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-playfair font-bold"
        >
          <span className="inline-block transform transition-transform hover:scale-105 duration-300">
            Mfanaka
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                'nav-link relative overflow-hidden group',
                location.pathname === link.path ? 'text-vibrantred' : 'text-purewhite hover:text-softgray'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute bottom-0 left-0 w-full h-0.5 bg-vibrantred transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300',
                location.pathname === link.path ? 'scale-x-100' : ''
              )}></span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-purewhite focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        
        {/* Mobile Navigation */}
        <div className={cn(
          'fixed inset-0 bg-richblack z-40 flex flex-col items-center justify-center',
          'transform transition-transform duration-500 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  'nav-link text-xl py-2',
                  location.pathname === link.path ? 'text-vibrantred' : 'text-purewhite'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
