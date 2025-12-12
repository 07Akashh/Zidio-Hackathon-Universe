export interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  avatar: string;
  quote: string;
  hackathon: string;
  achievement?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Full Stack Developer",
    university: "IIT Delhi",
    avatar: "PS",
    quote:
      "Zidio's hackathon platform transformed my career. The AI mentor feature helped me debug my project at 3 AM, and I ended up winning first place! Now I'm interning at Google.",
    hackathon: "AI Innovation Challenge 2024",
    achievement: "1st Place Winner",
  },
  {
    id: "2",
    name: "Arjun Patel",
    role: "ML Engineer",
    university: "BITS Pilani",
    avatar: "AP",
    quote:
      "The team matching algorithm connected me with amazing teammates I never would have found otherwise. We built something incredible together in just 48 hours.",
    hackathon: "Web3 Buildathon 2024",
    achievement: "2nd Place Winner",
  },
  {
    id: "3",
    name: "Sneha Reddy",
    role: "Product Designer",
    university: "NIT Trichy",
    avatar: "SR",
    quote:
      "Finally, a hackathon platform that values design as much as code! The submission portal made it easy to showcase our Figma prototypes alongside our codebase.",
    hackathon: "HealthTech Sprint 2024",
    achievement: "Best UI/UX Award",
  },
  {
    id: "4",
    name: "Rahul Kumar",
    role: "Backend Developer",
    university: "VIT Vellore",
    avatar: "RK",
    quote:
      "The live leaderboard kept us motivated throughout the 72 hours. Watching our rank climb as we added features was incredibly exciting!",
    hackathon: "FinTech Challenge 2024",
    achievement: "Top 10 Finalist",
  },
  {
    id: "5",
    name: "Ananya Iyer",
    role: "Data Scientist",
    university: "IIT Bombay",
    avatar: "AI",
    quote:
      "Got my first job offer directly from a sponsor company after showcasing my project. Zidio's recruiter dashboard feature is a game-changer for students.",
    hackathon: "AI Innovation Challenge 2024",
    achievement: "Hired by Sponsor",
  },
];
