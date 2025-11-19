"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="container pt-40 pb-32">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-4xl md:text-5xl font-extrabold mb-12"
      >
        Projects
      </motion.h1>

      {/* Project Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </main>
  );
}

/* ─────────────────────────────────────────────── */
/* Project Card Component */
/* ─────────────────────────────────────────────── */

function ProjectCard({ project }: any) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg overflow-hidden hover:shadow-xl transition group"
    >
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-black/70">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-black/10 rounded-lg text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-3">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition text-sm"
            >
              Live Demo
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="px-4 py-2 border border-black/40 rounded-lg hover:bg-black hover:text-white transition text-sm"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
    