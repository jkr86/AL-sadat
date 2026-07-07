"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923005515985"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Official WhatsApp SVG Logo */}
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 md:w-16 md:h-16 relative z-10">
        <circle cx="24" cy="24" r="24" fill="#25D366"/>
        <path fill="#fff" d="M24 10.4C16.5 10.4 10.4 16.5 10.4 24c0 2.4.6 4.7 1.8 6.7L10 38l7.5-2.2c1.9 1 4.1 1.6 6.5 1.6 7.5 0 13.6-6.1 13.6-13.6S31.5 10.4 24 10.4zm0 24.9c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.5 1.3 1.3-4.3-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2s11.2 5 11.2 11.2-5 11.1-11 11.1zm6.1-8.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-.9-.9-1.6-2-1.7-2.3-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.5-.1-.2-.7-1.8-1-2.5-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.5 5.4 4.8.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/>
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl">
        Chat with us on WhatsApp
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
      </span>
    </motion.a>
  );
}
