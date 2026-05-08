"use client";
import React from "react";
import Link from "next/link";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Layout, ShoppingCart, Rocket } from "lucide-react";

const services = [
  {
    title: "Full-Stack Applications",
    slug: "full-stack-apps", // For dynamic routing
    desc: "Secure, scalable apps built end-to-end for real users.",
    icon: Code2,
    accent: "from-cyan-400 to-purple-500",
  },
  {
    title: "Modern UI Engineering",
    slug: "ui-engineering",
    desc: "Clean interfaces that feel premium, fast, and responsive.",
    icon: Layout,
    accent: "from-purple-400 to-pink-500",
  },
  {
    title: "Ecommerce Platforms",
    slug: "ecommerce",
    desc: "Storefronts designed for conversion, growth, and scale.",
    icon: ShoppingCart,
    accent: "from-yellow-300 to-orange-500",
  },
  {
    title: "Product Launch & MVPs",
    slug: "mvp-launch",
    desc: "From idea to launch-ready product, shipped quickly.",
    icon: Rocket,
    accent: "from-green-400 to-cyan-500",
  },
];

const Services = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="services"
        className="relative py-16 px-6 md:px-20 overflow-hidden"
      >
        {/* Ambient Shapes - Reduced opacity on mobile for performance */}
        <div className="absolute -top-28 left-10 w-64 h-64 md:w-[380px] md:h-[380px] bg-gradient-to-tr from-blue-400 to-transparent opacity-10 md:opacity-15 rounded-full blur-3xl animate-blob pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--foreground)]/60">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Services that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                scale
              </span>
              .
            </h2>
          </motion.div>

          {/* Grid: 1 col on mobile, 2 col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full rounded-2xl border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.08]">
                    {/* p-6 for better mobile spacing */}
                    <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${service.accent} text-white`}
                      >
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-[var(--foreground)]/70 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Services;
