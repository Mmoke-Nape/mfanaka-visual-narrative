
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Fashion Editorial",
    description: "Magazine and online fashion editorials with full creative direction.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    pricing: "From R15,000",
    features: [
      "Full-day photoshoot",
      "Professional styling consultation",
      "10-15 retouched images",
      "Digital and print formats",
    ]
  },
  {
    title: "Commercial Campaign",
    description: "Advertising and marketing imagery for brands and products.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    pricing: "From R25,000",
    features: [
      "Concept development",
      "Location scouting",
      "Full production team",
      "Commercial usage rights",
      "15-20 retouched images",
    ]
  },
  {
    title: "Portrait Session",
    description: "Artistic portraits for individuals, performers, and professionals.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    pricing: "From R5,000",
    features: [
      "3-hour studio session",
      "Makeup artist",
      "5 retouched images",
      "Digital delivery",
    ]
  },
  {
    title: "Lookbook & E-Commerce",
    description: "Product-focused photography for catalogs and online stores.",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217",
    pricing: "From R10,000",
    features: [
      "High volume capabilities",
      "Consistent styling",
      "Quick turnaround",
      "Web-optimized formats",
    ]
  },
];

const Services: React.FC = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-playfair text-center mb-6">Services</h1>
          <p className="text-center text-softgray mb-8 max-w-2xl mx-auto">
            Professional photography services with Mfanaka's signature bold portraiture and dramatic lighting
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="border border-charcoal bg-richblack transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-playfair">{service.title}</h3>
                    <div className="text-vibrantred font-montserrat font-medium">{service.pricing}</div>
                  </div>
                  <p className="text-softgray mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-vibrantred mr-2">•</span>
                        <span className="text-softgray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-block w-full text-center px-6 py-3 bg-charcoal hover:bg-vibrantred transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium text-sm"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 px-4 bg-charcoal mt-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair text-center mb-12">The Process</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 rounded-full bg-vibrantred text-purewhite flex items-center justify-center text-2xl font-playfair mx-auto">
                  1
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">Consultation</h3>
                <p className="text-softgray">
                  We begin with an in-depth consultation to understand your vision, goals, and expectations. This helps us tailor the perfect photography experience for your specific needs.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 rounded-full bg-vibrantred text-purewhite flex items-center justify-center text-2xl font-playfair mx-auto">
                  2
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">Creative Direction</h3>
                <p className="text-softgray">
                  Our team develops a creative concept including mood boards, location options, styling recommendations, and technical planning to bring your vision to life.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 rounded-full bg-vibrantred text-purewhite flex items-center justify-center text-2xl font-playfair mx-auto">
                  3
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">Production</h3>
                <p className="text-softgray">
                  On the day of the shoot, our experienced team handles every aspect of production, ensuring a smooth and professional experience with Mfanaka's signature lighting techniques.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 text-center">
                <div className="w-16 h-16 rounded-full bg-vibrantred text-purewhite flex items-center justify-center text-2xl font-playfair mx-auto">
                  4
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-playfair mb-2">Post-Production</h3>
                <p className="text-softgray">
                  After the shoot, we carefully select the best images and apply professional retouching to ensure each photograph meets our high standards before delivering the final collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-charcoal pb-6">
              <h3 className="text-xl font-playfair mb-2">How far in advance should I book?</h3>
              <p className="text-softgray">
                For commercial projects and campaigns, we recommend booking at least 4-6 weeks in advance. Portrait sessions can often be accommodated with 2-3 weeks' notice, depending on availability.
              </p>
            </div>
            
            <div className="border-b border-charcoal pb-6">
              <h3 className="text-xl font-playfair mb-2">Do you travel for photoshoots?</h3>
              <p className="text-softgray">
                Yes, Mfanaka is available for projects throughout South Africa and internationally. Travel and accommodation fees apply for locations outside of the Pretoria/Johannesburg area.
              </p>
            </div>
            
            <div className="border-b border-charcoal pb-6">
              <h3 className="text-xl font-playfair mb-2">What is your turnaround time?</h3>
              <p className="text-softgray">
                Standard turnaround time is 2-3 weeks for fully retouched images. Rush delivery can be arranged for an additional fee, with turnaround in as little as 3-5 business days.
              </p>
            </div>
            
            <div className="border-b border-charcoal pb-6">
              <h3 className="text-xl font-playfair mb-2">Do you provide raw, unedited images?</h3>
              <p className="text-softgray">
                No, we do not provide raw or unedited images. Each photograph delivered is carefully selected and professionally retouched to maintain Mfanaka's signature aesthetic and quality standards.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-xl font-playfair mb-2">What payment methods do you accept?</h3>
              <p className="text-softgray">
                We accept bank transfers, major credit cards, and selected mobile payment platforms. Commercial projects require a 50% deposit to secure the booking, with the balance due upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-vibrantred text-purewhite">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Ready to Book Your Session?</h2>
          <p className="max-w-2xl mx-auto mb-8 font-montserrat">
            Contact us today to discuss your project and reserve your photoshoot with Mfanaka.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-purewhite text-purewhite hover:bg-purewhite hover:text-vibrantred transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium"
          >
            Book Now
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
