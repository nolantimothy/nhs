export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: "sedan" | "suv" | "truck" | "coupe" | "convertible" | "van" | "electric" | "hybrid";
  transmission: "automatic" | "manual";
  seats: number;
  fuelType: "gasoline" | "diesel" | "electric" | "hybrid";
  pricePerDay: number;
  rating: number;
  reviewCount: number;
  location: string;
  features: string[];
  image: string;
  hostName: string;
  hostAvatar: string;
  hostTrips: number;
  hostJoined: string;
  description: string;
  mileageLimit: string;
  available: boolean;
  instantBook: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: "host" | "renter";
  avatar: string;
  quote: string;
  rating: number;
  location: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "tesla-model-3-2024",
    make: "Tesla",
    model: "Model 3",
    year: 2024,
    type: "electric",
    transmission: "automatic",
    seats: 5,
    fuelType: "electric",
    pricePerDay: 89,
    rating: 4.9,
    reviewCount: 127,
    location: "Capitol Hill, Seattle",
    features: ["Autopilot", "Premium Sound", "All-Wheel Drive", "Heated Seats", "Glass Roof"],
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    hostName: "Sarah K.",
    hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    hostTrips: 234,
    hostJoined: "2022",
    description: "Experience the future of driving with my 2024 Tesla Model 3. Long Range AWD with full Autopilot. Perfect for exploring the Pacific Northwest with zero emissions. Supercharger network makes road trips effortless.",
    mileageLimit: "Unlimited",
    available: true,
    instantBook: true,
  },
  {
    id: "bmw-i4-2024",
    make: "BMW",
    model: "i4 M50",
    year: 2024,
    type: "electric",
    transmission: "automatic",
    seats: 5,
    fuelType: "electric",
    pricePerDay: 129,
    rating: 4.8,
    reviewCount: 89,
    location: "Bellevue, WA",
    features: ["M Sport Package", "Curved Display", "Harman Kardon", "Parking Assistant", "Driving Assistant Pro"],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
    hostName: "David L.",
    hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    hostTrips: 156,
    hostJoined: "2023",
    description: "The ultimate electric driving machine. My BMW i4 M50 combines luxury, performance, and sustainability. 536 hp of instant torque. Perfect for business trips or weekend getaways.",
    mileageLimit: "250 miles/day",
    available: true,
    instantBook: true,
  },
  {
    id: "rivian-r1s-2024",
    make: "Rivian",
    model: "R1S",
    year: 2024,
    type: "suv",
    transmission: "automatic",
    seats: 7,
    fuelType: "electric",
    pricePerDay: 159,
    rating: 4.9,
    reviewCount: 64,
    location: "Fremont, Seattle",
    features: ["Quad Motor AWD", "Camp Mode", "Gear Guard", "Air Suspension", "Panoramic Roof"],
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
    hostName: "Marcus T.",
    hostAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    hostTrips: 87,
    hostJoined: "2023",
    description: "Adventure awaits in the Rivian R1S. Seats 7, goes anywhere, and does it all on electric power. Camp Mode turns this into a mobile basecamp. Perfect for PNW adventures.",
    mileageLimit: "200 miles/day",
    available: true,
    instantBook: false,
  },
  {
    id: "porsche-taycan-2024",
    make: "Porsche",
    model: "Taycan 4S",
    year: 2024,
    type: "electric",
    transmission: "automatic",
    seats: 4,
    fuelType: "electric",
    pricePerDay: 199,
    rating: 5.0,
    reviewCount: 42,
    location: "Mercer Island, WA",
    features: ["Performance Battery Plus", "Sport Chrono", "BOSE Surround", "Adaptive Air Suspension", "Night Vision"],
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80",
    hostName: "Jennifer W.",
    hostAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    hostTrips: 45,
    hostJoined: "2024",
    description: "Pure Porsche performance, zero emissions. The Taycan 4S is the most thrilling EV on the road. Sport Chrono package for track-ready performance with everyday luxury.",
    mileageLimit: "200 miles/day",
    available: true,
    instantBook: true,
  },
  {
    id: "mercedes-eqs-2024",
    make: "Mercedes-Benz",
    model: "EQS 580",
    year: 2024,
    type: "sedan",
    transmission: "automatic",
    seats: 5,
    fuelType: "electric",
    pricePerDay: 249,
    rating: 4.9,
    reviewCount: 31,
    location: "Bellevue, WA",
    features: ["Hyperscreen", "Burmester 4D Sound", "Rear Axle Steering", "HEPA Filter", "Executive Rear Package"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    hostName: "Robert C.",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    hostTrips: 28,
    hostJoined: "2024",
    description: "The pinnacle of electric luxury. My EQS 580 features the stunning Hyperscreen dashboard, Burmester 4D surround sound, and the quietest cabin in any production car. First-class travel, reimagined.",
    mileageLimit: "250 miles/day",
    available: true,
    instantBook: false,
  },
  {
    id: "ford-f150-lightning-2024",
    make: "Ford",
    model: "F-150 Lightning",
    year: 2024,
    type: "truck",
    transmission: "automatic",
    seats: 5,
    fuelType: "electric",
    pricePerDay: 119,
    rating: 4.7,
    reviewCount: 98,
    location: "Tacoma, WA",
    features: ["Pro Power Onboard", "BlueCruise", "Mega Frunk", "Tow Package", "360 Camera"],
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    hostName: "Jake M.",
    hostAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    hostTrips: 178,
    hostJoined: "2022",
    description: "America's best-selling truck, now electric. The F-150 Lightning has a massive frunk, can power your campsite, and tows with ease. Great for moves, projects, or weekend camping trips.",
    mileageLimit: "200 miles/day",
    available: true,
    instantBook: true,
  },
  {
    id: "hyundai-ioniq-6-2024",
    make: "Hyundai",
    model: "IONIQ 6",
    year: 2024,
    type: "sedan",
    transmission: "automatic",
    seats: 5,
    fuelType: "electric",
    pricePerDay: 69,
    rating: 4.8,
    reviewCount: 156,
    location: "University District, Seattle",
    features: ["Vehicle-to-Load", "Digital Side Mirrors", "Relaxation Seats", "Highway Driving Assist 2", "Ambient Lighting"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
    hostName: "Amy L.",
    hostAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    hostTrips: 312,
    hostJoined: "2021",
    description: "Most efficient EV in its class with stunning aerodynamic design. Ultra-fast 18-minute charging from 10% to 80%. Perfect for daily commuting or a weekend road trip on a budget.",
    mileageLimit: "Unlimited",
    available: true,
    instantBook: true,
  },
  {
    id: "tesla-model-y-2024",
    make: "Tesla",
    model: "Model Y",
    year: 2024,
    type: "suv",
    transmission: "automatic",
    seats: 5,
    fuelType: "electric",
    pricePerDay: 99,
    rating: 4.8,
    reviewCount: 203,
    location: "Ballard, Seattle",
    features: ["Full Self-Driving", "Camp Mode", "Dog Mode", "Premium Interior", "Tow Hitch"],
    image: "https://images.unsplash.com/photo-1619317190536-909a3b2d8a47?w=800&q=80",
    hostName: "Michael R.",
    hostAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    hostTrips: 345,
    hostJoined: "2021",
    description: "The most popular EV in the world, and for good reason. Spacious, efficient, and packed with tech. Full Self-Driving capability included. Supercharger network for easy road trips.",
    mileageLimit: "Unlimited",
    available: true,
    instantBook: true,
  },
  {
    id: "audi-etron-gt-2024",
    make: "Audi",
    model: "e-tron GT",
    year: 2024,
    type: "coupe",
    transmission: "automatic",
    seats: 4,
    fuelType: "electric",
    pricePerDay: 219,
    rating: 4.9,
    reviewCount: 37,
    location: "Kirkland, WA",
    features: ["Quattro AWD", "Matrix LED", "Bang & Olufsen", "Air Suspension", "Carbon Ceramic Brakes"],
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    hostName: "Elena S.",
    hostAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    hostTrips: 52,
    hostJoined: "2023",
    description: "A grand tourer for the electric age. The Audi e-tron GT combines breathtaking design with exhilarating performance. 522 hp, quattro AWD, and a cabin crafted from sustainable materials.",
    mileageLimit: "200 miles/day",
    available: true,
    instantBook: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alex Thompson",
    role: "renter",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    quote: "Rented a Tesla Model 3 for a weekend trip to Olympic National Park. The whole experience was seamless - from booking to pickup. Way better than traditional rental companies.",
    rating: 5,
    location: "Seattle, WA",
  },
  {
    id: "t2",
    name: "Maria Chen",
    role: "host",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    quote: "I've earned over $12,000 sharing my EV when I'm not using it. The platform handles everything - insurance, payments, and support. It basically pays for itself now.",
    rating: 5,
    location: "Bellevue, WA",
  },
  {
    id: "t3",
    name: "James Wright",
    role: "renter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    quote: "As someone who doesn't own a car, this platform is a lifesaver. I can pick exactly the right vehicle for each occasion - a truck for moving, a sedan for business, an SUV for camping.",
    rating: 5,
    location: "Capitol Hill, Seattle",
  },
  {
    id: "t4",
    name: "Lisa Park",
    role: "host",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    quote: "The community aspect is what sets this apart. I've met amazing people through sharing my car. The built-in insurance gives me total peace of mind.",
    rating: 5,
    location: "Fremont, Seattle",
  },
];

export const vehicleTypes = [
  { value: "all", label: "All Types" },
  { value: "electric", label: "Electric" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "truck", label: "Truck" },
  { value: "coupe", label: "Coupe" },
  { value: "convertible", label: "Convertible" },
  { value: "hybrid", label: "Hybrid" },
];

export const locations = [
  "All Locations",
  "Capitol Hill, Seattle",
  "Ballard, Seattle",
  "Fremont, Seattle",
  "University District, Seattle",
  "Bellevue, WA",
  "Kirkland, WA",
  "Mercer Island, WA",
  "Tacoma, WA",
];

export const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getFilteredVehicles(
  type?: string,
  location?: string,
  minPrice?: number,
  maxPrice?: number,
  sortBy?: string
): Vehicle[] {
  let filtered = [...vehicles];

  if (type && type !== "all") {
    filtered = filtered.filter((v) => v.type === type);
  }

  if (location && location !== "All Locations") {
    filtered = filtered.filter((v) => v.location === location);
  }

  if (minPrice !== undefined) {
    filtered = filtered.filter((v) => v.pricePerDay >= minPrice);
  }

  if (maxPrice !== undefined) {
    filtered = filtered.filter((v) => v.pricePerDay <= maxPrice);
  }

  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
      break;
    case "price-high":
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filtered.sort((a, b) => b.year - a.year);
      break;
    default:
      filtered.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount);
  }

  return filtered;
}
