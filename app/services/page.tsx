import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Layout, ShoppingCart, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Applications",
      desc: "Secure, scalable apps built end-to-end for real users.",
      icon: Code2,
      accent: "from-cyan-400 to-purple-500",
    },
    {
      title: "Modern UI Engineering",
      desc: "Clean interfaces that feel premium, fast, and responsive.",
      icon: Layout,
      accent: "from-purple-400 to-pink-500",
    },
    {
      title: "Ecommerce Platforms",
      desc: "Storefronts designed for conversion, growth, and scale.",
      icon: ShoppingCart,
      accent: "from-yellow-300 to-orange-500",
    },
    {
      title: "Product Launch & MVPs",
      desc: "From idea to launch-ready product, shipped quickly.",
      icon: Rocket,
      accent: "from-green-400 to-cyan-500",
    },
  ];
  return (
    <section
      id="services"
      className="relative py-8 px-8 md:px-20 overflow-hidden"
    >
      {/* Ambient Shapes */}
      <div className="absolute -top-28 left-10 w-[380px] h-[380px] bg-gradient-to-tr from-[#60a5fa] via-transparent to-[#93c5fd] opacity-15 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-[#facc15] via-transparent to-[#fde68a] opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60">
            Services
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            <span className="block">Capabilities that</span>
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                scale
              </span>
              .
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--foreground)]/70 leading-relaxed">
            Focused services designed to help brands ship modern digital
            products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  group relative rounded-3xl border border-[var(--foreground)]/10
                  bg-white/5 backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-xl hover:border-cyan-400/30
                "
              >
                <CardContent className="p-8 flex items-start gap-5">
                  {/* Gradient Icon Background */}
                  <div
                    className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center
                      bg-gradient-to-tr ${service.accent}
                      text-white shadow-lg
                    `}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-[var(--foreground)]/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </CardContent>

                {/* Soft Gradient Hover Glow */}
                <div
                  className="
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                    transition duration-700 pointer-events-none
                    bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10
                  "
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
