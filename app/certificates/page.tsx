"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <main className="container pt-40 pb-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-extrabold mb-14"
      >
        Certificates
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl border shadow"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image src={cert.image} alt={cert.title} fill />
            </div>

            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-black/70 text-sm">
              {cert.issuer} • {cert.year}
            </p>

            <a
              href={cert.url}
              target="_blank"
              className="inline-block mt-4 px-5 py-2 bg-black text-white rounded-xl"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
