"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Code2, Sparkles, Layers3, CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      title: "Modern Frontends",
      desc: "React, Next.js, Tailwind — clean and scalable builds.",
      icon: Code2,
      color: "text-cyan-400",
    },
    {
      title: "Smooth UX Details",
      desc: "Polished animations and interfaces that feel premium.",
      icon: Sparkles,
      color: "text-purple-400",
    },
    {
      title: "Full Product Thinking",
      desc: "Complete systems, not just standalone pages.",
      icon: Layers3,
      color: "text-yellow-400",
    },
    {
      title: "Reliable Delivery",
      desc: "Clear communication and work you can trust.",
      icon: CheckCircle2,
      color: "text-green-400",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="relative py-16 md:py-28 px-6 md:px-20 overflow-hidden"
      >
        {/* Ambient blurred shapes - pointer-events-none is key for mobile INP */}
        <div className="absolute -top-24 -left-24 w-72 h-72 md:w-[420px] md:h-[420px] bg-blue-500/10 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-80 h-80 md:w-[520px] md:h-[520px] bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Layout: Stacked on mobile, side-by-side on large screens */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content (Text) - Spans 3 columns */}
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/60"
              >
                About Me
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]"
              >
                Hi, I’m Ahsan. <br className="hidden md:block" />I build web
                apps that feel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  fast, clean, and premium
                </span>
                .
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 space-y-6 text-base md:text-lg text-[var(--foreground)]/70 leading-relaxed"
              >
                <p>
                  I’m a freelance React and Next.js developer specializing in
                  high-performance digital products.
                </p>
                <p>
                  I focus on quality, engineering excellence, and design that
                  builds immediate trust with your users.
                </p>
              </motion.div>
            </div>

            {/* Right Content (Trust Box) - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 w-full p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col justify-center gap-6"
            >
              {[
                { label: "3+ Real Products Built", icon: "⚡" },
                { label: "Remote Clients Welcome", icon: "🌍" },
                { label: "React • Next.js • UI Motion", icon: "🛠" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-2xl group-hover:scale-125 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Grid: 1 col mobile, 2 col tablet/desktop */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm text-[var(--foreground)]/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
