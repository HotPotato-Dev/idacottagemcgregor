import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-karoo-slate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-playfair font-bold mb-4">Ida Olive Shepherds Cottage</h3>
              <p className="text-gray-300 mb-4">
                Your off-grid sanctuary on Giddy Goat Farm. Reconnect with nature in the heart of the Robertson Succulent Karoo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:karoo-gold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:karoo-gold transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/accommodation">
                    <span className="text-gray-300 hover:karoo-gold transition-colors cursor-pointer">Accommodation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/activities">
                    <span className="text-gray-300 hover:karoo-gold transition-colors cursor-pointer">Activities</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <span className="text-gray-300 hover:karoo-gold transition-colors cursor-pointer">Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-gray-300 hover:karoo-gold transition-colors cursor-pointer">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:karoo-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:karoo-gold transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:karoo-gold transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:karoo-gold transition-colors">Cancellation Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 Ida Olive Shepherds Cottage. All rights reserved. | 
              <span className="font-dancing karoo-gold ml-2">Reconnect with Nature</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
