// Navbar.jsx — 顶部导航栏
import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "首页" },
  { href: "#portfolio", label: "作品集" },
  { href: "#education", label: "教育经历" },
  { href: "#experience", label: "工作经历" },
  { href: "#growth", label: "成长与展望" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : ""
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-thin tracking-widest text-lg">胡璐</span>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Motion.nav>
  );
}
