
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-richblack text-purewhite py-12 border-t border-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-playfair font-bold">Mfanaka</Link>
            <p className="mt-4 text-softgray max-w-xs">
              Bold portraiture, dramatic lighting, and luxury aesthetics.
              Based in South Africa, available worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair mb-4">Connect</h3>
            <div className="space-y-2">
              <p className="text-softgray">Email: info@mfanaka.com</p>
              <p className="text-softgray">Phone: +27 (0) 71 234 5678</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className={linkClasses}>Instagram</a>
                <a href="#" className={linkClasses}>Twitter</a>
                <a href="#" className={linkClasses}>LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair mb-4">Locations</h3>
            <div className="space-y-2">
              <p className="text-softgray">Pretoria Studio</p>
              <p className="text-softgray">Johannesburg Studio</p>
              <p className="text-softgray">Cape Town (On Request)</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-charcoal mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-softgray text-sm">
            &copy; {currentYear} Mfanaka Ka Maluleke. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className={linkClasses}>Privacy</Link>
            <Link to="/terms" className={linkClasses}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkClasses = cn(
  'text-softgray hover:text-vibrantred transition-colors duration-300',
  'nav-link text-sm py-1'
);

export default Footer;
