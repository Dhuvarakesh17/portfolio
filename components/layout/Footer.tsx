"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="container bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          {/* Brand / Name */}
          <h2 className="text-2xl font-bold text-black">
            Dhuvarakesh
          </h2>

          {/* Social Icons */}
          <div className="flex gap-6 text-black/80 text-2xl">
            <Link 
              href="https://github.com/Dhuvarakesh17" 
              target="_blank"
              className="hover:text-black transition"
            >
              <FaGithub />
            </Link>
            <Link 
              href="https://linkedin.com/in/dhuvarakesh-s-5195b1291" 
              target="_blank"
              className="hover:text-black transition"
            >
              <FaLinkedin />
            </Link>
            <Link 
              href="mailto:dhuvarakesh@gmail.com"
              className="hover:text-black transition"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-black/20"></div>

        {/* Copyright */}
        <p className="text-center text-black/70 text-sm mt-6">
          © {new Date().getFullYear()} Dhuvarakesh. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
