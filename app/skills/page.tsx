"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Users,Target } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiFramer,
  SiDocker,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
} from "react-icons/si";


export default function SkillsPage() {
  return (
    <main className="container pt-40 pb-32">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-4xl md:text-5xl font-extrabold mb-12"
      >
        My Skills
      </motion.h1>

      {/* CATEGORY SECTION TEMPLATE */}
      <SkillCategory
        title="Frontend Development"
        skills={[
          {
            name: "React.js",
            icon: SiReact,
            description:
              "Component-based UI development for building fast, interactive interfaces.",
          },
          {
            name: "Next.js",
            icon: SiNextdotjs,
            description:
              "Full-stack React framework with SSR, ISR, routing, APIs, and SEO.",
          },
          {
            name: "TypeScript",
            icon: SiTypescript,
            description:
              "Strongly typed JavaScript that improves code quality and reduces bugs.",
          },
          {
            name: "JavaScript (ES6+)",
            icon: SiJavascript,
            description: "Core programming language of the web.",
          },
          {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            description:
              "Utility-first CSS framework used to create fast, responsive UI designs.",
          },
          {
            name: "HTML5 & CSS3",
            icon: SiHtml5,
            description: "Fundamental building blocks of modern web development.",
          },
        ]}
      />

      <SkillCategory
        title="Backend Development"
        skills={[
          {
            name: "Node.js",
            icon: SiNodedotjs,
            description: "JavaScript runtime for building scalable backend applications.",
          },
          {
            name: "Express.js",
            icon: SiExpress,
            description:
              "Minimal backend framework for building APIs and server-side logic.",
          },
          {
            name: "MySQL",
            icon: SiMysql,
            description:
              "Relational database used for storing structured and critical data.",
          },
          {
            name: "MongoDB",
            icon: SiMongodb,
            description:
              "NoSQL database used in modern scalable backend applications.",
          },
        ]}
      />

      <SkillCategory
        title="Programming Languages"
        skills={[
          {
            name: "Python",
            icon: SiPython,
            description: "Used for AI, automation, backend scripts, and ML tasks.",
          },
          {
            name: "JavaScript",
            icon: SiJavascript,
            description:
              "Core language used throughout frontend and backend development.",
          },
        ]}
      />

      <SkillCategory
        title="Tools & Other Skills"
        skills={[
          {
            name: "Git & GitHub",
            icon: SiGithub,
            description: "Version control, CI/CD, and collaborative development.",
          },
          {
            name: "Figma",
            icon: SiFigma,
            description: "UI/UX design tool used to create clean, responsive layouts.",
          },
          {
            name: "Framer Motion",
            icon: SiFramer,
            description: "Used to create animations, transitions, and modern UI effects.",
          },
          {
            name: "Docker",
            icon: SiDocker,
            description: "Containerization platform for developing, shipping, and running applications.",
          },
        ]}
      />
      <SkillCategory
        title="AI & Machine Learning"
        skills={[
          {
            name: "TensorFlow",
            icon: SiTensorflow,
            description: "Open-source platform for machine learning and AI.",
          },
          {
            name: "PyTorch",
            icon: SiPytorch,
            description: "Deep learning framework for building AI models.",
          },
          {
            name: "Scikit-learn",
            icon: SiScikitlearn,
            description: "Machine learning library for data mining and analysis.",
          },
          {
            name: "Keras",
            icon: SiKeras,
            description: "High-level neural networks API for fast experimentation.",
          },
        ]}
      />
      <SkillCategory
        title="Soft Skills"
        skills={[
          {
            name: "Problem Solving",
            icon: Brain,
            description: "Ability to analyze issues and develop effective solutions.",
          },
          {
            name:"Strong Communication",
            icon: MessageSquare,
            description: "Effective verbal and written communication skills.",
          },
          {
            name:"Team Collaboration",
            icon: Users,
            description: "Experience working in diverse teams to achieve common goals.",
          },
          {
            name:"Time Management", 
            icon:Target,
            description: "Efficiently managing time to meet deadlines and prioritize tasks.",
          }
        ]}
        />
    </main>
  );
}

/* ──────────────────────────────────────────────── */
/* COMPONENT FOR EACH SKILL CATEGORY */
/* ──────────────────────────────────────────────── */

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: {
    name: string;
    icon: any;
    description: string;
  }[];
}) {
  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-8"
      >
        {title}
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="grid md:grid-cols-2 gap-6"
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
              className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-2xl flex gap-5 hover:shadow-xl transition"
            >
              <Icon size={40} className="text-black/80 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-black/70">{skill.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
