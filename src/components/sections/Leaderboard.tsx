"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leaderboardData = [
  {
    rank: 1,
    name: "Team Innovators",
    university: "IIT Delhi",
    score: 9850,
    trend: "up",
  },
  {
    rank: 2,
    name: "CodeCrafters",
    university: "BITS Pilani",
    score: 9720,
    trend: "up",
  },
  {
    rank: 3,
    name: "TechPioneers",
    university: "NIT Trichy",
    score: 9580,
    trend: "down",
  },
  {
    rank: 4,
    name: "DataDynamos",
    university: "VIT Vellore",
    score: 9340,
    trend: "same",
  },
  {
    rank: 5,
    name: "ByteBuilders",
    university: "IIT Bombay",
    score: 9200,
    trend: "up",
  },
];

const getRankStyle = (rank: number) => {
  if (rank === 1)
    return "bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900";
  if (rank === 2)
    return "bg-gradient-to-br from-zinc-300 to-zinc-400 text-gray-900";
  if (rank === 3)
    return "bg-gradient-to-br from-orange-500 to-orange-600 text-white";
  return "bg-secondary text-foreground";
};

export function Leaderboard() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="leaderboard" className="w-full py-16 md:py-24 relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted mb-3">
            Live Rankings
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leaderboard
          </h2>
          <p className="text-base md:text-lg text-muted max-w-xl mx-auto">
            Top performing teams from our latest hackathon
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-4 sm:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-card-border"
        >
          <div className="hidden md:grid grid-cols-12 gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4 px-4">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Team</div>
            <div className="col-span-4">University</div>
            <div className="col-span-2 text-right">Score</div>
          </div>

          <div className="space-y-2">
            {leaderboardData.map((team, index) => (
              <motion.div
                key={team.rank}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center p-3 sm:p-4 rounded-xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold mr-4 ${getRankStyle(
                    team.rank
                  )}`}
                >
                  {team.rank}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground truncate">
                    {team.name}
                  </div>
                  <div className="text-muted-foreground text-sm md:hidden">
                    {team.university}
                  </div>
                </div>

                <div className="hidden md:block flex-1 text-muted-foreground">
                  {team.university}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">
                    {team.score.toLocaleString()}
                  </span>
                  {team.trend === "up" && (
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  )}
                  {team.trend === "down" && (
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              View Full Leaderboard
            </a>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Updated live during active hackathons
        </div>
      </div>
    </section>
  );
}
