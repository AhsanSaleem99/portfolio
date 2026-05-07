"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Layers3, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-8 md:px-20 overflow-hidden"
    >
      {/* Ambient blurred shapes (consistent with Hero) */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-20 rounded-full blur-3xl animate-blob" />

      <div className="absolute bottom-0 -right-32 w-[520px] h-[520px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-15 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Content */}
      <div className="max-w-full">
        <div className="flex">
          <div className="max-w-2xl">
            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60"
            >
              About
            </motion.p>
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]"
            >
              <span className="block">Hi, I’m Ahsan.</span>

              <span className="block mt-2">
                I build modern web apps that feel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  fast, clean, and premium
                </span>
                .
              </span>
            </motion.h2>
            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 text-lg md:text-xl text-[var(--foreground)]/75 leading-relaxed"
            >
              I’m a freelance React and Next.js developer who builds clean,
              modern web applications with smooth user experiences.
            </motion.p>
            {/* Extra Trust Line */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-[var(--foreground)]/70 leading-relaxed"
            >
              I focus on quality, performance, and design that feels
              professional and trustworthy.
            </motion.p>
            {/* Last Line */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-[var(--foreground)]/70 leading-relaxed"
            >
              If you’re looking for someone who cares about both design and
              clean engineering, I’d love to work with you.
            </motion.p>
          </div>

          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.03 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-2xl bg-[var(--background)] text-[var(--foreground)] items-center justify-center align-middle m-8 py-16 px-8 grid grid-cols-1 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--background)]/40 backdrop-blur-md shadow-sm"
          >
            <p className="text-center">⚡ 3+ Real Products Built</p>
            <p className="text-center">🌍 Remote Clients Welcome</p>
            <p className="text-center">🛠 React • Next.js • UI Motion</p>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
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
          ].map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.03 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group p-6 rounded-2xl border border-[var(--foreground)]/10
        bg-[var(--background)]/40 backdrop-blur-md shadow-sm"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  {/* Icon Animation */}
                  <motion.div
                    variants={{
                      rest: {
                        y: 0,
                        rotate: 0,
                        filter: "drop-shadow(0 0 0px transparent)",
                      },
                      hover: {
                        y: -2,
                        rotate: 3,
                        filter: "drop-shadow(0 0 10px rgba(56,189,248,0.35))",
                      },
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <Icon
                      className={`w-5 h-5 ${item.color}`}
                      strokeWidth={2.2}
                    />
                  </motion.div>

                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-[var(--foreground)]/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
