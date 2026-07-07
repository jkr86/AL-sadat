"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const list = [
  { name: "Muhammad Bilal Khan", role: "Business Owner, Mansehra",      initials: "MB", text: "AL SADDAT Tax Advisors made the entire tax registration seamless. Professional, knowledgeable, and always available. Highly recommended!" },
  { name: "Ayesha Rahman",       role: "Salaried Professional",          initials: "AR", text: "They filed everything correctly, got me on ATL, and helped me claim a refund I didn't know I was entitled to. Excellent service!" },
  { name: "Imran Ahmed",         role: "MD, Private Limited Company",    initials: "IA", text: "From SECP incorporation to ongoing FBR compliance, AL SADDAT handles everything. Their attention to detail has earned our complete trust." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="badge mb-4"><Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" /> Client Reviews</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg">Trusted by businesses and individuals across Pakistan.</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card bg-white p-8 relative group">
              <div className="absolute top-5 right-5 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-14 h-14 text-gold-500" />
              </div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
              </div>
              <p className="text-gray-500 leading-relaxed mb-7 text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
