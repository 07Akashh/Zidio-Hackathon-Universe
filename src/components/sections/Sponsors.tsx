"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Marquee, MarqueeItem } from "@/components/ui";
import {
  GoogleLogo,
  MicrosoftLogo,
  AmazonLogo,
  MetaLogo,
  AppleLogo,
  NetflixLogo,
  StripeLogo,
  RazorpayLogo,
} from "@/components/ui/icons";

const sponsorLogos = [
  { name: "Google", Logo: GoogleLogo },
  { name: "Microsoft", Logo: MicrosoftLogo },
  { name: "Amazon", Logo: AmazonLogo },
  { name: "Meta", Logo: MetaLogo },
  { name: "Apple", Logo: AppleLogo },
  { name: "Netflix", Logo: NetflixLogo },
  { name: "Stripe", Logo: StripeLogo },
  { name: "Razorpay", Logo: RazorpayLogo },
];

const universityPartners = [
  "IIT Delhi",
  "IIT Bombay",
  "BITS Pilani",
  "NIT Trichy",
  "VIT Vellore",
  "GDSC",
  "IEEE",
  "CodeChef",
];

export function Sponsors() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="sponsors"
      className="w-full py-16 md:py-24 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Trusted by teams from around the world
          </p>
        </motion.div>

        <div className="space-y-8 mb-16 md:mb-20">
          <Marquee speed={25} pauseOnHover direction="left">
            {sponsorLogos.map((sponsor) => (
              <MarqueeItem key={sponsor.name} grayscale>
                <div className="flex items-center gap-3 px-6 py-3">
                  <sponsor.Logo className="w-8 h-8" />
                  <span className="text-lg font-semibold text-muted">
                    {sponsor.name}
                  </span>
                </div>
              </MarqueeItem>
            ))}
          </Marquee>

          <Marquee speed={20} pauseOnHover direction="right">
            {[...sponsorLogos].reverse().map((sponsor) => (
              <MarqueeItem key={sponsor.name} grayscale>
                <div className="flex items-center gap-3 px-6 py-3">
                  <sponsor.Logo className="w-8 h-8" />
                  <span className="text-lg font-semibold text-muted">
                    {sponsor.name}
                  </span>
                </div>
              </MarqueeItem>
            ))}
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-center text-xs text-muted-foreground uppercase tracking-wider mb-6">
            University Partners
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {universityPartners.map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 bg-foreground/5 border border-border rounded-full text-sm text-muted hover:text-foreground hover:border-border transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-block p-6 sm:p-8 md:p-10 rounded-2xl bg-card/50 backdrop-blur-lg border border-card-border max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Want to sponsor our next hackathon?
            </h3>
            <p className="text-muted text-sm mb-6">
              Get access to top talent and showcase your brand to thousands of
              developers
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Become a Sponsor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
