"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-8 md:px-20 overflow-hidden"
    >
      {/* Ambient Orbs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-20 rounded-full blur-3xl animate-blob" />

      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-15 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60">
            Contact
          </p>

          {/* Heading */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Let’s build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              something real
            </span>
            .
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-lg text-[var(--foreground)]/75 leading-relaxed max-w-xl">
            Have an idea, a product, or a website that needs a clean modern
            experience? I help brands and startups create fast, scalable, and
            beautifully designed web apps.
          </p>

          {/* Trust Highlights */}
          <div className="mt-8 space-y-3 text-sm text-[var(--foreground)]/70">
            <p>⚡ Smooth communication & reliable delivery</p>
            <p>🎯 Modern React + Next.js development</p>
            <p>✨ UI polish that feels premium</p>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--background)]/40 backdrop-blur-md shadow-sm space-y-6"
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-[var(--foreground)]/70">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--foreground)]/15 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[var(--foreground)]/70">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--foreground)]/15 focus:border-purple-400 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-[var(--foreground)]/70">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-2 w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--foreground)]/15 focus:border-yellow-400 outline-none transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="w-full py-3 rounded-xl bg-[var(--button-background)] text-[var(--button-foreground)] font-medium hover:opacity-85 transition"
          >
            Send Message →
          </motion.button>

          {/* Small Footer Note */}
          <p className="text-xs text-center text-[var(--foreground)]/50">
            Typically replies within 24 hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
