import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import { Plane, Clock, ArrowRight } from "lucide-react";

const Flights = () => {
  const flights = [
    {
      id: 1,
      airline: "SkyWings Airlines",
      departure: {
        time: "08:30",
        airport: "JFK",
        city: "New York",
      },
      arrival: {
        time: "21:45",
        airport: "CDG",
        city: "Paris",
      },
      duration: "7h 15m",
      stops: 0,
      price: 650,
      originalPrice: 780,
      class: "Economy",
    },
    {
      id: 2,
      airline: "Ocean Air",
      departure: {
        time: "14:20",
        airport: "JFK",
        city: "New York",
      },
      arrival: {
        time: "04:35",
        airport: "CDG",
        city: "Paris",
      },
      duration: "8h 15m",
      stops: 1,
      price: 580,
      originalPrice: 720,
      class: "Economy",
    },
    {
      id: 3,
      airline: "Premier Airways",
      departure: {
        time: "22:10",
        airport: "JFK",
        city: "New York",
      },
      arrival: {
        time: "12:25",
        airport: "CDG",
        city: "Paris",
      },
      duration: "7h 15m",
      stops: 0,
      price: 1200,
      originalPrice: 1450,
      class: "Business",
    },
    {
      id: 4,
      airline: "Global Connect",
      departure: {
        time: "16:45",
        airport: "JFK",
        city: "New York",
      },
      arrival: {
        time: "07:30",
        airport: "CDG",
        city: "Paris",
      },
      duration: "9h 45m",
      stops: 1,
      price: 520,
      originalPrice: 650,
      class: "Economy",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-sky text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Flight</h1>
            <p className="text-xl text-white/90">Compare prices and book the best flights worldwide</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SearchBar type="flights" />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Flights</h2>
            <p className="text-muted-foreground">{flights.length} flights found for New York → Paris</p>
          </div>

          <div className="space-y-6">
            {flights.map((flight) => (
              <Card key={flight.id} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Flight Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Plane className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{flight.airline}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant={flight.class === "Business" ? "default" : "secondary"}>
                              {flight.class}
                            </Badge>
                            {flight.stops === 0 ? (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                Non-stop
                              </Badge>
                            ) : (
                              <Badge variant="outline">
                                {flight.stops} stop{flight.stops > 1 ? "s" : ""}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">${flight.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${flight.originalPrice}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>
                    </div>

                    {/* Flight Route */}
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{flight.departure.time}</div>
                        <div className="text-sm text-muted-foreground">{flight.departure.airport}</div>
                        <div className="text-sm text-muted-foreground">{flight.departure.city}</div>
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{flight.duration}</span>
                        </div>
                        <div className="w-full h-px bg-border my-2 relative">
                          <ArrowRight className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background text-muted-foreground" />
                        </div>
                        {flight.stops > 0 && (
                          <div className="text-xs text-muted-foreground">{flight.stops} stop{flight.stops > 1 ? "s" : ""}</div>
                        )}
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold">{flight.arrival.time}</div>
                        <div className="text-sm text-muted-foreground">{flight.arrival.airport}</div>
                        <div className="text-sm text-muted-foreground">{flight.arrival.city}</div>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="lg:ml-6">
                    <Button size="lg" className="w-full lg:w-auto bg-gradient-ocean hover:shadow-medium transition-all duration-300">
                      Book Flight
                    </Button>
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

export default Flights;