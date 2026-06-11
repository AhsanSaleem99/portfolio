"use client";

import React, { useRef, useState } from "react";
import { motion, LazyMotion, domAnimation, useInView } from "framer-motion";

interface formDataState {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<formDataState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // Only trigger animations when the user is 100px away from the section
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Input change handler with TypeScript types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submit handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null); // Clear old status message

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // SUCCESS: Updating status message and clearing form
        setStatusMessage({
          text: "Message sent successfully!",
          isError: false,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // FAIL: State update
        setStatusMessage({
          text: `Failed: ${data.error || "Unknown error"}`,
          isError: true,
        });
      }
    } catch (error) {
      console.error("Frontend Form Error:", error);
      setStatusMessage({
        text: "Something went wrong while connecting to the server.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={sectionRef}
        id="contact"
        className="relative py-16 md:py-28 px-6 md:px-20 overflow-hidden"
      >
        {/* Ambient Orbs - pointer-events-none prevents interaction issues */}
        <div className="absolute -top-32 -left-32 w-72 h-72 md:w-[420px] md:h-[420px] bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 md:w-[600px] md:h-[600px] bg-gradient-to-br from-yellow-400/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/60">
              Contact
            </p>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Let’s build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                something real
              </span>
              .
            </h2>

            <p className="mt-6 text-base md:text-lg text-[var(--foreground)]/75 leading-relaxed max-w-xl">
              Have an idea or a product that needs a high-end experience? I help
              brands and startups create fast, scalable web apps.
            </p>

            {/* Trust Highlights - Subtle icons/emojis */}
            <div className="mt-8 space-y-4 text-sm md:text-base text-[var(--foreground)]/70">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 text-xs">
                  ⚡
                </span>
                <p>Smooth communication & reliable delivery</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-400/10 text-purple-400 text-xs">
                  🎯
                </span>
                <p>Modern React + Next.js development</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 text-xs">
                  ✨
                </span>
                <p>UI polish that feels premium</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleFormSubmit}
              className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all resize-none placeholder:text-white/20"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
              >
                {loading ? "Sending..." : "Send Message →"}
              </motion.button>

              {/* Button ke baad ya form ke end par yeh code rakhein */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-md text-sm mt-4 ${
                    statusMessage.isError
                      ? "bg-red-500/10 text-red-500 border border-red-500/20"
                      : "bg-green-500/10 text-green-500 border border-green-500/20"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <p className="text-[10px] md:text-xs text-center text-[var(--foreground)]/40 italic">
                I usually respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Contact;
