"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FileDown} from "lucide-react";
// Data imports
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import SectionTitle from "@/components/sections/SectionTitle";

// Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiNodedotjs,
  SiFramer,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="relative container pt-48 pb-40">

      {/* Floating Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-6 top-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="absolute left-0 bottom-10 w-60 h-60 bg-yellow-100 rounded-full blur-3xl -z-10"
      />

      {/* HERO SECTION */}
<section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-32">

  {/* LEFT — Text */}
  <div className="flex flex-col items-start gap-6">

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="text-xl font-medium text-black/70"
    >
      Hello, I’m
    </motion.h3>

    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="text-6xl md:text-7xl font-extrabold leading-tight text-black"
    >
      Dhuvarakesh 
    </motion.h1>
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="text-6xl md:text-4xl font-extrabold leading-tight text-black"
    >
      Student | Web Developer 
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-lg md:text-xl text-black/80 max-w-xl"
    >
      A passionate <span className="font-semibold">Web Developer</span> &
      <span className="font-semibold"> AI Enthusiast</span> who loves building
      clean, modern, and user-friendly applications.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="flex gap-4 pt-4"
    >
      <Link
        href="/projects"
        className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition"
      >
        View Projects
      </Link>

      <a
        href="#contact"
        className="px-6 py-3 rounded-xl border border-black/40 font-medium hover:bg-black hover:text-white transition"
      >
        Contact Me
      </a>
    </motion.div>

  </div>

  {/* RIGHT — Big Square Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="flex justify-center md:justify-end"
  >
    <div className="w-60 h-60 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-black/10">
      <img
        src="/images/avatar.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>

</section>


     {/* ABOUT SECTION */}
<section id="about" className="py-28 max-w-4xl">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="text-4xl md:text-5xl text-left font-extrabold mb-10"
  >
    About Me
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/30 space-y-6"
  >
    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl mx-auto"
    >
      <img
        src="/images/avatar.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Short Intro */}
    <p className="text-lg leading-relaxed text-black/80 text-center">
      I&apos;m <span className="font-semibold">Dhuvarakesh</span>, a Web Developer &
      AI Enthusiast from Chennai. I build clean, modern, and intelligent digital 
      experiences using cutting-edge web and AI technologies.
    </p>

    <p className="text-lg leading-relaxed text-black/70 text-center">
      I love frontend development, AI tools, and crafting meaningful projects.
    </p>

    <div className="flex justify-center pt-4">
  <Link
    href="/about"
    className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition flex items-center gap-2"
  >
    More About Me
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
      />
    </svg>
  </Link>
</div>

  </motion.div>

</section>


      {/* SKILLS SECTION */}
<section id="skills" className="py-28">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl text-left font-extrabold mb-14"
  >
    Skills
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
  >
    {[ // Only show FIRST 8
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "MySQL", icon: SiMysql },
    ].slice(0, 8).map((skill, index) => {
      const Icon = skill.icon;
      return (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center gap-4 hover:shadow-xl transition"
        >
          <Icon size={40} className="text-black/80" />
          <p className="font-medium">{skill.name}</p>
        </motion.div>
      );
    })}
  </motion.div>

  {/* View All Skills */}
  <div className="flex justify-center pt-10">
    <Link
      href="/skills"
      className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition"
    >
      View All Skills
    </Link>
  </div>

</section>


      {/* PROJECTS SECTION */}
      <section id="projects" className="py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl  text-left font-extrabold mb-14"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-black/70 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black/10 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center pt-10">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl text-left font-extrabold mb-14"
        >
          Certificates
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {certificates.slice(0,3).map((cert) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-black/70 text-sm mt-1">
                {cert.issuer} • {cert.year}
              </p>

              <a
                href={cert.url}
                target="_blank"
                className="inline-block mt-4 px-5 py-2 rounded-xl bg-black text-white text-sm hover:bg-black/90 transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
              {/* View All Certificates */}
<div className="flex justify-center pt-10">
  <Link
    href="/certificates"
    className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition"
  >
    View All Certificates
  </Link>
</div>
      </section>

{/* RESUME SECTION */}
<section id="resume" className="py-28 max-w-6xl mx-auto">

  {/* TITLE */}
  <SectionTitle 
    icon={<FileDown className="w-9 h-9" />}
    title="Resume"
    
  />

  {/* CARD */}
  <div
    className="
      bg-white/60 backdrop-blur-xl 
      border border-white/30 
      p-10 md:p-12 
      rounded-3xl shadow-xl 
      flex flex-col md:flex-row 
      items-start md:items-center 
      justify-between gap-10
    "
  >
    {/* Left Text */}
    <div className="max-w-2xl">
      <h3 className="text-2xl font-bold text-black mb-2">
        Download My Resume
      </h3>
      <p className="text-black/70 text-lg leading-relaxed">
        Get my updated resume to explore my education, skills, projects, 
        experience, and achievements in detail.
      </p>
    </div>

    {/* Right Big Button */}
    <motion.a
      href="/resume/Dhuvarakesh-Resume.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        bg-black text-white 
        px-8 py-6 
        rounded-2xl 
        text-lg font-semibold 
        flex flex-col items-center justify-center 
        gap-2 shadow-lg hover:bg-black/90 transition
        w-full md:w-auto
        
      "
    >
      <FileDown className="w-6 h-6" />
      Download Resume
    </motion.a>
  </div>
</section>


{/* HIGHLIGHTS SECTION */}
<section id="highlights" className="py-28 max-w-6xl mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold mb-16 text-left"
  >
    Highlights
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >

    {/* CARD 1 — Academic Performance */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className="
        bg-white/70 backdrop-blur-xl 
        border border-white/30 
        p-8 rounded-3xl 
        shadow-lg hover:shadow-xl 
        transition min-h-[180px]
      "
    >
      <h3 className="text-xl font-semibold mb-3 text-black">Academic Performance</h3>
      <ul className="text-black/80 space-y-1 text-base leading-relaxed">
        <li>• CGPA: <span className="font-semibold">8.72+</span></li>
        <li>• Strong in CS Fundamentals</li>
        <li>• Best: Data Structures, AI, Web Development</li>
      </ul>
    </motion.div>

    {/* CARD 2 — Technical Strengths */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className="
        bg-white/70 backdrop-blur-xl 
        border border-white/30 
        p-8 rounded-3xl 
        shadow-lg hover:shadow-xl 
        transition min-h-[180px]
      "
    >
      <h3 className="text-xl font-semibold mb-3 text-black">Technical Strengths</h3>
      <ul className="text-black/80 space-y-1 text-base leading-relaxed">
        <li>• UI/UX & Modern Frontend</li>
        <li>• AI Mini Projects</li>
        <li>• API & Database Development</li>
      </ul>
    </motion.div>

    {/* CARD 3 — Experience */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className="
        bg-white/70 backdrop-blur-xl 
        border border-white/30 
        p-8 rounded-3xl 
        shadow-lg hover:shadow-xl 
        transition min-h-[180px]
      "
    >
      <h3 className="text-xl font-semibold mb-3 text-black">Experience & Internships</h3>
      <ul className="text-black/80 space-y-1 text-base leading-relaxed">
        <li>• Aardhra (Zoho Impl.) Internship</li>
        <li>• Tata Intervention Hackathon Participant</li>
        <li>• 4+ Projects & Real-World Tools Built</li>
      </ul>
    </motion.div>

  </motion.div>

</section>
{/* EDUCATION SECTION */}
<section id="education" className="py-28 max-w-6xl mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="text-4xl md:text-5xl font-extrabold mb-14 flex items-center gap-3 "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth="1.5" stroke="currentColor"
      className="w-10 h-10 text-black"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H9m3 0h3" />
    </svg>
    Education
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* CARD 1 */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        bg-white/60 backdrop-blur-xl 
        border border-white/30 
        p-8 rounded-3xl shadow-lg 
        hover:shadow-xl transition
      "
    >
      <div className="flex items-start gap-4">

        {/* ICON */}
        <div className="bg-purple-200/60 p-4 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 
                 0H9m3 0h3" />
          </svg>
        </div>

        {/* DETAILS */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black">
            Rajalakshmi Institute of Technology, Chennai
          </h3>
          <p className="text-black/70 mt-1">
            B.Tech in Artificial Intelligence and Data Science
          </p>
          <p className="text-black/60 text-sm mt-1">
            2023 – 2027
          </p>
        </div>

        {/* CGPA */}
        <p className="text-purple-600 font-semibold text-sm mt-1">
          CGPA: 8.72
        </p>
      </div>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        bg-white/60 backdrop-blur-xl 
        border border-white/30 
        p-8 rounded-3xl shadow-lg 
        hover:shadow-xl transition
      "
    >
      <div className="flex items-start gap-4">

        {/* ICON */}
        <div className="bg-blue-200/60 p-4 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 
                 0H9m3 0h3" />
          </svg>
        </div>

        {/* DETAILS */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black">
            Ananda Vidayalaya Matriculation & Higher Secondary School, Rajapalayam
          </h3>
          <p className="text-black/70 mt-1">
            Higher Secondary Education
          </p>
          <p className="text-black/60 text-sm mt-1">
            2021 – 2023
          </p>
        </div>

        {/* PERCENTAGE */}
        <p className="text-blue-600 font-semibold text-sm mt-1">
          93.3%
        </p>
      </div>
    </motion.div>

  </div>

</section>


      {/* CONTACT SECTION */}
<section id="contact" className="py-28 max-w-6xl mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="text-4xl md:text-5xl font-extrabold mb-16 text-left  "
  >
    Contact Me
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* LEFT — CONTACT INFORMATION */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        bg-white/60 backdrop-blur-xl 
        border border-white/30 
        shadow-xl p-10 rounded-3xl 
        space-y-8
      "
    >
      <h3 className="text-2xl font-semibold text-black">Contact Information</h3>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="bg-red-200/70 p-4 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 
              2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 
              0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 
              00-2.25 2.25m19.5 0v.243a2.25 2.25 0 
              01-1.07 1.916l-7.5 4.615a2.25 2.25 0 
              01-2.36 0L3.82 8.91a2.25 2.25 0 
              01-1.07-1.916V6.75" />
          </svg>
        </div>

        <div>
          <p className="font-semibold text-black text-lg">Email</p>
          <p className="text-black/70">dhuvarakeshs92@gmail.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="bg-purple-200/70 p-4 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 4.5l1.5-.375a2.25 2.25 0 
              012.235.675l2.621 2.621a2.25 2.25 
              0 01.543 2.256l-.7 2.1a12.035 
              12.035 0 006.263 6.263l2.1-.7a2.25 
              2.25 0 012.256.543l2.621 2.621a2.25 
              2.25 0 01.675 2.235l-.375 1.5a2.25 
              2.25 0 01-2.175 1.697A17.978 
              17.978 0 012.75 6.675 2.25 2.25 
              0 014.45 4.5h-.2z" />
          </svg>
        </div>

        <div>
          <p className="font-semibold text-black text-lg">Phone</p>
          <p className="text-black/70">+91 96296 12052</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="bg-blue-200/70 p-4 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 11.25a2.25 2.25 0 100-4.5 2.25 
              2.25 0 000 4.5zM12 21c4.97-4.97 
              7.5-8.25 7.5-12a7.5 7.5 0 
              10-15 0c0 3.75 2.53 7.03 7.5 
              12z" />
          </svg>
        </div>

        <div>
          <p className="font-semibold text-black text-lg">Location</p>
          <p className="text-black/70">Chennai, Tamil Nadu, India</p>
        </div>
      </div>

    </motion.div>

    {/* RIGHT — CONTACT FORM */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        bg-white/60 backdrop-blur-xl 
        border border-white/30 
        shadow-xl p-10 rounded-3xl 
        space-y-6
      "
    >
      <h3 className="text-2xl font-semibold text-black">Send Me a Message</h3>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;

          const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
          };

          const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formData),
          });

          const result = await res.json();
          result.success ? alert("Message Sent!") : alert("Failed to Send!");
          form.reset();
        }}
        className="space-y-4"
      >
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded-xl border border-black/20 backdrop-blur-md focus:ring-2 focus:ring-black/30"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full p-3 rounded-xl border border-black/20 backdrop-blur-md focus:ring-2 focus:ring-black/30"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded-xl border border-black/20 backdrop-blur-md focus:ring-2 focus:ring-black/30"
        ></textarea>

        <button
  type="submit"
  className="
    w-full py-3 rounded-xl bg-black text-white 
    font-medium hover:bg-black/90 transition
    flex items-center justify-center gap-2
  "
>
  <svg xmlns="http://www.w3.org/2000/svg"
    fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor"
    className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6 12l12-7-4 7 4 7-12-7z" />
  </svg>
  Send Message
</button>

      </form>

    </motion.div>

  </div>
</section>


    </main>
  );
}

