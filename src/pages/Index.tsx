
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import HeroCarousel from '@/components/HeroCarousel';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
    alt: "Fashion model in dramatic lighting",
    title: "Mfanaka Ka Maluleke",
    subtitle: "Fashion Photographer"
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    alt: "Portrait with red lighting",
    subtitle: "Bold Portraiture. Dramatic Lighting. Luxury Aesthetics."
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    alt: "Fashion editorial photograph",
  },
];

// Featured portfolio items
const featuredWorks = [
  {
    id: 1,
    title: "Vogue Editorial",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
  },
  {
    id: 2,
    title: "Luxury Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1596440514538-96e730624ce1",
  },
  {
    id: 3,
    title: "Artist Portrait Series",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
  },
];

const achievements = [
  { number: 1, text: "NYC Billboard" },
  { number: 3, text: "SA Billboards" },
  { number: 5, text: "TV Features" },
  { number: 15, text: "Magazine Features" },
];

const Index: React.FC = () => {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.staggered-animation').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.staggered-animation').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroCarousel slides={heroSlides} />
      
      {/* Featured Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-2">Featured Works</h2>
          <p className="text-center text-softgray mb-12 max-w-2xl mx-auto">
            A selection of signature photographs showcasing bold portraiture and dramatic lighting
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animation">
            {featuredWorks.map((work) => (
              <div key={work.id} className="image-hover rounded-sm overflow-hidden">
                <AspectRatio ratio={3/4}>
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="overlay">
                  <h3 className="text-xl font-playfair">{work.title}</h3>
                  <p className="text-softgray text-sm">{work.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-block px-8 py-3 border-2 border-vibrantred text-vibrantred hover:bg-vibrantred hover:text-purewhite transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((item, index) => (
              <div key={index} className="py-4">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-vibrantred mb-2">
                  {item.number}+
                </div>
                <div className="text-softgray font-montserrat">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Intro Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12 staggered-animation">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605464315513-c5457a3a5533" 
                alt="Mfanaka Ka Maluleke" 
                className="w-full rounded-sm"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Mfanaka Ka Maluleke</h2>
              <p className="text-softgray mb-6">
                Acclaimed South African fashion photographer known for bold portraiture, dramatic lighting, and luxury aesthetics.
              </p>
              <Link 
                to="/about" 
                className="inline-block text-vibrantred hover:text-purewhite nav-link relative overflow-hidden group"
              >
                Learn More
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrantred transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-vibrantred text-purewhite">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Ready to Collaborate?</h2>
          <p className="max-w-2xl mx-auto mb-8 font-montserrat">
            Let's create stunning imagery that captures your vision with bold portraiture and dramatic lighting.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-purewhite text-purewhite hover:bg-purewhite hover:text-vibrantred transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
