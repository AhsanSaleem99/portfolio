"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { FaSignInAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const LoginModal = dynamic(() => import("../../app/components/LoginModal"), {
    ssr: false,
    loading: () => (
      <div className="h-9 w-9 rounded-full border border-[var(--foreground)]/30 animate-pulse" />
    ),
  });

  const { theme, setTheme } = useTheme();
  // 1. Start as false
  const [mounted, setMounted] = useState(false);

  // 2. Set to true only AFTER the first render
  useEffect(() => {
    // Wrapping in requestAnimationFrame tells the linter/compiler
    // that this is an intentional, non-blocking async update.
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  // 3. Keep the placeholder structure identical to the final div
  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 w-full h-9 W-18 z-50 bg-[var(--secondary)] dark:bg-[var(--background)] opacity-0" />
    );
  }
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-center bg-[var(--secondary)]/95 dark:bg-[var(--background)]/95 backdrop-blur-md text-[var(--background)] dark:text-[var(--secondary)] transition-colors duration-300">
      <div className="max-w-6xl w-full px-6 flex items-center justify-between">
        {/* Brand */}
        <ScrollLink
          to="home"
          smooth={true}
          className="text-2xl font-extrabold tracking-tight relative group cursor-pointer"
        >
          Axon
          <span className="text-cyan-400">.io</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-full
                bg-[var(--secondary)] dark:bg-[var(--primary)]
                scale-x-0 origin-left transition-transform duration-300
                group-hover:scale-x-100"
          ></span>
        </ScrollLink>

        {/* Nav Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-12 text-sm font-medium">
            {["PROJECTS", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
              <li key={item} className="relative group">
                {/* Normal Nav Link */}
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="relative cursor-pointer text-[var(--background)] dark:text-[var(--foreground)] transition"
                >
                  {item}

                  {/* underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--secondary)] dark:bg-[var(--primary)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </ScrollLink>

                {/* ✅ Hover Dropdown Only for Services */}
                {item === "SERVICES" && (
                  <div className="absolute top-full left-0 mt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="rounded-xl border border-white/10 bg-[var(--background)]/95 backdrop-blur-xl shadow-lg overflow-hidden">
                      <a
                        href="#web"
                        className="block px-4 py-3 text-sm hover:bg-[var(--primary)] hover:text-[var(--accent)] transition"
                      >
                        Web Applications
                      </a>

                      <a
                        href="#auth"
                        className="block px-4 py-3 text-sm hover:bg-[var(--primary)] hover:text-[var(--accent)] transition"
                      >
                        Authentication Systems
                      </a>

                      <a
                        href="#store"
                        className="block px-4 py-3 text-sm hover:bg-[var(--primary)] hover:text-[var(--accent)] transition"
                      >
                        E-Commerce Stores
                      </a>
                      <a
                        href="#ui"
                        className="block px-4 py-3 text-sm hover:bg-[var(--primary)] hover:text-[var(--accent)] transition"
                      >
                        UI / Frontend Design
                      </a>
                      <a
                        href="#seo"
                        className="block px-4 py-3 text-sm hover:bg-[var(--primary)] hover:text-[var(--accent)] transition"
                      >
                        Performance + SEO
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--foreground)]/30 text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:border-[var(--foreground)]/60 transition"
                aria-label="Toggle theme"
              >
                {/* 2. Use AnimatePresence for a "pop" transition between icons */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -5, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 5, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.1 }}
                  >
                    {theme === "dark" ? (
                      <FaSun size={16} />
                    ) : (
                      <FaMoon size={16} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="text-xs bg-[var(--tooltip-background)] text-[var(--tooltip-foreground)]"
            >
              Toggle theme
            </TooltipContent>
          </Tooltip>
          {/* Login */}
          <Tooltip>
            <TooltipTrigger asChild>
              {/* The LoginModal now wraps the button trigger */}
              <LoginModal>
                <button
                  aria-label="Log in to Account"
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-[var(--foreground)]/20 text-[var(--foreground)]/70 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 active:scale-95"
                >
                  <FaSignInAlt size={16} />
                </button>
              </LoginModal>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="text-xs bg-[var(--background)] border border-white/10 text-[var(--foreground)]"
            >
              Login
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
