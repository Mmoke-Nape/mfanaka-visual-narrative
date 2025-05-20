
import React, { useEffect, useState, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';

const achievements = [
  { number: 1, text: "NYC Billboard" },
  { number: 3, text: "SA Billboards" },
  { number: 5, text: "TV Features" },
  { number: 15, text: "Magazine Features" },
  { number: 25, text: "Brand Collaborations" },
  { number: 50, text: "Fashion Editorials" },
];

const About: React.FC = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<number, number>>({});
  const countersAnimated = useRef<boolean>(false);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // If it's a counter element and we haven't animated yet, trigger counter animation
          if (entry.target.classList.contains('achievements-section') && !countersAnimated.current) {
            animateCounters();
            countersAnimated.current = true;
          }
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.staggered-animation, .achievements-section').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.staggered-animation, .achievements-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Achievement number animation
  const animateCounters = () => {
    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // Animation frame duration (60fps)
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const newNumbers: Record<number, number> = {};
    
    // Initialize all counters to 0
    achievements.forEach((achievement, index) => {
      newNumbers[index] = 0;
    });
    setAnimatedNumbers(newNumbers);
    
    // Animation loop
    const counter = setInterval(() => {
      frame++;
      
      // Calculate progress for this frame
      const progress = frame / totalFrames;
      
      // Update each counter
      const updatedNumbers = {...newNumbers};
      achievements.forEach((achievement, index) => {
        // Calculate current value based on progress
        updatedNumbers[index] = Math.floor(progress * achievement.number);
        
        // If we've reached the target, set it exactly
        if (frame === totalFrames) {
          updatedNumbers[index] = achievement.number;
        }
      });
      
      setAnimatedNumbers(updatedNumbers);
      
      // If we've reached the end of the animation, stop
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    // Cleanup function
    return () => clearInterval(counter);
  };

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-24 pb-16 px-4 bg-charcoal">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-playfair text-center mb-6">About Mfanaka</h1>
          <p className="text-center text-softgray mb-8 max-w-2xl mx-auto">
            Bold portraiture, dramatic lighting, and luxury aesthetics
          </p>
        </div>
      </section>
      
      {/* Biography */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center staggered-animation">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605464315513-c5457a3a5533" 
                alt="Mfanaka Ka Maluleke" 
                className="w-full rounded-sm"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-playfair mb-6">The Photographer</h2>
              <p className="text-softgray mb-4">
                Mfanaka Ka Maluleke is an acclaimed South African fashion photographer known for his bold portraiture, dramatic lighting techniques, and luxury aesthetic. Based between Pretoria and Johannesburg, his work has been featured in major publications and advertising campaigns across South Africa and internationally.
              </p>
              <p className="text-softgray mb-4">
                With a background in fine art and a passion for fashion, Mfanaka brings a unique perspective to his photography. His signature style combines striking composition, rich contrasts, and an ability to capture authentic emotion within highly stylized settings.
              </p>
              <p className="text-softgray">
                Mfanaka's work has been recognized with multiple awards, and his photographs have appeared on billboards in New York City and across South Africa. His client list includes luxury brands, major magazines, and celebrated artists.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy - This is the black box section */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-playfair mb-6">Philosophy</h2>
          <div className="bg-richblack p-8 rounded-sm mb-8">
            <p className="text-xl text-purewhite italic font-playfair mb-6">
              "My work is about finding the extraordinary within people. I use light and shadow to reveal character, to celebrate individuality, and to create images that stand the test of time."
            </p>
            <p className="text-softgray">
              — Mfanaka Ka Maluleke
            </p>
          </div>
          <p className="text-softgray">
            Every photoshoot is approached as a creative collaboration, with meticulous attention to detail from concept development through to the final image. Mfanaka's work combines technical excellence with artistic vision, creating photographs that are both commercially impactful and artistically significant.
          </p>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 px-4 achievements-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair text-center mb-12">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {achievements.map((item, index) => (
              <div key={index} className="py-4">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-vibrantred mb-2">
                  {(animatedNumbers[index] !== undefined ? animatedNumbers[index] : 0)}+
                </div>
                <div className="text-softgray font-montserrat">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair text-center mb-12">Career Highlights</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-vibrantred font-bold">2023</div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">NYC Billboard Campaign</h3>
                <p className="text-softgray">
                  Featured photographer for international luxury brand campaign displayed in Times Square.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-vibrantred font-bold">2022</div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">Vogue Feature</h3>
                <p className="text-softgray">
                  Eight-page editorial spread in Vogue showcasing emerging South African designers.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-vibrantred font-bold">2020</div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">National Portrait Award</h3>
                <p className="text-softgray">
                  First place in the prestigious South African Portrait Photography Awards.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-vibrantred font-bold">2018</div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">Studio Launch</h3>
                <p className="text-softgray">
                  Opened flagship studio in Johannesburg with exhibition featuring 30 signature works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-6">Let's Create Together</h2>
          <p className="text-softgray mb-8 max-w-2xl mx-auto">
            Interested in working with Mfanaka for your next project? Get in touch to discuss how we can bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-vibrantred text-vibrantred hover:bg-vibrantred hover:text-purewhite transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium"
          >
            Contact Mfanaka
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
