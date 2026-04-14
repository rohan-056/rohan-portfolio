"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CERTIFICATES } from "@/constants";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Certificates
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              href={cert.link}
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full rounded-xl border border-[#2A0E61] bg-[#0300145c] backdrop-blur-sm p-6 hover:border-purple-500 hover:bg-[#7042f810] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-purple-400 bg-[#7042f820] border border-[#7042f840] px-2 py-1 rounded-full">
                  {cert.issuer}
                </span>
                <span className="text-[12px] text-gray-500 whitespace-nowrap">{cert.date}</span>
              </div>
              <h3 className="text-white font-medium text-[15px] leading-snug group-hover:text-purple-300 transition">
                {cert.title}
              </h3>
              <div className="mt-4 flex items-center gap-1 text-[12px] text-cyan-500 opacity-0 group-hover:opacity-100 transition">
                <span>View Certificate</span>
                <span>→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
