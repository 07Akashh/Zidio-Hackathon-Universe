export interface Sponsor {
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  website?: string;
}

export const sponsors: Sponsor[] = [
  { name: "Google", logo: "G", tier: "platinum" },
  { name: "Microsoft", logo: "M", tier: "platinum" },
  { name: "Amazon", logo: "A", tier: "platinum" },
  { name: "Meta", logo: "F", tier: "gold" },
  { name: "Apple", logo: "🍎", tier: "gold" },
  { name: "Netflix", logo: "N", tier: "gold" },
  { name: "Stripe", logo: "S", tier: "silver" },
  { name: "Razorpay", logo: "R", tier: "silver" },
  { name: "Zerodha", logo: "Z", tier: "silver" },
  { name: "Flipkart", logo: "F", tier: "bronze" },
  { name: "Swiggy", logo: "S", tier: "bronze" },
  { name: "Zomato", logo: "Z", tier: "bronze" },
];

export const partners = [
  { name: "IIT Delhi", type: "university" },
  { name: "IIT Bombay", type: "university" },
  { name: "BITS Pilani", type: "university" },
  { name: "NIT Trichy", type: "university" },
  { name: "VIT Vellore", type: "university" },
  { name: "GDSC", type: "community" },
  { name: "IEEE", type: "community" },
  { name: "CodeChef", type: "community" },
];
