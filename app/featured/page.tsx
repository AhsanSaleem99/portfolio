"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const Featured = () => {
  return (
    <section
      id="projects"
      // FIX 1: Reduced py-28 to py-20 on mobile to prevent massive empty gaps
      className="relative py-20 md:py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Ambient Shapes - Added pointer-events-none */}
      <div className="pointer-events-none absolute -top-32 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-15 rounded-full blur-3xl animate-blob"></div>
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // FIX 2: Reduced Y offset for smoother mobile entrance
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters view
          className="mb-12 md:mb-16 max-w-2xl text-center md:text-left" // Centered on mobile
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60">
            Featured Work
          </p>
          <h2 className="mt-4 md:mt-6 text-3xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            Proof of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              real products
            </span>
            .
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-[var(--foreground)]/70 leading-relaxed">
            A few projects that highlight design, performance, and execution.
          </p>
        </motion.div>

        {/* Main Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="rounded-3xl border border-[var(--foreground)]/10 bg-white/5 backdrop-blur-xl shadow-sm overflow-hidden mb-8 md:mb-12 transition-all duration-500 hover:shadow-xl hover:border-cyan-400/30">
            {/* FIX 3: p-6 on mobile, p-10 on desktop to save screen real estate */}
            <CardContent className="p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                {" "}
                {/* Image stays on top on mobile */}
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]/60">
                  Case Study
                </p>
                <h3 className="mt-2 md:mt-4 text-xl md:text-2xl font-semibold">
                  Movie Streaming Platform
                </h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base text-[var(--foreground)]/70 leading-relaxed">
                  A Netflix-style experience built with modern UI, auth, and
                  smooth browsing.
                </p>
                <div className="mt-6 md:mt-8">
                  <Link
                    href="/projects"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[var(--button-background)] text-[var(--button-foreground)] font-medium transition hover:opacity-80 text-sm md:text-base"
                  >
                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden border border-[var(--foreground)]/10 group">
                <Image
                  src="/Movie-Store.webp"
                  alt="Movie Streaming Preview"
                  width={600}
                  height={400}
                  // FIX 4: Removed priority! This is below the fold.
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-48 md:h-64 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Web Authentication System",
              desc: "Secure sign-in, sign-out, and protected routing.",
              image: "/AuthenticationApp.webp",
              accent: "text-cyan-400",
            },
            {
              title: "Ecommerce Platform (In Progress)",
              desc: "Product discovery, cart flow, and storefront design.",
              image: "/portfolio.webp",
              accent: "text-purple-400",
            },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="rounded-3xl border border-[var(--foreground)]/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <div className="relative rounded-xl overflow-hidden border border-[var(--foreground)]/10 mb-5 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      // FIX 5: No priority here either.
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover w-full h-44 md:h-56 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-[var(--foreground)]/70 leading-relaxed">
                    {project.desc}
                  </p>
                  <Link
                    href="/projects"
                    className={`mt-5 inline-flex items-center text-sm font-medium ${project.accent} hover:opacity-80 transition`}
                  >
                    View Work <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
