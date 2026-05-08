import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Layout,
  ShoppingCart,
  Rocket,
  CheckCircle2,
} from "lucide-react";

// 1. Data Store (Matches your Services component)
const servicesData = {
  "full-stack-apps": {
    title: "Full-Stack Applications",
    desc: "Secure, scalable apps built end-to-end for real users.",
    longDesc:
      "We build robust, production-ready applications using the latest tech stacks. From database architecture to frontend polish, we ensure your product can handle thousands of users without breaking a sweat.",
    icon: Code2,
    accent: "from-cyan-400 to-purple-500",
    features: [
      "Custom API Development",
      "Database Optimization",
      "Auth & Security",
      "Cloud Integration",
    ],
  },
  "ui-engineering": {
    title: "Modern UI Engineering",
    desc: "Clean interfaces that feel premium, fast, and responsive.",
    longDesc:
      "Your brand deserves a high-end digital presence. We specialize in creating pixel-perfect interfaces that aren't just beautiful, but also highly performant and accessible.",
    icon: Layout,
    accent: "from-purple-400 to-pink-500",
    features: [
      "Responsive Design",
      "Motion & Interactions",
      "Design Systems",
      "Accessibility (A11y)",
    ],
  },
  ecommerce: {
    title: "Ecommerce Platforms",
    desc: "Storefronts designed for conversion, growth, and scale.",
    longDesc:
      "Turn visitors into customers with high-converting online stores. We build custom ecommerce solutions that focus on speed, user experience, and seamless checkout flows.",
    icon: ShoppingCart,
    accent: "from-yellow-300 to-orange-500",
    features: [
      "Payment Integration",
      "Inventory Systems",
      "SEO Optimization",
      "Conversion Tracking",
    ],
  },
  "mvp-launch": {
    title: "Product Launch & MVPs",
    desc: "From idea to launch-ready product, shipped quickly.",
    longDesc:
      "Speed is everything for startups. We help you define the Minimum Viable Product (MVP) and ship it in weeks, not months, so you can start gathering real user feedback.",
    icon: Rocket,
    accent: "from-green-400 to-cyan-500",
    features: [
      "Rapid Prototyping",
      "Feature Prioritization",
      "Market Entry Strategy",
      "Scalable Foundations",
    ],
  },
};

// 2. Generate Static Params (Improves Performance)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// 3. The Dynamic Page Component
export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound(); // Triggers the default 404 page
  }

  return (
    <main className="relative min-h-screen bg-[var(--background)] py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Blobs (Themed to the service) */}
      <div
        className={`absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br ${service.accent} opacity-10 rounded-full blur-3xl`}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Services
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${service.accent} text-white shadow-2xl`}
          >
            <service.icon size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {service.title}
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-xl text-[var(--foreground)]/80 leading-relaxed mb-8">
              {service.longDesc}
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent my-8" />

            <h3 className="text-lg font-semibold mb-6">Core Deliverables</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-fit">
            <h4 className="text-lg font-bold mb-4">Ready to start?</h4>
            <p className="text-sm text-[var(--foreground)]/60 mb-6 leading-relaxed">
              Lets discuss how we can bring your {service.title} project to
              life.
            </p>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
