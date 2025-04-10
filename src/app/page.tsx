"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { SplashCursor } from "@/components/ui/splash-cursor";

// Define the main gallery images for floating
const floatingImages = [
  {
    id: 1,
    url: "/images/floating/image1.jpg",
    alt: "A blurry photo of a crowd of people",
  },
  {
    id: 2,
    url: "/images/floating/image2.jpg",
    alt: "Neon Palm",
  },
  {
    id: 3,
    url: "/images/floating/image3.jpg",
    alt: "Rippling Crystal Blue Water",
  },
  {
    id: 4,
    url: "/images/floating/image4.jpg",
    alt: "Man in black shirt under blue sky",
  },
  {
    id: 5,
    url: "/images/floating/image5.jpg",
    alt: "A table topped with two wine glasses and plates",
  },
  {
    id: 6,
    url: "/images/water-ripple.jpg",
    alt: "Water Ripple",
  },
  {
    id: 7,
    url: "/images/abstract-paint.jpg",
    alt: "Abstract Paint",
  },
  {
    id: 8,
    url: "/images/neon-abstract.jpg",
    alt: "Neon Abstract",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
        <div className="relative flex w-full h-screen justify-center items-center bg-black overflow-hidden">
          <div className="z-50 text-center space-y-4 items-center flex flex-col">
            <p className="text-5xl md:text-7xl z-50 text-white font-serif italic">
              fancy.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Add the splash cursor effect */}
      <SplashCursor />

      <div className="relative flex w-full h-screen justify-center items-center bg-black overflow-hidden">
        {/* Centered content */}
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 0.5 }}
        >
          <p className="text-5xl md:text-7xl z-50 text-white font-serif italic">
            fancy.
          </p>
          <Link
            href="/download"
            className="z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 px-4 w-24 cursor-pointer text-xs"
          >
            Download
          </Link>
        </motion.div>

        {/* Floating images */}
        <Floating sensitivity={-1} className="overflow-hidden">
          <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={floatingImages[0].url}
                alt={floatingImages[0].alt}
                width={240}
                height={240}
                className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={1} className="top-[10%] left-[32%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={floatingImages[1].url}
                alt={floatingImages[1].alt}
                width={280}
                height={280}
                className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2} className="top-[2%] left-[53%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={floatingImages[2].url}
                alt={floatingImages[2].alt}
                width={400}
                height={520}
                className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={1} className="top-[0%] left-[83%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src={floatingImages[3].url}
                alt={floatingImages[3].alt}
                width={320}
                height={320}
                className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>

          <FloatingElement depth={1} className="top-[40%] left-[2%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image
                src={floatingImages[4].url}
                alt={floatingImages[4].alt}
                width={360}
                height={360}
                className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2} className="top-[70%] left-[77%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Image
                src={floatingImages[5].url}
                alt={floatingImages[5].alt}
                width={360}
                height={480}
                className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>

          <FloatingElement depth={4} className="top-[73%] left-[15%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                src={floatingImages[6].url}
                alt={floatingImages[6].alt}
                width={520}
                height={700}
                className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={1} className="top-[80%] left-[50%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Image
                src={floatingImages[7].url}
                alt={floatingImages[7].alt}
                width={320}
                height={320}
                className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md"
              />
            </motion.div>
          </FloatingElement>
        </Floating>
      </div>
    </div>
  );
}
