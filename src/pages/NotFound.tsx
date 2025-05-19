
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-richblack">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-4 text-vibrantred">404</h1>
        <p className="text-xl md:text-2xl text-purewhite font-montserrat mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 border-2 border-vibrantred text-vibrantred hover:bg-vibrantred hover:text-purewhite transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
