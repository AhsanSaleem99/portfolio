"use client";

import {
  motion,
  useMotionValue,
  LazyMotion,
  domAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiPrisma,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML 5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS 3", icon: SiCss3, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Express.js", icon: SiExpress, color: "#f7df1e" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "GitHub", icon: SiGithub, color: "#181818" },
  { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 1. Only load/animate when in view
  const isInView = useInView(sectionRef, { once: true, margin: "200px" });

  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<(typeof skills)[0] | null>(
    null,
  );

  const repeatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    if (carouselRef.current && isInView) {
      setWidth(carouselRef.current.scrollWidth / 3);
    }
  }, [isInView]);

  // 2. Optimized Animation Loop
  useEffect(() => {
    if (!isInView || width === 0) return;

    let requestRef: number;
    const step = 0.6; // Slightly increased for smoothness

    const animate = () => {
      const currentX = x.get();
      x.set(currentX - step);

      if (Math.abs(currentX) >= width) {
        x.set(0);
      }
      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, [width, x, isInView]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={sectionRef}
        id="skills"
        className="relative py-16 px-6 md:px-20 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/60">
                Expertise
              </p>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
                Tools that power{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  products
                </span>
                .
              </h2>
              <p className="mt-6 text-lg text-[var(--foreground)]/70 leading-relaxed">
                I leverage modern tools to deliver scalable and beautiful
                digital experiences.
              </p>
            </div>
          </div>

          {/* Icon Preview Box - Hidden on small mobile to save space */}
          <div className="hidden md:flex h-48 w-48 items-center justify-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {hoveredSkill ? (
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                key={hoveredSkill.name}
              >
                <hoveredSkill.icon
                  className="h-24 w-24"
                  style={{ color: hoveredSkill.color }}
                />
              </motion.div>
            ) : (
              <div className="text-[var(--foreground)]/20 text-center text-sm font-mono uppercase tracking-widest">
                Hover icons
              </div>
            )}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-16 overflow-hidden">
          {/* Gradient Fades for depth */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[var(--background)] z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[var(--background)] z-20 pointer-events-none" />

          {isInView ? (
            <motion.div
              ref={carouselRef}
              className="flex gap-12 md:gap-16 whitespace-nowrap"
              style={{ x }}
            >
              {repeatedSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex flex-col items-center justify-center cursor-pointer py-4"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <skill.icon
                    className="w-10 h-10 md:w-12 md:h-12 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="mt-3 text-xs md:text-sm font-medium opacity-60 uppercase tracking-tighter">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="h-24" /> // Placeholder to prevent layout shift
          )}
        </div>
      </section>
    </LazyMotion>
  );
};

export default Skills;
