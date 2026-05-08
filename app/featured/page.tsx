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
      className="relative py-28 px-8 md:px-20 overflow-hidden"
    >
      {/* Ambient Shapes (Matching Hero) */}
      <div className="absolute -top-32 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-15 rounded-full blur-3xl animate-blob"></div>

      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Container */}
      <div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* ========================= */}
          {/* Section Heading */}
          {/* ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60">
              Featured Work
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Proof of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                real products
              </span>
              .
            </h2>

            <p className="mt-6 text-lg text-[var(--foreground)]/70 leading-relaxed">
              A few projects that highlight design, performance, and execution.
            </p>
          </motion.div>
          <div className="absolute right-0 top-2 w-36 h-36 bg-purple-500/20 blur-3xl rounded-full" />
        </div>
        {/* ========================= */}
        {/* Main Featured Project */}
        {/* ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card
            className="
              rounded-3xl border border-[var(--foreground)]/10 bg-white/5 backdrop-blur-xl shadow-sm overflow-hidden mb-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-cyan-400/30"
          >
            <CardContent className="p-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--foreground)]/60">
                  Case Study
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Movie Streaming Platform
                </h3>

                <p className="mt-4 text-[var(--foreground)]/70 leading-relaxed">
                  A Netflix-style experience built with modern UI, auth, and
                  smooth browsing.
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/projects"
                    className="
                      inline-flex items-center px-7 py-3 rounded-xl
                      bg-[var(--button-background)] text-[var(--button-foreground)]
                      font-medium transition
                      hover:opacity-80
                    "
                  >
                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--foreground)]/10 group">
                <Image
                  src="/Movie-Store.webp"
                  alt="Movie Streaming Preview"
                  width={600}
                  height={400}
                  priority
                  className="
                    object-cover w-full h-64
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* Soft overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ========================= */}
        {/* Supporting Projects Grid */}
        {/* ========================= */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card Template */}
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
              image: "/placeholder-shop.png",
              accent: "text-purple-400",
            },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  rounded-3xl border border-[var(--foreground)]/10
                  bg-white/5 backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-xl
                "
              >
                <CardContent className="p-8">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-[var(--foreground)]/10 mb-6 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      priority
                      className="
                        object-cover w-full h-56
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-[var(--foreground)]/70 leading-relaxed">
                    {project.desc}
                  </p>

                  <Link
                    href="/projects"
                    className={`mt-6 inline-flex items-center text-sm font-medium ${project.accent} hover:opacity-80 transition`}
                  >
                    View Work <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ========================= */}
        {/* Bottom CTA */}
        {/* ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-[var(--foreground)]/80">
            Want to explore the full portfolio?
          </p>

          <Link
            href="/projects"
            className="
              px-7 py-3 rounded-xl border border-[var(--foreground)]/30
              hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition
            "
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
