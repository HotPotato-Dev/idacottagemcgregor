import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('cookiesAccepted')) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-karoo-brown text-white p-4 z-50 transform transition-transform duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-2 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-2">
          <Button 
            onClick={acceptCookies}
            className="bg-karoo-gold text-karoo-slate hover:bg-yellow-500"
            size="sm"
          >
            Accept
          </Button>
          <Button 
            onClick={declineCookies}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-karoo-brown"
            size="sm"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
