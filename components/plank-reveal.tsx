"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PlankReveal({
  children,
  from = "start",
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: "start" | "end";
  delay?: number;
  className?: string;
}) {
  const x = from === "start" ? -28 : 28;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
