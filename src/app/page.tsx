import {
  Hero,
  UpcomingHackathons,
  Features,
  Prizes,
  Leaderboard,
  Sponsors,
  Testimonials,
  FAQ,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingHackathons />
      <Features />
      <Prizes />
      <Leaderboard />
      <Sponsors />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
