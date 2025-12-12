"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { hackathons, type Hackathon } from "@/data/hackathons";
import { CpuIcon, LinkIcon, HeartIcon, CodeIcon } from "@/components/ui/icons";

const tagIcons: { [key: string]: typeof CpuIcon } = {
  "AI/ML": CpuIcon,
  Blockchain: LinkIcon,
  Healthcare: HeartIcon,
  "Web Development": CodeIcon,
  FinTech: CodeIcon,
};

function HackathonCard({
  hackathon,
  index,
}: {
  hackathon: Hackathon;
  index: number;
}) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-xl bg-card/50 backdrop-blur-sm border border-card-border overflow-hidden hover:border-border transition-colors"
    >
      <div className="relative h-28 bg-gradient-to-br from-blue-500/10 via-blue-500/10 to-blue-600/10 flex items-center justify-center border-b border-card-border">
        <div className="text-blue-400">
          {(() => {
            const IconComponent = tagIcons[hackathon.tags[0]] || CodeIcon;
            return <IconComponent className="w-12 h-12" />;
          })()}
        </div>
        {hackathon.featured && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            Featured
          </div>
        )}
        {hackathon.status === "upcoming" && !hackathon.featured && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs">
            Upcoming
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          {hackathon.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {hackathon.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {hackathon.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs bg-foreground/5 border border-border rounded-md text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {hackathon.participants.toLocaleString()}+
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Prize Pool</div>
            <div className="text-lg font-bold text-foreground">
              {hackathon.prizePool}
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Register
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function UpcomingHackathons() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="hackathons" className="w-full py-16 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted mb-3">
            Join the Challenge
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Hackathons
          </h2>
          <p className="text-base md:text-lg text-muted max-w-xl mx-auto">
            Compete with the best minds, solve real-world problems, and win
            amazing prizes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={hackathon.id}
              hackathon={hackathon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-5 py-2.5 text-sm border border-border rounded-lg text-foreground hover:bg-foreground/5 transition-colors"
          >
            View All Hackathons
          </a>
        </motion.div>
      </div>
    </section>
  );
}
