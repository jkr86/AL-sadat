"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "#home",         label: "Home" },
  { href: "#about",        label: "About" },
  { href: "#services",     label: "Services" },
  { href: "#process",      label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-soft border-b border-gray-100 py-3" : "py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="AL SADDAT Tax Advisors" width={44} height={44} className="object-contain" priority />
            <div>
              <div className="font-black text-base text-gray-900 leading-tight">AL SADDAT</div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-gold-600 uppercase">TAX ADVISORS</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-black transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)", boxShadow: "0 4px 14px rgba(255,210,0,0.35)" }}>
            Free Consultation <ChevronRight className="w-4 h-4" />
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.a key={l.href} href={l.href}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-900 text-xl font-semibold py-4 border-b border-gray-100 flex items-center justify-between group">
                  {l.label}
                  <ChevronRight className="w-5 h-5 text-gold-500 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
              <motion.a initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
                href="#contact" onClick={() => setMobileOpen(false)}
                className="mt-8 btn-primary justify-center">
                Get Free Consultation <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
