 "use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

// Timeline data
const timelineData = [
  {
    id: "2024",
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/digital-landscape.jpg"
              alt="Project screenshot 1"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/water-ripple.jpg"
              alt="Project screenshot 2"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/abstract-paint.jpg"
              alt="Project screenshot 3"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/neon-abstract.jpg"
              alt="Project screenshot 4"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "2023",
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-4">
          Released a suite of UI components and animation libraries
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-400 text-sm mb-1">
            ✅ Advanced animation system with framer-motion
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm mb-1">
            ✅ Component library with 50+ customizable elements
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm mb-1">
            ✅ Responsive layout system for all screen sizes
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm mb-1">
            ✅ Dark mode support with seamless transitions
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/floating/image1.jpg"
              alt="Project screenshot 5"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/floating/image2.jpg"
              alt="Project screenshot 6"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "changelog",
    title: "Changelog",
    content: (
      <div>
        <p className="text-neutral-300 text-sm md:text-base font-normal mb-4">
          Deployed 5 new components this month
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-400 text-sm">
            ✅ Parallax floating component
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm">
            ✅ Timeline component with scroll animations
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm">
            ✅ Advanced grid gallery with hover effects
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm">
            ✅ Interactive 3D card component
          </div>
          <div className="flex gap-2 items-center text-neutral-400 text-sm">
            ✅ Animated statistics counter
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/floating/image3.jpg"
              alt="Project screenshot 7"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <Image
              src="/images/floating/image4.jpg"
              alt="Project screenshot 8"
              width={500}
              height={300}
              className="w-full h-auto"
            />
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
}
