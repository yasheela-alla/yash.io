"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Socials", href: "/socials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("/");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setActiveItem(pathname || "/");
  }, [pathname]);

  // Calculate the position of the light indicator based on the active item
  const getIndicatorPosition = () => {
    if (!mounted) return "20px";  // Default to home position for SSR

    switch(activeItem) {
      case "/":
        return "20px";
      case "/about":
        return "92px";
      case "/projects":
        return "178px";
      case "/events":
        return "264px";
      case "/socials":
        return "350px";
      default:
        return "20px";
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md px-2 py-2 rounded-full border border-zinc-800">
        <nav className="flex items-center gap-1 relative">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 relative rounded-full text-sm font-medium transition-all duration-300",
                  isActive ? "text-white" : "text-zinc-400 hover:text-white/80",
                )}
                onClick={() => setActiveItem(item.href)}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-zinc-800 -z-10" />
                )}
                {item.label}
              </Link>
            );
          })}
          {/* Light indicator above active tab */}
          <div
            className="absolute -top-5 left-0 w-6 h-1 bg-white rounded-full transform transition-all duration-300"
            style={{
              left: getIndicatorPosition(),
            }}
          />
        </nav>
      </div>
    </div>
  );
}
