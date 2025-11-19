"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container py-36">
      {/* PAGE TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold mb-10"
      >
        About Me
      </motion.h1>

      {/* ABOUT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white/30"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl font-bold">Who I Am</h2>
            <p className="text-lg leading-relaxed text-black/80">
              I’m <span className="font-semibold">Dhuvarakesh</span>, a web 
              developer and AI enthusiast based in Chennai. I enjoy creating 
              clean, modern, and intuitive digital experiences using 
              cutting-edge technologies.
            </p>

            <p className="text-lg leading-relaxed text-black/80">
              I’m passionate about  
              <span className="font-semibold"> frontend development</span>, 
              <span className="font-semibold"> AI-driven applications</span>, 
              and building products that solve real-world problems.  
            </p>

            <p className="text-lg leading-relaxed text-black/80">
              Outside coding, I love exploring new tech, improving developer 
              workflows, and working on meaningful side-projects.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-md border border-white/20">
                <h3 className="text-xl font-semibold">2+ Years</h3>
                <p className="text-black/70">Development Experience</p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-md border border-white/20">
                <h3 className="text-xl font-semibold">3+ Projects</h3>
                <p className="text-black/70">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
