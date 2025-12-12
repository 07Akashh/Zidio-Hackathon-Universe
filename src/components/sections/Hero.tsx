"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Countdown } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { nextHackathonDate } from "@/data/hackathons";
import {
  SparklesIcon,
  RocketIcon,
  TrophyIcon,
  UsersIcon,
} from "@/components/ui/icons";

const STATS = [
  { value: 50000, suffix: "+", label: "Participants" },
  { value: 100, suffix: "+", label: "Hackathons" },
  { value: 95, suffix: "%", label: "Get Hired" },
  { value: 500, suffix: "+", label: "Hiring Partners" },
] as const;

const BENEFITS = [
  { icon: TrophyIcon, text: "₹50L+ in prizes", color: "text-yellow-400" },
  { icon: UsersIcon, text: "500+ hiring partners", color: "text-blue-400" },
  { icon: RocketIcon, text: "Launch your career", color: "text-green-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const [spotsLeft, setSpotsLeft] = useState(127);
  const [joiner, setJoiner] = useState({ name: "Rahul", college: "IIT Delhi" });

  // Simulate spots decreasing (urgency)
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 50 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  // Rotate through recent joiners (social proof)
  useEffect(() => {
    const joiners = [
      { name: "Priya", college: "NIT Trichy" },
      { name: "Arjun", college: "BITS Pilani" },
      { name: "Sneha", college: "VIT Vellore" },
      { name: "Vikram", college: "DTU Delhi" },
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % joiners.length;
      setJoiner(joiners[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center py-16 pt-24 sm:py-20 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />

      <div className="hidden sm:block absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[128px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* URGENCY + SOCIAL PROOF badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {/* Urgency: Spots left */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-red-400">Only {spotsLeft} spots left!</span>
            </div>

            {/* Social proof: Recent joiner */}
            <motion.div
              key={joiner.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-xs"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400">
                {joiner.name} from {joiner.college} joined just now
              </span>
            </motion.div>
          </motion.div>

          {/* EMOTIONAL headline */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 px-2"
          >
            <span className="text-foreground">Your next </span>
            <span className="text-gradient-shimmer">big break</span>
            <br className="hidden xs:block" />
            <span className="text-foreground"> starts here.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted max-w-2xl mb-6 leading-relaxed px-2"
          >
            Join{" "}
            <span className="text-foreground font-medium">
              50,000+ developers
            </span>{" "}
            competing in India&apos;s biggest hackathons. Win prizes, get hired,
            build your future.
          </motion.p>

          {/* VALUE: Benefits pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border text-sm"
              >
                <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                <span className="text-foreground font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Countdown with context */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border backdrop-blur-sm">
              <p className="text-muted-foreground text-sm mb-3 flex items-center justify-center gap-2">
                <SparklesIcon className="w-4 h-4 text-yellow-400" />
                <span>Winter Hackathon 2024 — Registration closing soon!</span>
              </p>
              <Countdown targetDate={nextHackathonDate} />
            </div>
          </motion.div>

          {/* ACTION: Enhanced CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4 sm:px-0"
          >
            <motion.a
              href="#hackathons"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RocketIcon className="w-5 h-5" />
              Register Now — It&apos;s Free
            </motion.a>
            <motion.a
              href="#features"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium border border-border text-foreground rounded-xl hover:bg-foreground/5 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* TRUST: Stats including hiring rate */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-3xl"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-0.5 sm:mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-5 h-8 border border-border rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-muted rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
