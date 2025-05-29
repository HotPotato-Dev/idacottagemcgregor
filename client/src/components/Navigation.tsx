import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { sectionId: "about", label: "About" },
    { sectionId: "accommodation", label: "Accommodation" },
    { sectionId: "activities", label: "Activities" },
    { sectionId: "gallery", label: "Gallery" },
    { sectionId: "blog", label: "Blog" },
    { sectionId: "location", label: "Location" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 nav-shadow ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-playfair font-bold karoo-brown cursor-pointer">
                Ida Olive Shepherds Cottage
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="karoo-slate hover:karoo-brown transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-karoo-brown hover:bg-karoo-chocolate text-white"
            >
              Book Your Escape
            </Button>
            <Link href="/admin">
              <Button variant="outline" size="sm" className="text-xs">
                Admin
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="karoo-slate"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left py-2 karoo-slate hover:karoo-brown transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('booking')}
                className="w-full bg-karoo-brown hover:bg-karoo-chocolate text-white my-2"
              >
                Book Your Escape
              </Button>
              <Link href="/admin">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
