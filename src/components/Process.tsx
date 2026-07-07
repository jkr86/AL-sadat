"use client";

import { motion } from "framer-motion";
import { MessageCircle, FolderOpen, Send, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  { n: "01", icon: MessageCircle, title: "Consultation",        desc: "Detailed consultation to understand your needs, goals, and tax situation." },
  { n: "02", icon: FolderOpen,    title: "Documentation",       desc: "We collect, review, and organize all required documents and records." },
  { n: "03", icon: Send,          title: "Filing & Submission",  desc: "Timely preparation and filing of all returns with relevant authorities." },
  { n: "04", icon: RefreshCw,     title: "Follow-up & Support",  desc: "Ongoing support to handle queries and keep you fully compliant." },
];

export default function Process() {
  return (
    <section id="process" className="section-padding dot-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="badge mb-4">Our Process</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Simple, Streamlined, <span className="gold-text">Effective</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-0.5"
            style={{ background: "linear-gradient(90deg,transparent,#FFD200,#E6BC00,transparent)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center group">
                <div className="relative mb-7">
                  <div className="w-[100px] h-[100px] rounded-3xl bg-white border border-gray-100 shadow-soft flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300">
                    <s.icon className="w-10 h-10 text-gold-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center z-10 shadow-gold"
                    style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)" }}>
                    <span className="text-black font-black text-xs">{s.n}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[50px] -right-5 z-10">
                    <ArrowRight className="w-5 h-5 text-gold-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
