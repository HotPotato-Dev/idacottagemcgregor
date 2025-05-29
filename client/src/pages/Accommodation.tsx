import { Bed, Bath, Utensils, Flame, Sun, Zap, Fan, Smartphone, Car } from "lucide-react";

export default function Accommodation() {
  const bedrooms = [
    {
      icon: Bed,
      title: "Main Bedroom",
      description: "King-size bed with stunning views",
      highlight: "King-size bed"
    },
    {
      icon: Bed,
      title: "Second Bedroom",
      description: "Queen-size bed for additional guests",
      highlight: "Queen-size bed"
    }
  ];

  const offGridFeatures = [
    {
      category: "Kitchen & Dining",
      items: [
        { icon: Flame, text: "Gas stove and refrigerator" },
        { icon: Utensils, text: "Tea and coffee provided" },
        { icon: Utensils, text: "Open-plan lounge/kitchen design" }
      ]
    },
    {
      category: "Lighting & Power",
      items: [
        { icon: Sun, text: "Solar lamps and fairy lights" },
        { icon: Flame, text: "Romantic candle lighting" },
        { icon: Zap, text: "Mini solar panel for USB devices" }
      ]
    },
    {
      category: "Comfort Features",
      items: [
        { icon: Flame, text: "Indoor fireplace for cozy evenings" },
        { icon: Fan, text: "USB fans for comfort" },
        { icon: Smartphone, text: "Phone charging capability" }
      ]
    },
    {
      category: "Outdoor Cooking",
      items: [
        { icon: Flame, text: "Boma-style braai area" },
        { icon: Utensils, text: "Gas braai on verandah" },
        { icon: Car, text: "Outdoor dining with nature views" }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-karoo-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold karoo-brown mb-4">
                Your Off-Grid Sanctuary
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience authentic off-grid living with all the comforts you need for a peaceful retreat
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Bedroom Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-karoo-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Bed size={24} />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold karoo-brown">Bedrooms</h2>
                </div>
                <div className="space-y-6">
                  {bedrooms.map((bedroom, index) => (
                    <div key={index} className="flex items-start">
                      <div className="karoo-gold mr-3 mt-1">
                        <bedroom.icon size={20} />
                      </div>
                      <div>
                        <strong>{bedroom.title}:</strong> {bedroom.description}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start">
                    <div className="karoo-green mr-3 mt-1">
                      <Bath size={20} />
                    </div>
                    <div>Premium bedding, linen, and towels provided</div>
                  </div>
                </div>
              </div>
              
              {/* Bathroom & Amenities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-karoo-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Bath size={24} />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold karoo-brown">Bathroom</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="karoo-gold mr-3 mt-1">
                      <Bath size={20} />
                    </div>
                    <div>Indoor and outdoor shower experiences</div>
                  </li>
                  <li className="flex items-start">
                    <div className="karoo-gold mr-3 mt-1">
                      <Bath size={20} />
                    </div>
                    <div>Relaxing bath for unwinding after adventures</div>
                  </li>
                  <li className="flex items-start">
                    <div className="karoo-green mr-3 mt-1">
                      <Bath size={20} />
                    </div>
                    <div>Select toiletries and essentials provided</div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Off-Grid Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in">
              <div className="flex items-center mb-8">
                <div className="bg-karoo-brown text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Flame size={24} />
                </div>
                <h2 className="text-2xl font-playfair font-bold karoo-brown">Off-Grid Living Features</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {offGridFeatures.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg mb-4 karoo-chocolate">{section.category}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <item.icon className="karoo-sunset mr-3" size={16} />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
