"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

// Timeline data
const timelineData = [
  {
    id: "sih2024",
    title: "Smart India Hackathon 2024",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
          Developing an AI-powered solution for Centralized Firewall with Application Protection.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="https://imgs.search.brave.com/UJnfIwgtGpWWCsUofVJPurvCxI-IB3XRUjHJnvjrnuQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjM0ZDE5MTJj/NzAzMDI1M2U3M2Qy/OWYxZWEzOTc4Yjdm/NDE5MzVhMTgyODE3/ZGVhYzU2NzRmMzVl/ZjkxMDZkZS93d3cu/c2loLmdvdi5pbi8"
              alt="SIH 2024 Logo"
              width={50}
              height={30}
              className="w-full h-auto scale-90"
            />
          </div>
        </div>

        <div className="text-neutral-400 text-sm mt-6 space-y-2">
          <div>Visakhapatnam, India – September 2024</div>
          <div>
            <a href="https://github.com/CyberKavach/" target="_blank" rel="noopener noreferrer">Project Repository</a>
          </div>
          <div>
            <a href="https://github.com/CyberKavach/cyberkavach-docs" target="_blank" rel="noopener noreferrer">Document</a>
          </div>
          <div>
            <a href="https://cyberkavach.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "hacktoberfest",
    title: "Hacktoberfest 2024",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
          Earned the Champion Badge with 570 points, ranking 370 out of 2500 contributors under GSSoC 2024 Extd
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="https://imgs.search.brave.com/m2bIDxzTfHtZBfj5CHI9ROcPzBB8C6ldMPNDfgss-wI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdjL0dvb2dsZV9T/dW1tZXJfb2ZfQ29k/ZV9zdW5fbG9nb18y/MDIyLnN2Zw"
              alt="Hacktoberfest Badge"
              width={50}
              height={30}
              className="w-full h-auto scale-90"
            />
          </div>
        </div>

        <div className="text-neutral-400 text-sm mt-6 space-y-2">
          <div> Visakhapatnam, India – November 2024</div>
          <div>
            <a href="https://dev.to/yasheela-alla/my-contributions-for-hacktoberfest-2024-part-1-2i1o" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
          <div>
            🏅 <a href="https://www.holopin.io/@yasheelaalla#" target="_blank" rel="noopener noreferrer">Holopin Badges</a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "aimlhack",
    title: "AI/ML Hackathon 2025",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
          A data analysis and prediction based web application.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v"
              alt="AI/ML Hack Logo"
              width={50}
              height={30}
              className="w-full h-auto scale-90"
            />
          </div>
        </div>

        <div className="text-neutral-400 text-sm mt-6 space-y-2">
          <div> Visakhapatnam, India – February 2025</div>
          <div>
             <a href="https://github.com/yasheela-alla/ML-App" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
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
          Events & Timeline
        </motion.h1>
        <motion.p
          initial={{ opacity: mounted ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-center max-w-2xl mx-auto mb-16"
        >
          A chronological journey through my career milestones and achievements.
        </motion.p>
      </div>
      <Timeline data={timelineData} />
    </div>
  );
}
