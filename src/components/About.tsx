"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, ShieldCheck, Heart, TrendingUp, Award } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Professional Excellence",  description: "Certified experts with deep knowledge of Pakistan's tax regulations." },
  { icon: Heart,       title: "Client-First Approach",   description: "We treat your business goals as our own, with personalized service." },
  { icon: Briefcase,   title: "Full-Spectrum Services",  description: "From FBR to SECP, every aspect of tax and compliance covered." },
  { icon: TrendingUp,  title: "Proven Track Record",     description: "Over a decade of trusted service to hundreds of satisfied clients." },
];

const certs = [
  { title: "FBR",  sub: "Registered" },
  { title: "KPRA", sub: "Authorized" },
  { title: "SECP", sub: "Compliant"  },
  { title: "10+",  sub: "Years"      },
];

export default function About() {
  return (
    <section id="about" className="section-padding dot-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200 shadow-soft-lg"
              style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)" }}>
              <div className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,210,0,0.15) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {certs.map((c, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3 }}
                      className="rounded-2xl p-5 flex flex-col justify-center items-center text-center aspect-square border border-white/10 bg-white/5">
                      <div className="text-3xl font-black text-gold-400 mb-1">{c.title}</div>
                      <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">{c.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.55 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-soft-lg border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)", boxShadow: "0 4px 14px rgba(255,210,0,0.35)" }}>
                <Award className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Trusted Advisor</div>
                <div className="text-xs text-gray-400">Since 2014</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <div className="badge mb-6">
              <CheckCircle2 className="w-4 h-4 text-gold-600" /> About Our Firm
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-tight">
              A Decade of Excellence in <span className="gold-text">Tax Advisory</span>
            </h2>
            <p className="text-gray-500 text-lg mb-4 leading-relaxed">
              AL SADDAT TAX ADVISORS is a premier tax consultancy based in Mansehra, Pakistan,
              providing comprehensive tax and business compliance solutions to individuals,
              businesses, and corporations across Pakistan.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Our certified team brings deep expertise in FBR, KPRA, and SECP compliance —
              ensuring every client receives strategic, reliable, and confidential advice.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div key={h.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 + 0.2 }}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-gold-200 hover:shadow-soft transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#FEF3D0,#FDE49A)" }}>
                    <h.icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm mb-0.5">{h.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{h.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
