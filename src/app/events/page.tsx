"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

// New Hackathon Data
const timelineData = [
  {
    id: "sih2024",
    title: "Smart India Hackathon 2024",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-4">
          Developing an AI-powered solution for Centralized Firewall with Application Protection.
        </p>
        <p className="text-neutral-400 text-sm mb-2">Location: Visakhapatnam, India</p>
        <p className="text-neutral-400 text-sm mb-4">Date: September 2024</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <a href="https://github.com/CyberKavach/" className="text-blue-400 underline" target="_blank">Project Repository</a>
          <a href="https://github.com/CyberKavach/cyberkavach-docs" className="text-blue-400 underline" target="_blank">Document</a>
          <a href="https://cyberkavach.vercel.app/" className="text-blue-400 underline" target="_blank">Live Demo</a>
        </div>
        <Image
          src="https://imgs.search.brave.com/UJnfIwgtGpWWCsUofVJPurvCxI-IB3XRUjHJnvjrnuQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv..."
          alt="SIH Logo"
          width={64}
          height={64}
        />
      </div>
    ),
  },
  {
    id: "hacktoberfest",
    title: "Hacktoberfest 2024",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-4">
          Earned the Champion Badge with 570 points, ranking 370 out of 2500 contributors under GSSoC 2024 Extd.
        </p>
        <p className="text-neutral-400 text-sm mb-2">Location: Visakhapatnam, India</p>
        <p className="text-neutral-400 text-sm mb-4">Date: November 2024</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <a href="https://dev.to/yasheela-alla/my-contributions-for-hacktoberfest-2024-part-1-2i1o" className="text-blue-400 underline" target="_blank">Blog</a>
          <a href="https://www.holopin.io/@yasheelaalla#" className="text-blue-400 underline" target="_blank">Holopin Badges</a>
        </div>
        <Image
          src="https://imgs.search.brave.com/m2bIDxzTfHtZBfj5CHI9ROcPzBB8C6ldMPNDfgss-wI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv..."
          alt="Hacktoberfest Logo"
          width={64}
          height={64}
        />
      </div>
    ),
  },
  {
    id: "aimlhack",
    title: "AI/ML Hackathon 2025",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-4">
          A data analysis and prediction based web application.
        </p>
        <p className="text-neutral-400 text-sm mb-2">Location: Visakhapatnam, India</p>
        <p className="text-neutral-400 text-sm mb-4">Date: February 2025</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <a href="https://github.com/yasheela-alla/ML-App" className="text-blue-400 underline" target="_blank">GitHub Repository</a>
        </div>
        <Image
          src="https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj..."
          alt="AI/ML Logo"
          width={64}
          height={64}
        />
      </div>
    ),
  },
];

export default function Events() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <motion.h1
          initial={{ opacity: mounted ? 0 : 1, y: mounted ? -20 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2 text-center"
        >
          Hackathon Highlights
        </motion.h1>
        <motion.p
          initial={{ opacity: mounted ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-center max-w-2xl mx-auto mb-16"
        >
          A timeline of my hackathon projects, awards, and contributions.
        </motion.p>
      </div>
      <Timeline data={timelineData} />
    </div>
  );
}
