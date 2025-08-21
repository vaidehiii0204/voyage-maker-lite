import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search } from "lucide-react";

interface SearchBarProps {
  type?: "hotels" | "flights";
}

const SearchBar = ({ type = "hotels" }: SearchBarProps) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = () => {
    console.log("Searching for:", { destination, checkIn, checkOut, guests, type });
  };

  return (
    <Card className="p-6 shadow-medium bg-background/95 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Destination */}
        <div className="space-y-2">
          <Label htmlFor="destination" className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 text-primary" />
            {type === "flights" ? "From / To" : "Destination"}
          </Label>
          <Input
            id="destination"
            placeholder={type === "flights" ? "New York → Paris" : "Where to?"}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Check-in / Departure */}
        <div className="space-y-2">
          <Label htmlFor="checkin" className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="h-4 w-4 text-primary" />
            {type === "flights" ? "Departure" : "Check-in"}
          </Label>
          <Input
            id="checkin"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Check-out / Return */}
        <div className="space-y-2">
          <Label htmlFor="checkout" className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="h-4 w-4 text-primary" />
            {type === "flights" ? "Return" : "Check-out"}
          </Label>
          <Input
            id="checkout"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Guests / Passengers */}
        <div className="space-y-2">
          <Label htmlFor="guests" className="flex items-center gap-2 text-sm font-medium">
            <Users className="h-4 w-4 text-primary" />
            {type === "flights" ? "Passengers" : "Guests"}
          </Label>
          <div className="flex gap-2">
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="h-12 flex-1"
            />
            <Button 
              onClick={handleSearch}
              className="h-12 px-6 bg-gradient-ocean hover:shadow-medium transition-all duration-300"
            >
              <Search className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchBar;