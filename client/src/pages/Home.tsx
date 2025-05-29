import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Phone, MessageCircle, Star, Wifi, Car, Coffee, Mountain, TreePine, Leaf, CheckCircle, Bed, Bath, Utensils, Flame, Sun, Zap, Fan, Smartphone, Home, Users, Mail, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Lightbox from "@/components/Lightbox";
import { galleryImages } from "@/lib/utils";
import cottageImage from "@assets/1.jpg";

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Initialize hero animations on page load
    const timer = setTimeout(() => {
      document.querySelectorAll('.hero .fade-in').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const keyFeatures = [
    { icon: Coffee, title: "Tea & Coffee Provided" },
    { icon: Car, title: "Free Secure Parking" },
    { icon: Mountain, title: "Scenic Views" },
    { icon: TreePine, title: "Gravel Road Access" },
    { icon: Leaf, title: "Off-Grid Living" },
  ];

  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      rating: 5,
      text: "Absolutely magical experience! The off-grid setting allowed us to truly disconnect and the goats were such a delightful bonus. The cottage is beautifully designed with everything you need.",
      date: "December 2023"
    },
    {
      name: "Emma Thompson",
      rating: 5, 
      text: "Perfect romantic getaway! The stargazing opportunities are incredible and waking up to the sounds of nature was pure bliss. We'll definitely be back!",
      date: "November 2023"
    },
    {
      name: "David & Lisa Chen",
      rating: 5,
      text: "Exceeded all expectations. The cottage is spotless, the location breathtaking, and the hosts incredibly welcoming. A true gem in the Karoo!",
      date: "October 2023"
    }
  ];

  const blogPosts = [
    {
      title: "Stargazing Guide: Best Times to Visit for Astronomy",
      excerpt: "Discover the optimal seasons and moon phases for incredible stargazing experiences at our dark-sky sanctuary.",
      date: "December 15, 2023",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Meet Our Goat Family: Stories from the Farm",
      excerpt: "Get to know our friendly dairy goats and learn about sustainable farming practices in the Karoo.",
      date: "December 10, 2023", 
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Seasonal Wildflowers: What to Expect Throughout the Year",
      excerpt: "A month-by-month guide to the spectacular wildflower displays in our corner of the Robertson Karoo.",
      date: "December 5, 2023",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const seasonalActivities = {
    Spring: ["Wildflower walks", "Bird watching", "Photography tours", "Goat cheese making"],
    Summer: ["Stargazing evenings", "Swimming in the dam", "Sunset picnics", "Nature meditation"],
    Autumn: ["Harvest activities", "Wine tasting tours", "Hiking adventures", "Farm-to-table dining"],
    Winter: ["Cozy fireside evenings", "Hot chocolate by the stars", "Indoor craft workshops", "Warm farm breakfast"]
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const whatsappNumber = "+27123456789"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in booking a stay at Ida Olive Shepherds Cottage. Could you help me with availability and pricing?";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="hero" className="hero relative min-h-screen flex items-center justify-center hero-parallax bg-gradient-to-b from-black/40 to-black/40" 
        style={{
          backgroundImage: `url(${cottageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 fade-in">
            Secluded Self-Catering Retreat
          </h1>
          <p className="text-xl md:text-2xl mb-4 fade-in font-light">
            On a Working Dairy Goat Farm & Wildlife Sanctuary
          </p>
          <p className="text-lg md:text-xl mb-8 fade-in karoo-gold font-dancing">
            Off-Grid Nature Escape near McGregor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-karoo-brown hover:bg-karoo-chocolate text-white px-8 py-4 text-lg shadow-lg"
            >
              Book Your Escape
            </Button>
            <Button 
              onClick={() => document.getElementById('accommodation')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-karoo-slate px-8 py-4 text-lg"
            >
              Explore the Cottage
            </Button>
          </div>
        </div>
        
        {/* WhatsApp Float Button */}
        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} />
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center fade-in">
                <div className="bg-karoo-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Rustic cottage interior with fireplace" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-6">
                  Reconnect with Nature
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Nestled 6km outside McGregor, surrounded by the enchanting Robertson Succulent Karoo, Ida Olive Shepherds Cottage offers a truly unique off-grid experience. Our secluded retreat sits near a shallow dam, where indigenous vegetation and wildlife create a natural sanctuary.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Large glass sliding doors and windows seamlessly connect you with the surrounding nature, while thoughtful amenities ensure your comfort during this authentic farm experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center karoo-green">
                    <CheckCircle className="mr-2" size={20} />
                    <span className="font-medium">Working Dairy Goat Farm</span>
                  </div>
                  <div className="flex items-center karoo-green">
                    <CheckCircle className="mr-2" size={20} />
                    <span className="font-medium">Wildlife Sanctuary</span>
                  </div>
                  <div className="flex items-center karoo-green">
                    <CheckCircle className="mr-2" size={20} />
                    <span className="font-medium">Indigenous Vegetation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Your Off-Grid Sanctuary
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience authentic off-grid living with all the comforts you need for a peaceful retreat
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white shadow-lg fade-in">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-karoo-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Bed size={24} />
                    </div>
                    <CardTitle className="karoo-brown">Bedrooms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Bed className="karoo-gold mr-3 mt-1" size={20} />
                      <div><strong>Main Bedroom:</strong> King-size bed with stunning views</div>
                    </div>
                    <div className="flex items-start">
                      <Bed className="karoo-gold mr-3 mt-1" size={20} />
                      <div><strong>Second Bedroom:</strong> Queen-size bed for additional guests</div>
                    </div>
                    <div className="flex items-start">
                      <Bath className="karoo-green mr-3 mt-1" size={20} />
                      <div>Premium bedding, linen, and towels provided</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg fade-in">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-karoo-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Bath size={24} />
                    </div>
                    <CardTitle className="karoo-brown">Bathroom & Amenities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Bath className="karoo-gold mr-3 mt-1" size={20} />
                      <div>Indoor and outdoor shower experiences</div>
                    </div>
                    <div className="flex items-start">
                      <Bath className="karoo-gold mr-3 mt-1" size={20} />
                      <div>Relaxing bath for unwinding after adventures</div>
                    </div>
                    <div className="flex items-start">
                      <Bath className="karoo-green mr-3 mt-1" size={20} />
                      <div>Select toiletries and essentials provided</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Gallery
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get a glimpse of your peaceful retreat and the stunning natural surroundings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="fade-in overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover gallery-image cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => openLightbox(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Seasonal Recommendations */}
      <section id="activities" className="py-20 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Adventures & Experiences
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover seasonal activities and the magic of farm life in the Robertson Karoo
              </p>
            </div>
            
            <Tabs defaultValue="Spring" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {Object.keys(seasonalActivities).map((season) => (
                  <TabsTrigger key={season} value={season} className="text-karoo-brown">
                    {season}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(seasonalActivities).map(([season, activities]) => (
                <TabsContent key={season} value={season}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {activities.map((activity, index) => (
                      <Card key={index} className="bg-white shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <div className="bg-karoo-green text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                              <CheckCircle size={20} />
                            </div>
                            <h3 className="font-semibold karoo-brown">{activity}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Guest Stories
              </h2>
              <p className="text-xl text-gray-700">
                Hear what our guests say about their stay
              </p>
            </div>
            
            <div className="relative">
              <Card className="bg-karoo-sand shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-karoo-gold fill-current" size={24} />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <cite className="text-karoo-brown font-semibold">
                    {testimonials[currentTestimonial].name}
                  </cite>
                  <p className="text-gray-500 text-sm mt-2">
                    {testimonials[currentTestimonial].date}
                  </p>
                </CardContent>
              </Card>
              
              {testimonials.length > 1 && (
                <>
                  <Button
                    onClick={prevTestimonial}
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </>
              )}
              
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                      index === currentTestimonial ? 'bg-karoo-brown' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & News Section */}
      <section id="blog" className="py-20 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Farm Life & Local Insights
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay updated with farm happenings, local attractions, and seasonal highlights
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow fade-in">
                  <div className="overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-karoo-green text-sm mb-2">{post.date}</p>
                    <h3 className="text-lg font-bold karoo-brown mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" size="sm" className="text-karoo-brown border-karoo-brown hover:bg-karoo-brown hover:text-white">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Find Us
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Located 6km outside McGregor in the heart of the Robertson Succulent Karoo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="karoo-green mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold karoo-brown mb-2">Address</h3>
                      <p className="text-gray-700">
                        Giddy Goat Farm<br/>
                        6km outside McGregor<br/>
                        Robertson Succulent Karoo<br/>
                        Western Cape, South Africa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Car className="karoo-green mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold karoo-brown mb-2">Directions</h3>
                      <p className="text-gray-700">
                        Accessible via gravel road. GPS coordinates available upon booking.
                        Free secure parking on-site.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="karoo-green mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold karoo-brown mb-2">Contact</h3>
                      <p className="text-gray-700">
                        Phone: +27 (0)23 625 1234<br/>
                        Email: info@idaolivecottage.co.za
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-96 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.123456789!2d19.8666667!3d-33.9333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU2JzAwLjAiUyAxOcKwNTInMDAuMCJF!5e0!3m2!1sen!2sza!4v1609459200000!5m2!1sen!2sza"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ida Olive Shepherds Cottage Location"
                    />
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                      <div className="flex items-center">
                        <MapPin className="text-karoo-green mr-2" size={20} />
                        <div>
                          <p className="font-bold text-sm">Ida Olive Shepherds Cottage</p>
                          <p className="text-xs text-gray-600">6km from McGregor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-karoo-sand">
                    <h4 className="font-bold karoo-brown mb-2">Getting There</h4>
                    <p className="text-sm text-gray-700">
                      Located in the beautiful Robertson Succulent Karoo, approximately 6km outside McGregor via gravel road. GPS coordinates provided upon booking confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Book Your Escape
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Ready to disconnect from the world and reconnect with nature? Get in touch to check availability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in">
                <ContactForm />
              </div>
              
              <div className="fade-in">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="karoo-brown flex items-center">
                      <Calendar className="mr-2" size={24} />
                      Rates & Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Weekend Rate:</span>
                          <span className="karoo-brown font-bold">R2,500/night</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Weekday Rate:</span>
                          <span className="karoo-brown font-bold">R2,000/night</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Minimum Stay:</span>
                          <span>2 nights</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Max Guests:</span>
                          <span>4 people</span>
                        </div>
                      </div>
                      
                      <div className="bg-karoo-sand p-4 rounded-lg">
                        <h4 className="font-bold karoo-brown mb-2">Booking Process</h4>
                        <p className="text-gray-700 text-sm">
                          Contact us directly to check availability and secure your dates. We'll guide you through the simple booking process.
                        </p>
                      </div>
                      
                      <Button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-karoo-brown hover:bg-karoo-chocolate text-white"
                      >
                        Contact Us to Book
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Have questions or ready to book your retreat? We're here to help plan your perfect getaway.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="fade-in">
                <ContactForm />
              </div>
              
              <div className="fade-in space-y-8">
                <Card className="bg-karoo-sand shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold karoo-brown mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="karoo-green mr-3 mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-700">+27 (0)23 625 1234</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="karoo-green mr-3 mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-700">info@idaolivecottage.co.za</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="karoo-green mr-3 mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-gray-700">Giddy Goat Farm, 6km outside McGregor</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold karoo-brown mb-4">Quick Response</h3>
                    <p className="text-gray-700 mb-4">
                      For immediate assistance or quick questions about availability, reach out via WhatsApp.
                    </p>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp Us
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
