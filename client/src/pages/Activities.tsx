import { Home, MapPin } from "lucide-react";

export default function Activities() {
  const onSiteActivities = [
    {
      image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      title: "Goat Experiences",
      description: "Meet our friendly dairy goats and enjoy fresh cheese tasting sessions"
    },
    {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      title: "Nature Activities",
      description: "Hiking trails, birdwatching, bush walks, and guided walking tours"
    },
    {
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      title: "Stargazing",
      description: "Experience the incredible night sky with minimal light pollution"
    }
  ];

  const nearbyActivities = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      title: "Outdoor Sports",
      description: "Mountain biking routes, fishing spots, and horse riding adventures"
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      title: "Wine Tasting",
      description: "Explore local wine estates and taste regional specialties"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
      title: "McGregor Village",
      description: "Restaurants, craft shops, theatre, tea gardens, and local pubs"
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
                Adventures & Experiences
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover the magic of farm life and explore the natural wonders of the Robertson Karoo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* On-Site Activities */}
              <div className="fade-in">
                <div className="bg-karoo-sand rounded-2xl p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-karoo-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Home size={24} />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold karoo-brown">On-Site Experiences</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {onSiteActivities.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-20 h-16 object-cover rounded-lg mr-4 flex-shrink-0"
                        />
                        <div>
                          <h3 className="font-bold karoo-chocolate mb-2">{activity.title}</h3>
                          <p className="text-gray-700">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Nearby Activities */}
              <div className="fade-in">
                <div className="bg-karoo-sand rounded-2xl p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-karoo-chocolate text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MapPin size={24} />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold karoo-brown">Nearby Adventures</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {nearbyActivities.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-20 h-16 object-cover rounded-lg mr-4 flex-shrink-0"
                        />
                        <div>
                          <h3 className="font-bold karoo-chocolate mb-2">{activity.title}</h3>
                          <p className="text-gray-700">{activity.description}</p>
                        </div>
                      </div>
                    ))}
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
