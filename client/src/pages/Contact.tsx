import { MapPin, Phone, Mail, Globe, AlertTriangle, Droplets, Signal, CreditCard, Fan } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Giddy Goat Farm\n6km outside McGregor\nRobertson Succulent Karoo"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+27 (0)23 625 1234"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "info@idaolivecottage.co.za"
    },
    {
      icon: Globe,
      title: "Languages",
      content: "English, Afrikaans"
    }
  ];

  const importantNotes = [
    {
      icon: Droplets,
      text: "Please bring your own drinking water",
      color: "text-blue-500"
    },
    {
      icon: Signal,
      text: "Limited mobile signal - available in certain spots",
      color: "text-yellow-500"
    },
    {
      icon: CreditCard,
      text: "Electronic bank transfer accepted",
      color: "text-green-500"
    },
    {
      icon: Fan,
      text: "Cleaning service available by arrangement",
      color: "karoo-green"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Book Your Escape
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Ready to disconnect from the world and reconnect with nature? Get in touch to check availability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="fade-in">
                <ContactForm />
              </div>
              
              {/* Contact Info */}
              <div className="fade-in">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-playfair font-bold karoo-brown mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-karoo-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <info.icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold karoo-chocolate mb-2">{info.title}</h3>
                            <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Important Notes */}
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="font-bold karoo-brown mb-4 flex items-center">
                      <AlertTriangle className="mr-2" size={20} />
                      Important Notes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {importantNotes.map((note, index) => (
                        <li key={index} className="flex items-start">
                          <note.icon className={`${note.color} mr-2 mt-1 flex-shrink-0`} size={16} />
                          <span>{note.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
