export interface Hackathon {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  mode: "Online" | "Offline" | "Hybrid";
  prizePool: string;
  participants: number;
  maxTeamSize: number;
  status: "upcoming" | "live" | "completed";
  tags: string[];
  image?: string;
  featured?: boolean;
}

export const hackathons: Hackathon[] = [
  {
    id: "ai-innovation-2025",
    title: "AI Innovation Challenge 2025",
    description:
      "Build the next generation of AI-powered solutions for real-world problems",
    startDate: "2025-01-15",
    endDate: "2025-01-17",
    registrationDeadline: "2025-01-10",
    mode: "Online",
    prizePool: "₹5,00,000",
    participants: 2847,
    maxTeamSize: 4,
    status: "upcoming",
    tags: ["AI/ML", "Deep Learning", "NLP"],
    featured: true,
  },
  {
    id: "web3-buildathon",
    title: "Web3 Buildathon",
    description:
      "Decentralize the future with blockchain and Web3 technologies",
    startDate: "2025-02-01",
    endDate: "2025-02-03",
    registrationDeadline: "2025-01-25",
    mode: "Hybrid",
    prizePool: "₹3,50,000",
    participants: 1523,
    maxTeamSize: 5,
    status: "upcoming",
    tags: ["Blockchain", "Web3", "DeFi"],
    featured: true,
  },
  {
    id: "healthcare-innovation",
    title: "HealthTech Innovation Sprint",
    description: "Transform healthcare with technology-driven solutions",
    startDate: "2025-02-15",
    endDate: "2025-02-17",
    registrationDeadline: "2025-02-10",
    mode: "Online",
    prizePool: "₹4,00,000",
    participants: 987,
    maxTeamSize: 4,
    status: "upcoming",
    tags: ["Healthcare", "ML", "IoT"],
    featured: false,
  },
  {
    id: "fintech-challenge",
    title: "FinTech Disruption Challenge",
    description: "Revolutionize banking and finance with innovative solutions",
    startDate: "2025-03-01",
    endDate: "2025-03-03",
    registrationDeadline: "2025-02-25",
    mode: "Online",
    prizePool: "₹6,00,000",
    participants: 654,
    maxTeamSize: 4,
    status: "upcoming",
    tags: ["FinTech", "AI", "Security"],
    featured: false,
  },
];

// Set next hackathon to 30 days from now
export const nextHackathonDate = new Date(
  Date.now() + 30 * 24 * 60 * 60 * 1000
);
