"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon
} from "lucide-react";

export default function Socials() {
  const [mounted, setMounted] = useState(false);

  // Function to generate and download a simple resume text file
  const downloadResume = () => {
    if (!mounted) return;

    // Create resume content
    const resumeContent = `
PROFESSIONAL RESUME

PERSONAL INFORMATION
-------------------
Name: Alex Johnson
Email: contact@example.com
Website: www.portfolio-website.com
LinkedIn: linkedin.com/in/alexjohnson

EXPERIENCE
-------------------
Senior Frontend Developer
Aceternity UI | 2022 - Present
• Led the development of the component library used by 10,000+ developers.
• Built scalable and accessible UI components with React, TypeScript, and Tailwind CSS.
• Optimized performance across all major browsers and devices.
• Mentored junior developers and conducted code reviews.

UI/UX Developer
Digital Craft Studio | 2020 - 2022
• Designed and developed interactive web experiences for high-profile clients.
• Collaborated with design and product teams to transform concepts into functional interfaces.
• Implemented complex animations and micro-interactions using GSAP and Framer Motion.
• Improved load times by 40% through asset optimization and code splitting.

EDUCATION
-------------------
Master of Science in Interactive Media
University of Creative Arts | 2018 - 2020

Bachelor of Computer Science
Tech Institute | 2014 - 2018

SKILLS
-------------------
Development: React.js, TypeScript, Next.js, Tailwind CSS, Framer Motion
Design: UI/UX Design, Figma, Interaction Design
Other: Team Leadership, Project Management
`;

    // Create a blob and download link
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side with text content */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: mounted ? 0 : 1, y: mounted ? 20 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-purple-500">Let&apos;s</span> Work<br />
                Together!
              </h1>

              <p className="text-zinc-400 text-lg max-w-lg mb-12">
                Feel free to contact me if you have any work opportunities.
              </p>

              <button
                onClick={downloadResume}
                className="inline-flex items-center gap-2 text-xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity mb-4 w-full sm:w-auto"
              >
                Download Resume <Download className="w-5 h-5" />
              </button>

              <div className="w-full sm:w-auto mt-4">
                <Link
                  href="/contact-me"
                  className="inline-flex items-center gap-2 text-xl font-medium bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto"
                >
                  Contact Me <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-16">
                <div className="flex flex-wrap gap-8">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <TwitterIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </Link>
                </div>
                <p className="mt-8 text-zinc-500">
                  Open to Freelance Projects — Let&apos;s Collaborate!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right side with image */}
          <motion.div
            initial={{ opacity: mounted ? 0 : 1, scale: mounted ? 0.9 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />
              <div className="w-full max-w-md rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800">
                <Image
                  src="/images/abstract-paint.jpg" // Using existing image for now, but ideally you'd use a robot/tech image
                  alt="Robot illustration"
                  width={500}
                  height={500}
                  className="w-full rounded-3xl object-cover aspect-square"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
