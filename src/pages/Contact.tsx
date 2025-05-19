
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';

// Service options
const serviceOptions = [
  { id: 'fashion', name: 'Fashion Editorial' },
  { id: 'commercial', name: 'Commercial Campaign' },
  { id: 'portrait', name: 'Portrait Session' },
  { id: 'lookbook', name: 'Lookbook & E-Commerce' },
  { id: 'other', name: 'Other / Custom' },
];

// Location options
const locationOptions = [
  { id: 'pta', name: 'Pretoria Studio' },
  { id: 'jhb', name: 'Johannesburg Studio' },
  { id: 'other', name: 'Other Location' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: 'pta',
    date: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
  };
  
  const handleLocationSelect = (locationId: string) => {
    setFormData(prev => ({ ...prev, location: locationId }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Thank you for your message. We will be in touch soon!' });
    
    // Reset form after successful submission
    if (formStatus?.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: 'pta',
        date: '',
        message: '',
      });
    }
  };

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-playfair text-center mb-6">Contact & Booking</h1>
          <p className="text-center text-softgray mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your project or book a photography session with Mfanaka
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 border border-charcoal">
              <h3 className="text-xl font-playfair mb-3">Email</h3>
              <p className="text-softgray">info@mfanaka.com</p>
              <p className="text-softgray">bookings@mfanaka.com</p>
            </div>
            
            <div className="text-center p-6 border border-charcoal">
              <h3 className="text-xl font-playfair mb-3">Phone</h3>
              <p className="text-softgray">+27 (0) 71 234 5678</p>
              <p className="text-softgray">Mon-Fri, 9am-5pm</p>
            </div>
            
            <div className="text-center p-6 border border-charcoal">
              <h3 className="text-xl font-playfair mb-3">Studios</h3>
              <p className="text-softgray">Pretoria: 123 Brooklyn Rd</p>
              <p className="text-softgray">Johannesburg: 45 Rosebank Ave</p>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="bg-charcoal p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-playfair text-center mb-8">Booking Request</h2>
            
            {formStatus?.submitted && (
              <div className={cn(
                'p-4 mb-6 text-center',
                formStatus.success ? 'bg-emeraldgreen/20' : 'bg-vibrantred/20'
              )}>
                <p>{formStatus.message}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-softgray mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-richblack border border-charcoal p-3 text-purewhite focus:border-vibrantred focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-softgray mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-richblack border border-charcoal p-3 text-purewhite focus:border-vibrantred focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-softgray mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-richblack border border-charcoal p-3 text-purewhite focus:border-vibrantred focus:outline-none transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-softgray mb-3">Service Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceOptions.map(option => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleServiceSelect(option.id)}
                      className={cn(
                        'p-3 border text-sm font-medium transition-colors',
                        formData.service === option.id 
                          ? 'border-vibrantred bg-vibrantred/20 text-purewhite'
                          : 'border-charcoal text-softgray hover:text-purewhite hover:border-softgray'
                      )}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-softgray mb-3">Preferred Location</label>
                  <div className="grid grid-cols-2 gap-3">
                    {locationOptions.map(option => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleLocationSelect(option.id)}
                        className={cn(
                          'p-3 border text-sm font-medium transition-colors',
                          formData.location === option.id 
                            ? 'border-vibrantred bg-vibrantred/20 text-purewhite'
                            : 'border-charcoal text-softgray hover:text-purewhite hover:border-softgray'
                        )}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-softgray mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-richblack border border-charcoal p-3 text-purewhite focus:border-vibrantred focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-softgray mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-richblack border border-charcoal p-3 text-purewhite focus:border-vibrantred focus:outline-none transition-colors"
                  placeholder="Tell us about your project, requirements, or any questions you may have..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-vibrantred hover:bg-vibrantred/80 text-purewhite transition-colors duration-300 uppercase tracking-widest font-montserrat font-medium"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-playfair text-center mb-8">Studio Locations</h2>
          
          <div className="aspect-[16/9] bg-charcoal">
            {/* Replace with actual map integration */}
            <div className="h-full flex items-center justify-center">
              <p className="text-softgray">Interactive map would be displayed here</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-playfair mb-3">Pretoria Studio</h3>
              <p className="text-softgray mb-2">123 Brooklyn Road</p>
              <p className="text-softgray mb-2">Brooklyn, Pretoria</p>
              <p className="text-softgray mb-2">0181</p>
              <p className="text-softgray">Monday - Friday, 9am - 5pm</p>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair mb-3">Johannesburg Studio</h3>
              <p className="text-softgray mb-2">45 Rosebank Avenue</p>
              <p className="text-softgray mb-2">Rosebank, Johannesburg</p>
              <p className="text-softgray mb-2">2196</p>
              <p className="text-softgray">By appointment only</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
