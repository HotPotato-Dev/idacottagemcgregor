import { useState } from "react";
import { galleryImages } from "@/lib/utils";
import Lightbox from "@/components/Lightbox";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Gallery
              </h1>
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

      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
