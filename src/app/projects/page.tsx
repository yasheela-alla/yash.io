"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gallery6 } from "@/components/blocks/gallery6";

// Project data for the gallery
const projectData = {
  heading: "Featured Projects",
  demoUrl: "#",
  items: [
    {
      id: "kageLocl",
      title: "Blockchain based Intellectual Property Protection",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "galpro",
      title: "Digital portfolio for developers to showcase their work and connect with others.",
      summary:
        "Explore our library of customizable components built with shadcn/ui and Tailwind CSS.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "rfid-tracker",
      title: "RFID based attendance system for schools and colleges.",
      summary:
        "Build websites that look great on any device with our responsive design patterns.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "Covid-predict",
      title: "ML app that prdicts the spread of COVID-19 in a given area.",
      summary:
        "Streamline your workflow with our developer-friendly tools and documentation.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "Performance First",
      summary:
        "Create fast, optimized websites using our performance-focused components.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
  ],
};

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Gallery6 {...projectData} />
        </motion.div>
      </div>
    </div>
  );
}
