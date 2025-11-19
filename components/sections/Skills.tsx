"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiNodedotjs,
  SiFramer,
  SiDocker,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  {name:"Docker",icon:SiDocker}
];

export default function Skills() {
  return (
    <section id="skills" className="container py-28">
      
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold mb-14"
      >
        Skills
      </motion.h2>

      {/* GRID */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-xl transition cursor-pointer"
            >
              <Icon size={40} className="text-black/80" />
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
