"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const services   = ["FBR Services", "KPRA Services", "SECP Services", "NTN Registration", "Income Tax Filing", "Company Registration"];
const quickLinks = [{ label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Process", href: "#process" }, { label: "Testimonials", href: "#testimonials" }, { label: "Contact", href: "#contact" }];
const socials    = [{ icon: Facebook, href: "#", label: "Facebook" }, { icon: Twitter, href: "#", label: "Twitter" }, { icon: Linkedin, href: "#", label: "LinkedIn" }, { icon: Instagram, href: "#", label: "Instagram" }];
const WA_NUMBER  = "923005515985";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(90deg,transparent,#FFD200,#E6BC00,transparent)" }} />

      <div className="container-custom relative px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="mb-6">
              <Image src="/main-logo.png" alt="AL SADDAT Tax Advisors" width={300} height={100} className="object-contain h-24 w-auto" />
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-sm">
              Your trusted partner for complete tax, business, and compliance solutions in Pakistan.
              Professional | Reliable | Confidential | Committed to Your Success.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gold-600 hover:border-gold-300 hover:bg-amber-50 transition-all">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
              {/* WhatsApp */}
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl overflow-hidden hover:scale-110 transition-transform flex-shrink-0">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="24" cy="24" r="24" fill="#25D366"/>
                  <path fill="#fff" d="M24 10.4C16.5 10.4 10.4 16.5 10.4 24c0 2.4.6 4.7 1.8 6.7L10 38l7.5-2.2c1.9 1 4.1 1.6 6.5 1.6 7.5 0 13.6-6.1 13.6-13.6S31.5 10.4 24 10.4zm0 24.9c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.5 1.3 1.3-4.3-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2s11.2 5 11.2 11.2-5 11.1-11 11.1zm6.1-8.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-.9-.9-1.6-2-1.7-2.3-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.5-.1-.2-.7-1.8-1-2.5-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.5 5.4 4.8.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <h4 className="font-bold mb-5 text-gray-900 text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="text-gray-500 hover:text-gold-600 transition-colors text-sm flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{l.label}
                </a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <h4 className="font-bold mb-5 text-gray-900 text-xs uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}><a href="#services" className="text-gray-500 hover:text-gold-600 transition-colors text-sm flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{s}
                </a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.22 }}>
            <h4 className="font-bold mb-5 text-gray-900 text-xs uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li><a href="tel:03005515985" className="flex items-start gap-3 text-gray-500 hover:text-gold-600 transition-colors text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>0300-5515985</span></a></li>
              <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-500 hover:text-green-600 transition-colors text-sm">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0">
                  <circle cx="24" cy="24" r="24" fill="#25D366"/>
                  <path fill="#fff" d="M24 10.4C16.5 10.4 10.4 16.5 10.4 24c0 2.4.6 4.7 1.8 6.7L10 38l7.5-2.2c1.9 1 4.1 1.6 6.5 1.6 7.5 0 13.6-6.1 13.6-13.6S31.5 10.4 24 10.4zm0 24.9c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.5 1.3 1.3-4.3-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2s11.2 5 11.2 11.2-5 11.1-11 11.1zm6.1-8.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-.9-.9-1.6-2-1.7-2.3-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.5-.1-.2-.7-1.8-1-2.5-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.5 5.4 4.8.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/>
                </svg>
                <span>WhatsApp: +92 300-5515985</span></a></li>
              <li><a href="mailto:Alsaddattaxadvisors@gmail.com" className="flex items-start gap-3 text-gray-500 hover:text-gold-600 transition-colors text-sm break-all">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>Alsaddattaxadvisors@gmail.com</span></a></li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span>Office No. 112, Al Makkah Tower, Opposite Fauji Foundation Hospital, Abbottabad Road, Mansehra</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="h-px mb-8" style={{ background: "linear-gradient(90deg,transparent,#FFD200,#E6BC00,transparent)" }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} AL SADDAT TAX ADVISORS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
