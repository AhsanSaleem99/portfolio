"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Wrapping in requestAnimationFrame tells the linter/compiler
    // that this is an intentional, non-blocking async update.
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    // 1. Function to check width (768px is the standard 'md' breakpoint)
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // 2. Run it immediately on mount
    handleResize();

    // 3. Listen for window resizes
    window.addEventListener("resize", handleResize);

    // 4. Cleanup the listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Use a simple check to prevent the theme-dependent code from running on server
  if (!mounted) {
    return <section className="min-h-[calc(100vh-4rem)]" />;
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center pt-20 px-8 md:px-20 overflow-hidden"
    >
      {/* Ambient blurred shapes */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-20 rounded-full blur-3xl animate-blob"></div>

      <div className="pointer-events-none absolute bottom-0 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Faint abstract polygon lines */}
      <svg className="pointer-events-none absolute w-full h-full animate-polygon">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#facc15" stopOpacity="0.075" />
          </linearGradient>
        </defs>

        <polygon points="0,0 300,0 250,200" fill="url(#grad)" />
        <polygon points="200,100 500,50 450,300" fill="url(#grad)" />
        <polygon points="100,300 400,350 350,500" fill="url(#grad)" />
      </svg>

      {/* ========================= */}
      {/* Left Content (Motion Stagger) */}
      {/* ========================= */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="max-w-2xl relative z-10"
      >
        {/* Small Label */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60"
        >
          Freelance Web & App Developer
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="block">Beautiful digital products,</span>

          <span className="block mt-2">
            built with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              precision and scale
            </span>
            .
          </span>
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-[var(--foreground)]/75 leading-relaxed"
        >
          I help brands, startups, and creators launch fast, scalable digital
          products with clean design and real business impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
          className="mt-10 flex gap-4"
        >
          <Link
            href="/contact"
            className="px-7 py-3 rounded-xl bg-[var(--button-background)] text-[var(--button-foreground)]
            font-medium hover:opacity-80 transition"
          >
            Hire Me →
          </Link>

          <Link
            href="/projects"
            className="px-7 py-3 rounded-xl border border-[var(--foreground)]/30
            hover:border-[var(--foreground)] transition"
          >
            View Work
          </Link>
        </motion.div>
      </motion.div>

      {/* ========================= */}
      {/* Right Side Image (Float + Fade Mask) */}
      {/* ========================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:block absolute bottom-0 right-8 pt-6 h-5/6 w-1/3 -rotate-10"
      >
        {/* Floating effect */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          {/* --- THE IMAGE (Only exists if isDesktop is true) --- */}
          {isDesktop && (
            <div
              className="hidden md:block relative w-full h-full"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            >
              <Image
                // Use ternary for SRC but keep ONE Image component to avoid double-loading
                src={
                  theme === "dark" ? "/portfolio-white.webp" : "/portfolio.webp"
                }
                alt="Portfolio preview"
                fill
                priority
                fetchPriority="high"
                loading="eager"
                // 3. ADD SIZES: Tells browser it's only 33% of screen on desktop
                sizes="33vw"
                className="object-cover rounded-2xl"
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
