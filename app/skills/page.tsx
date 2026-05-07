"use client";

import { motion, useMotionValue } from "framer-motion";
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<(typeof skills)[0] | null>(
    null,
  );

  // Duplicate array multiple times to ensure seamless scroll
  const repeatedSkills = [...skills, ...skills, ...skills];

  // Calculate the width of **one full original set**
  useEffect(() => {
    if (carouselRef.current) {
      const singleSetWidth = carouselRef.current.scrollWidth / 3;
      setWidth(singleSetWidth);
    }
  }, []);

  // Infinite horizontal scroll
  useEffect(() => {
    const step = 0.5; // adjust speed
    const animate = () => {
      x.set(x.get() - step);
      if (Math.abs(x.get()) >= width) {
        x.set(0);
      }
      requestAnimationFrame(animate);
    };
    if (width > 0) animate();
  }, [width, x]);

  return (
    <section
      id="skills"
      className="relative py-8 px-8 md:px-20 overflow-hidden"
    >
      <div className="flex">
        <div className="w-8xl">
          <div className="w-full mx-auto relative z-10">
            {/* Heading */}
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground)]/60">
                Expertise
              </p>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                <span className="block">Tools that power</span>
                <span className="block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    products
                  </span>
                  .
                </span>
              </h2>
              <p className="mt-6 text-lg text-[var(--foreground)]/70 leading-relaxed">
                From front-end to back-end, I leverage modern tools to deliver
                scalable, maintainable, and beautiful digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Preview Div */}
        <div className="mb-10 h-2xl w-xl flex items-center justify-center rounded-lg">
          {hoveredSkill ? (
            <hoveredSkill.icon
              className="h-[10rem] w-[10rem]"
              style={{ color: hoveredSkill.color }}
            />
          ) : (
            <p className="text-[var(--foreground)]/60"></p>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Edge fade */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[var(--background)]/90 pointer-events-none z-20" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[var(--background)]/90 pointer-events-none z-20" />

        <motion.div
          ref={carouselRef}
          className="flex gap-16 mt-8 whitespace-nowrap h-full"
          style={{ x }}
        >
          {repeatedSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                initial={{
                  scale: 1,
                  filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
                }}
                animate={{
                  scale: 1,
                  filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
                }}
                whileHover={{
                  scale: 1.2,
                  filter: `drop-shadow(0 0 4px ${skill.color}) drop-shadow(0 0 8px ${skill.color})`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center justify-center cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Icon className="w-10 h-10" style={{ color: skill.color }} />
                <span className="mt-2 text-sm font-medium text-[var(--foreground)]">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
