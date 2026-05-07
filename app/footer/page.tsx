"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[var(--background)] px-8 md:px-20 py-16 overflow-hidden">
      {/* Ambient Orbs */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold tracking-tight">Ahsan Saleem</h2>
          <p className="mt-1 text-sm text-[var(--foreground)]/70">
            Crafting scalable digital products with clean design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm font-medium text-[var(--foreground)]/80">
          <ul className="flex items-center gap-4 text-sm font-normal">
            {["Projects", "Services", "About", "Contact"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <motion.p
                  whileHover={{ y: -2, opacity: 1 }}
                  className="transition opacity-80 hover:opacity-100"
                >
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="relative cursor-pointer text-[var(--background)] dark:text-[var(--foreground)] transition"
                  >
                    {item}
                  </ScrollLink>
                </motion.p>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-[var(--foreground)]/80">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, color: "#6ee7b7" }}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, color: "#0ea5e9" }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, color: "#60a5fa" }}
          >
            <FaTwitter size={20} />
          </motion.a>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-xs text-[var(--foreground)]/50"
      >
        © 2026 Ahsan Saleem. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
