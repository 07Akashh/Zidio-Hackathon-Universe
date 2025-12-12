"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="w-full py-16 md:py-24 relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 md:p-16 rounded-3xl bg-card/50 backdrop-blur-lg border border-card-border text-center max-w-4xl mx-auto shadow-xl"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted mb-3">
            Ready to start?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stop wasting time on job hunting.
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Join the hackathon revolution. Partner with us to host hackathons,
            access top talent, or participate in exciting challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:hello@zidio.in"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Free
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-border text-foreground rounded-xl hover:bg-foreground/5 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Documentation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
