
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  slides: {
    image: string;
    alt: string;
    title?: string;
    subtitle?: string;
  }[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };
  
  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div 
            className="absolute inset-0 bg-center bg-cover animate-ken-burns"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-richblack/30"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className={cn(
              'text-center max-w-3xl transition-all duration-700 delay-300',
              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}>
              {slide.title && (
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-purewhite">
                  {slide.title}
                </h1>
              )}
              {slide.subtitle && (
                <p className="text-lg md:text-xl text-softgray font-montserrat font-light">
                  {slide.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-richblack/50 hover:bg-richblack/80 transition-colors p-2 rounded-full backdrop-blur-sm text-purewhite z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-richblack/50 hover:bg-richblack/80 transition-colors p-2 rounded-full backdrop-blur-sm text-purewhite z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-12 h-1 transition-all duration-300',
              currentSlide === index ? 'bg-vibrantred' : 'bg-purewhite/50 hover:bg-purewhite'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
