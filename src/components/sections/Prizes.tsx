"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { prizes, specialPrizes, totalPrizePool } from "@/data/prizes";
import {
  TrophyIcon,
  SparklesIcon,
  LightBulbIcon,
  HeartIcon,
  CpuIcon,
} from "@/components/ui/icons";

const rankIcons = {
  1: TrophyIcon,
  2: TrophyIcon,
  3: TrophyIcon,
};

const specialPrizeIcons: { [key: string]: typeof SparklesIcon } = {
  "Best Innovation": LightBulbIcon,
  "Best UI/UX": SparklesIcon,
  "Best Use of AI": CpuIcon,
  "People's Choice": HeartIcon,
};

export function Prizes() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const getPrizeColor = (rank: number) => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-zinc-300";
    return "text-orange-400";
  };

  const getPrizeBorderColor = (rank: number) => {
    if (rank === 1) return "border-yellow-500/30 hover:border-yellow-500/50";
    if (rank === 2) return "border-zinc-400/30 hover:border-zinc-400/50";
    return "border-orange-500/30 hover:border-orange-500/50";
  };

  return (
    <section id="prizes" className="w-full py-16 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted mb-3">
            Rewards
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Win Amazing Prizes
          </h2>
          <div className="mt-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-shimmer">
              {totalPrizePool}
            </span>
            <span className="text-muted ml-2">in prizes</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {prizes.map((prize, index) => {
            const IconComponent =
              rankIcons[prize.rank as keyof typeof rankIcons] || TrophyIcon;
            return (
              <motion.div
                key={prize.rank}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border text-center transition-all ${getPrizeBorderColor(
                  prize.rank
                )} ${prize.rank === 1 ? "md:-translate-y-4" : ""}`}
              >
                <div className={`mb-4 ${getPrizeColor(prize.rank)}`}>
                  <IconComponent className="w-12 h-12 md:w-14 md:h-14 mx-auto" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {prize.rank === 1 ? "1st" : prize.rank === 2 ? "2nd" : "3rd"}{" "}
                  Place
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  {prize.title}
                </h3>
                <div
                  className={`text-2xl md:text-3xl font-bold mb-4 ${getPrizeColor(
                    prize.rank
                  )}`}
                >
                  {prize.amount}
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-green-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-card-border"
        >
          <h3 className="text-lg font-semibold text-center mb-6 text-foreground">
            Special Category Prizes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialPrizes.map((prize, index) => {
              const SpecialIcon =
                specialPrizeIcons[prize.title] || SparklesIcon;
              return (
                <motion.div
                  key={prize.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="text-center p-4 rounded-xl bg-foreground/5 border border-border hover:border-border transition-colors"
                >
                  <div className="text-blue-400 mb-2 flex justify-center">
                    <SpecialIcon className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {prize.title}
                  </div>
                  <div className="text-lg font-bold text-gradient">
                    {prize.amount}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
