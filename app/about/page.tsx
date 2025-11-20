"use client";

import { motion } from "framer-motion";
import Image from "next/image";




export default function AboutPage() {
  return (
    <main className="container pt-40 pb-32 space-y-20">

      {/* Page Heading */}
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-5xl md:text-6xl font-extrabold mb-10 text-black"
      >
        About Me
      </motion.h1>

      {/* BIO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT – Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-black/10">
            <img
              src="/images/avatar.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT – Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-black/80 text-lg"
        >
          <p>
            I’m <span className="font-semibold text-black">Dhuvarakesh</span>,
            a Web Developer & AI Enthusiast based in Chennai. I enjoy building
            clean, modern, meaningful digital products that solve real problems.
          </p>

          <p>
            My core focus is blending{" "}
            <span className="font-semibold">Frontend Development</span> and{" "}
            <span className="font-semibold">AI-based tools</span> to create
            applications that are both visually appealing and intelligent.
          </p>

          <p>
            I constantly explore new technologies and enjoy working on projects
            that challenge me to learn and innovate.
          </p>
        </motion.div>
      </section>


      {/* EDUCATION + EXPERIENCE TIMELINE */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10"
        >
          Journey So Far
        </motion.h2>

        <div className="space-y-8">
          {/* ITEM */}
          {[
            {
              year: "2023 – Present",
              title: "B.Tech Student (3rd Year)",
              desc: "Studying at Rajalakshmi Institute of Technology, focusing on Web Development, Data Analytics, and AI projects.",
            },
            {
              year: "2025",
              title: "Intern – Aardhra (Zoho Implementation Team)",
              desc: "Gained hands-on experience in Zoho People, Zoho Sites, and SalesIQ. Learned real-world project workflows and client handling.",
            },
            {
              year: "2025",
              title: "AI & Web Projects",
              desc: "Developed multiple AI-based tools, dashboards, and applications using React, Next.js, Python, ML libraries, and APIs.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg"
            >
              <p className="text-blue-700 font-semibold">{item.year}</p>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-black/70 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CURRENTLY LEARNING */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10"
        >
          Currently Learning
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {["Advanced React", "Next.js App Router", "AI Agents", "LangChain", "Machine Learning", "Backend APIs"].map(
            (skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="px-5 py-2 bg-black/10 rounded-xl text-black font-medium"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </section>


      {/* INTERESTS */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10"
        >
          Interests
        </motion.h2>

        <ul className="list-disc pl-6 text-lg text-black/80 space-y-2">
          <li>Artificial Intelligence & Automation</li>
          <li>Web Development & UI/UX Design</li>
          <li>Building Creative Side Projects</li>
          <li>Exploring New Technologies</li>
          <li>Data Science & Visualization</li>
        </ul>
      </section>


      {/* FUN FACTS */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10"
        >
          Fun Facts
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "I love solving real-world problems with code.",
            "I enjoy designing clean and modern UIs.",
            "I build AI mini-projects for fun.",
          ].map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow border border-white/20"
            >
              {fact}
            </motion.div>
          ))}
        </div>
      </section>


    </main>
  );
}
