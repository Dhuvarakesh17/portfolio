"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Data imports
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

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
      <section className="flex flex-col items-start gap-6 max-w-3xl pb-28">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-xl font-medium text-black/70"
        >
          Hello, I’m
        </motion.h3>

        {/* NAME + SPHERE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-black">
            Dhuvarakesh
          </h1>

          {/* Sphere Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl"
          >
            <img
              src="/images/avatar.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-lg md:text-xl text-black/80 max-w-2xl"
        >
          A passionate <span className="font-semibold">Web Developer</span> &
          <span className="font-semibold"> AI Enthusiast</span> who loves
          building clean, modern, and user-friendly applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
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
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-28 max-w-4xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-10"
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

          {/* Sphere Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl mx-auto md:mx-0"
          >
            <img
              src="/images/avatar.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <p className="text-lg leading-relaxed text-black/80">
            I’m <span className="font-semibold">Dhuvarakesh</span>, a web
            developer and AI enthusiast based in Chennai. I create clean,
            modern, and intuitive digital experiences using cutting-edge web
            technologies.
          </p>

          <p className="text-lg leading-relaxed text-black/80">
            I love working with{" "}
            <span className="font-semibold">frontend development</span>,{" "}
            <span className="font-semibold">AI-powered tools</span>, and
            building real-world impactful projects.
          </p>

          <p className="text-lg leading-relaxed text-black/80">
            Outside coding, I enjoy exploring new tech, learning advanced
            concepts, and building creative side-projects.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/80 p-4 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">2+ Years</h3>
              <p className="text-black/70">Experience</p>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">3+ Projects</h3>
              <p className="text-black/70">Completed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-28">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-14"
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
          {[ 
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Python", icon: SiPython },
            { name: "MySQL", icon: SiMysql },
          ].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center gap-4 hover:shadow-xl transition cursor-pointer"
              >
                <Icon size={40} className="text-black/80" />
                <p className="font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-14"
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
          className="text-4xl md:text-5xl font-extrabold mb-14"
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
          {certificates.map((cert) => (
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
      </section>
{/* RESUME SECTION */}
<section id="resume" className="py-28 max-w-3xl">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="text-4xl md:text-5xl font-extrabold mb-10"
  >
    Resume
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 flex flex-col md:flex-row items-center justify-between gap-6"
  >
    <p className="text-lg text-black/80">
      Download my updated resume to learn more about my experience and skills.
    </p>

    <a
      href="/resume/Dhuvarakesh-Resume.pdf"
      download
      className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/85 transition"
    >
      Download Resume
    </a>
  </motion.div>

</section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-28 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-14"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/30 space-y-6"
        >
          <p className="text-black/80 text-lg">
            I’d love to hear from you! Whether you want to collaborate, hire me,
            or ask questions — feel free to reach out.
          </p>

          {/* Contact Details */}
          <div className="space-y-2 text-black/70 text-lg">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              dhuvarakeshs92@gmail.com
            </p>
            <p>
              <span className="font-semibold">Location:</span> Chennai, India
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = {
                name: (form.elements.namedItem("name") as HTMLInputElement).value,
                email: (form.elements.namedItem("email") as HTMLInputElement).value,
                message: (form.elements.namedItem(
                  "message"
                ) as HTMLTextAreaElement).value,
              };

              const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
              });

              const result = await res.json();

              if (result.success) {
                alert("Message Sent Successfully!");
                form.reset();
              } else {
                alert("Failed to send message. Try again later.");
              }
            }}
            className="space-y-4 mt-6"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black/40"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black/40"
            />

            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black/40"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

    </main>
  );
}
