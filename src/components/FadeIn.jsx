"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  duration = 0.6,
  amount = 0.5,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, top: "100px" }}
      whileInView={{ opacity: 1, top: "0px" }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
