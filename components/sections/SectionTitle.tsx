"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

export default function SectionTitle({ icon, title }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-4xl md:text-5xl font-extrabold mb-12 flex items-center gap-3"
    >
      <span className="text-black w-10 h-10 flex items-center justify-center">
        {icon}
      </span>
      {title}
    </motion.h2>
  );
}
