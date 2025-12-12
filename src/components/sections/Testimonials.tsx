"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 relative overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What participants say
          </h2>
          <p className="text-base md:text-lg text-muted max-w-xl mx-auto">
            Real stories from real innovators who transformed their careers
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-8">
          <motion.div
            className="p-6 sm:p-8 md:p-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-card-border relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-6 left-6 text-5xl text-foreground/10">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                      {testimonials[activeIndex].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].role} •{" "}
                        {testimonials[activeIndex].university}
                      </div>
                    </div>
                  </div>
                  {testimonials[activeIndex].achievement && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                      🏆 {testimonials[activeIndex].achievement}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
            aria-label="Previous"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-foreground"
                    : "w-2 bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/10 transition-colors"
            aria-label="Next"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "95%", label: "Got Career Opportunities" },
            { value: "50+", label: "Partner Companies" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
