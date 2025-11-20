"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 py-12 bg-white/40 backdrop-blur-xl border-t border-white/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND + DESCRIPTION */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-3">Dhuvarakesh</h3>
          <p className="text-black/70 leading-relaxed">
            A passionate Web Developer & AI Enthusiast building clean, modern
            and user-friendly digital experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-3">Quick Links</h4>

          <ul className="space-y-2 text-black/80">
            <li>
              <Link href="/" className="hover:text-blue-500 hover:underline  transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 hover:underline transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-blue-500 hover:underline transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 hover:underline transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/certificates" className="hover:text-blue-500 hover:underline transition">
                Certificates
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-500 hover:underline transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-3">Connect</h4>

          <div className="flex flex-col space-y-3 text-black/80">
            <a
              href="mailto:dhuvarakeshs92@gmail.com"
              className="flex items-center gap-3 hover:text-blue-500 hover:underline transition"
            >
              <Mail className="w-5 h-5" /> dhuvarakeshs92@gmail.com
            </a>

            <a
              href="https://github.com/Dhuvarakesh17"
              target="_blank"
              className="flex items-center gap-3 hover:text-blue-500 hover:underline transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/dhuvarakesh-s-5195b1291"
              target="_blank"
              className="flex items-center gap-3 hover:text-blue-500 hover:underline transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="text-center mt-10 text-black/60 text-sm">
        © {new Date().getFullYear()} Dhuvarakesh S. All rights reserved.
      </div>
    </footer>
  );
}
