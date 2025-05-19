
import React, { useState, useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "NYC Fashion Week",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    height: 450,
  },
  {
    id: 2,
    title: "Luxury Brand Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    height: 350,
  },
  {
    id: 3,
    title: "Artist Portrait Series",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    height: 500,
  },
  {
    id: 4,
    title: "Vogue Editorial",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1588117260148-b47818741c74",
    height: 400,
  },
  {
    id: 5,
    title: "Beauty Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69",
    height: 300,
  },
  {
    id: 6,
    title: "High Fashion Series",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
    height: 450,
  },
  {
    id: 7,
    title: "Magazine Cover Story",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    height: 550,
  },
  {
    id: 8,
    title: "Celebrity Portraits",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    height: 400,
  },
  {
    id: 9,
    title: "Jewelry Collection",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1596440514438-b95ef31ef418",
    height: 350,
  },
];

const categories = ["All", "Fashion", "Editorial", "Portrait", "Commercial"];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const masonryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  useEffect(() => {
    // Simple masonry layout with resizing
    const resizeMasonryItem = (item: HTMLElement) => {
      const grid = masonryRef.current;
      const rowGap = parseInt(window.getComputedStyle(grid!).getPropertyValue('grid-row-gap'));
      const rowHeight = parseInt(window.getComputedStyle(grid!).getPropertyValue('grid-auto-rows'));
      
      const img = item.querySelector('img');
      if (img && img.complete) {
        const itemHeight = img.getBoundingClientRect().height;
        const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${rowSpan}`;
      }
    };
    
    const resizeAllMasonryItems = () => {
      const allItems = document.querySelectorAll('.masonry-item');
      allItems.forEach(item => {
        resizeMasonryItem(item as HTMLElement);
      });
    };
    
    // Initial load and resize handling
    resizeAllMasonryItems();
    window.addEventListener('resize', resizeAllMasonryItems);
    
    // Handle image load events
    const imgElements = document.querySelectorAll('.masonry-item img');
    imgElements.forEach(img => {
      if (img.complete) {
        resizeMasonryItem(img.parentElement as HTMLElement);
      } else {
        img.addEventListener('load', () => {
          resizeMasonryItem(img.parentElement as HTMLElement);
        });
      }
    });
    
    return () => {
      window.removeEventListener('resize', resizeAllMasonryItems);
    };
  }, [filteredItems]);
  
  const openLightbox = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  return (
    <PageLayout>
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-playfair text-center mb-2">Portfolio</h1>
          <p className="text-center text-softgray mb-12 max-w-2xl mx-auto">
            A curated collection of bold portraiture and dramatic fashion photography
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 font-montserrat text-sm uppercase tracking-widest transition-colors',
                  activeCategory === category 
                    ? 'bg-vibrantred text-purewhite'
                    : 'bg-charcoal text-softgray hover:text-purewhite'
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Masonry Grid */}
          <div 
            ref={masonryRef}
            className="masonry-grid"
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="masonry-item image-hover cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto"
                />
                <div className="overlay">
                  <h3 className="text-xl font-playfair">{item.title}</h3>
                  <p className="text-softgray text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-softgray">No items found in this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-richblack/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-richblack/80 p-4">
              <h3 className="text-xl font-playfair">{selectedItem.title}</h3>
              <p className="text-softgray">{selectedItem.category}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-purewhite hover:text-vibrantred"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Portfolio;
