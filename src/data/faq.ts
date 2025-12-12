export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "registration" | "submission" | "prizes";
}

export const faqs: FAQItem[] = [
  {
    question: "What is Zidio Hackathon Platform?",
    answer:
      "Zidio is India's premier hackathon platform that connects students, developers, and innovators with industry-level challenges. We provide AI-powered tools, mentorship, and a pathway to internships and job opportunities.",
    category: "general",
  },
  {
    question: "Who can participate in hackathons?",
    answer:
      "Anyone! Students, working professionals, and tech enthusiasts are welcome. Some hackathons may have specific eligibility criteria mentioned on their registration page.",
    category: "general",
  },
  {
    question: "How do I register for a hackathon?",
    answer:
      "Click the 'Register Now' button on any hackathon card, create your profile or log in, and complete the registration form. You can register individually or create/join a team.",
    category: "registration",
  },
  {
    question: "Can I participate solo or do I need a team?",
    answer:
      "Both options are available! You can participate individually or form a team. Our AI-powered team matching feature can also help you find compatible teammates based on skills and interests.",
    category: "registration",
  },
  {
    question: "What can I submit as my project?",
    answer:
      "You can submit code via GitHub, designs via Figma, documentation in PDF, video demos, and more. Our submission portal supports multiple formats to showcase your complete solution.",
    category: "submission",
  },
  {
    question: "How are projects evaluated?",
    answer:
      "Projects are evaluated on multiple criteria: Innovation (25%), Technical Implementation (25%), UI/UX Design (20%), Feasibility (15%), and Presentation (15%). AI pre-screening is followed by expert judge review.",
    category: "submission",
  },
  {
    question: "What are the prizes?",
    answer:
      "Prizes vary by hackathon but typically include cash prizes (₹50,000 - ₹5,00,000), internship opportunities, job interview fast-tracks, premium course access, and exclusive swag.",
    category: "prizes",
  },
  {
    question: "Do all participants get certificates?",
    answer:
      "Yes! All participants who complete and submit a project receive a participation certificate. Winners and finalists receive special recognition certificates with blockchain verification.",
    category: "prizes",
  },
];
