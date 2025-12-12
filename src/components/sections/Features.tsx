"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UserIcon,
  TargetIcon,
  WrenchIcon,
  UploadIcon,
  ScaleIcon,
  TrophyIcon,
} from "@/components/ui/icons";

const journeySteps = [
  {
    step: 1,
    title: "Register & Form Team",
    description:
      "Sign up with email or Google, create your profile, and form or join a team using our AI-powered matching system.",
    Icon: UserIcon,
  },
  {
    step: 2,
    title: "Choose Your Challenge",
    description:
      "Browse industry-level problem statements from top companies. Filter by domain - AI, Web3, Healthcare, FinTech.",
    Icon: TargetIcon,
  },
  {
    step: 3,
    title: "Build & Collaborate",
    description:
      "Get access to AI mentors, live workshops, and 24/7 support. Use integrated tools to track progress.",
    Icon: WrenchIcon,
  },
  {
    step: 4,
    title: "Submit & Showcase",
    description:
      "Upload your project via GitHub, Figma, or direct upload. Add documentation, demos, and presentations.",
    Icon: UploadIcon,
  },
  {
    step: 5,
    title: "Get Evaluated",
    description:
      "AI pre-screening followed by expert judge review. Receive detailed feedback on your solution.",
    Icon: ScaleIcon,
  },
  {
    step: 6,
    title: "Win & Get Hired",
    description:
      "Top performers win prizes, certificates, and direct interview opportunities with sponsor companies.",
    Icon: TrophyIcon,
  },
];

export function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="w-full py-16 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted mb-3">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your journey to success
          </h2>
          <p className="text-base md:text-lg text-muted max-w-xl mx-auto">
            From registration to winning - your complete hackathon experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-card-border hover:bg-card transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <step.Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#hackathons"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
