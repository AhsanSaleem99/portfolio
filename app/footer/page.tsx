"use client";

import React, { useRef } from "react";
import { motion, LazyMotion, domAnimation, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "100px" });

  const socialLinks = [
    {
      name: "Github",
      icon: FaGithub,
      href: "https://github.com/yourusername",
      color: "#6ee7b7",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "#0ea5e9",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
      color: "#60a5fa",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <footer
        ref={footerRef}
        className="relative mt-20 bg-[var(--background)] px-6 md:px-20 py-12 md:py-16 overflow-hidden border-t border-white/5"
      >
        {/* Optimized Ambient Orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6"
        >
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)]/60">
              Ahsan Saleem
            </h2>
            <p className="mt-2 text-sm text-[var(--foreground)]/60 max-w-xs">
              Crafting scalable digital products with clean design and
              performance.
            </p>
          </div>

          {/* Quick Links - Optimized for Touch */}
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-sm font-medium text-[var(--foreground)]/70 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-5">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit my ${social.name} profile`}
                whileHover={{ y: -3, scale: 1.1, color: social.color }} // Framer Motion handles the color swap here
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-[var(--foreground)]/70 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-[10px] uppercase tracking-widest text-[var(--foreground)]/40 font-medium">
            © {new Date().getFullYear()} Ahsan Saleem. All rights reserved.
          </p>
        </div>
      </footer>
    </LazyMotion>
  );
};

export default Footer;
