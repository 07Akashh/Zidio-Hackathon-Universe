export interface Prize {
  rank: number;
  title: string;
  amount: string;
  perks: string[];
  icon: string;
  highlight?: boolean;
}

export const prizes: Prize[] = [
  {
    rank: 1,
    title: "Grand Champion",
    amount: "₹2,00,000",
    perks: [
      "Cash Prize",
      "Internship Opportunity",
      "1-Year Premium Courses",
      "Featured on Zidio",
      "Exclusive Swag Kit",
    ],
    icon: "🏆",
    highlight: true,
  },
  {
    rank: 2,
    title: "First Runner Up",
    amount: "₹1,00,000",
    perks: [
      "Cash Prize",
      "6-Month Premium Courses",
      "Interview Fast-Track",
      "Swag Kit",
    ],
    icon: "🥈",
    highlight: false,
  },
  {
    rank: 3,
    title: "Second Runner Up",
    amount: "₹50,000",
    perks: [
      "Cash Prize",
      "3-Month Premium Courses",
      "Certificate of Excellence",
      "Swag Kit",
    ],
    icon: "🥉",
    highlight: false,
  },
];

export const specialPrizes = [
  {
    title: "Best Innovation",
    amount: "₹25,000",
    icon: "💡",
  },
  {
    title: "Best UI/UX",
    amount: "₹25,000",
    icon: "🎨",
  },
  {
    title: "Best Use of AI",
    amount: "₹25,000",
    icon: "🤖",
  },
  {
    title: "People's Choice",
    amount: "₹15,000",
    icon: "❤️",
  },
];

export const totalPrizePool = "₹5,00,000+";
