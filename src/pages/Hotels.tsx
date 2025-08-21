import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import { Star, MapPin, Wifi, Car, Coffee, Waves } from "lucide-react";
import hotelImage from "@/assets/hotel-luxury.jpg";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Ocean View Resort & Spa",
      location: "Maldives",
      image: hotelImage,
      rating: 4.9,
      reviews: 1248,
      price: 450,
      originalPrice: 600,
      amenities: ["Free WiFi", "Pool", "Spa", "Beach Access"],
      description: "Luxury beachfront resort with stunning ocean views and world-class amenities.",
    },
    {
      id: 2,
      name: "Mountain Lodge Retreat",
      location: "Swiss Alps",
      image: hotelImage,
      rating: 4.8,
      reviews: 892,
      price: 380,
      originalPrice: 480,
      amenities: ["Free WiFi", "Restaurant", "Ski Access", "Spa"],
      description: "Cozy mountain retreat perfect for adventure seekers and nature lovers.",
    },
    {
      id: 3,
      name: "City Center Grand Hotel",
      location: "Paris, France",
      image: hotelImage,
      rating: 4.7,
      reviews: 2156,
      price: 320,
      originalPrice: 420,
      amenities: ["Free WiFi", "Gym", "Restaurant", "City Center"],
      description: "Elegant hotel in the heart of Paris, walking distance to major attractions.",
    },
    {
      id: 4,
      name: "Tropical Paradise Resort",
      location: "Bali, Indonesia",
      image: hotelImage,
      rating: 4.9,
      reviews: 1567,
      price: 280,
      originalPrice: 350,
      amenities: ["Free WiFi", "Pool", "Beach", "Spa"],
      description: "Serene tropical resort surrounded by lush gardens and pristine beaches.",
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "free wifi":
        return <Wifi className="h-4 w-4" />;
      case "pool":
        return <Waves className="h-4 w-4" />;
      case "restaurant":
        return <Coffee className="h-4 w-4" />;
      case "ski access":
      case "city center":
        return <MapPin className="h-4 w-4" />;
      default:
        return <Car className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-sky text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Hotel</h1>
            <p className="text-xl text-white/90">Discover amazing places to stay around the world</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SearchBar type="hotels" />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Hotels</h2>
            <p className="text-muted-foreground">{hotels.length} properties found</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-primary">
                          Save ${hotel.originalPrice - hotel.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold mb-1">{hotel.name}</h3>
                      <div className="flex items-center gap-1 text-right">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{hotel.rating}</span>
                        <span className="text-sm text-muted-foreground">({hotel.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{hotel.location}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{hotel.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-1 text-xs text-muted-foreground">
                          {getAmenityIcon(amenity)}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">${hotel.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${hotel.originalPrice}</span>
                        <span className="text-sm text-muted-foreground">per night</span>
                      </div>
                      <Button className="bg-gradient-ocean hover:shadow-medium transition-all duration-300">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;