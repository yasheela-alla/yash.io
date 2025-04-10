"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Bio Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: mounted ? 0 : 1, y: mounted ? 20 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                About Me
              </h1>
              <p className="text-lg text-zinc-300 mb-6">
                Hey! I'm a 3rd year Electronics undergrad and an explorer at heart. I'm passionate
                about building scalable, impactful tech — whether its deploying resilient systems,
                experimenting with AI, or diving deep into blockchain and Web3.
              </p>
              <p className="text-lg text-zinc-300 mb-6">
                Currently, Im working on <span className="text-purple-400 font-medium">kageLock</span>, a blockchain-based intellectual property protection project. 
                I love integrating AI into everything I do — in fact, this entire portfolio was crafted with AI assistance.
              </p>
              <p className="text-lg text-zinc-300 mb-6">
                Im on a journey through SRE, Web3, ML, and maybe some cybersecurity soon (👀). I believe tech is magic — and Im here to wield it.
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-zinc-800">C++</span>
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-zinc-800">Node.js</span>
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-zinc-800">Docker</span>
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-zinc-800">ML frameworks</span>
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-zinc-800">AWS</span>
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm border border-zinc-800">SRE</span>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-70 blur-xl" />
                <div className="absolute inset-4 bg-zinc-900 rounded-full overflow-hidden border-4 border-zinc-800">
                  <Image
                    src="/images/abstract-paint.jpg"
                    alt="Profile picture"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: mounted ? 0 : 1, y: mounted ? 20 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {/* Education */}
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-zinc-200">Education</h2>
              <div className="mb-6">
                <h3 className="font-medium text-white">B.Tech in Electronics & Communication</h3>
                <p className="text-zinc-400 text-sm">Vignans Institute of Information Technology</p>
                <p className="text-zinc-500 text-sm mt-1">3rd Year Undergraduate</p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-zinc-200">Experience</h2>
              <div className="mb-6">
                <h3 className="font-medium text-white">Technical intern</h3>
                <p className="text-zinc-400 text-sm">Programming hub, oct 2024 - dec 2024</p>
                <p className="text-zinc-500 text-sm mt-1">Writting blogs related to devOps and Cybersecurity</p>
              </div>
              <div>
                <h3 className="font-medium text-white">Cybersecurity intern</h3>
                <p className="text-zinc-400 text-sm">Palo Alto, 2023</p>
                <p className="text-zinc-500 text-sm mt-1">Worked on Intrusion detection system using snort3</p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-zinc-200">Interests</h2>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  <span>AI + Web3 experiments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  <span>Devops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  <span>Building things that scale</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  <span>Creative problem-solving with ML</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✦</span>
                  <span>Maybe cybersecurity next 😉</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}