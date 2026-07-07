"use client";

import { motion } from "framer-motion";
import { Briefcase, MessageSquare, BookOpen, Target, FileText, ShieldCheck, Home, DollarSign } from "lucide-react";

const list = [
  { icon: Briefcase,    title: "Business Registration",     desc: "Complete business incorporation and registration services across Pakistan." },
  { icon: MessageSquare,title: "Tax Interview Support",     desc: "Expert representation and support during tax interviews and hearings." },
  { icon: BookOpen,     title: "Professional Tax Guidance", desc: "Ongoing professional advice tailored to your industry and business." },
  { icon: Target,       title: "Tax Planning & Consultancy",desc: "Strategic tax planning to minimize liabilities and maximize savings." },
  { icon: FileText,     title: "Financial Documentation",   desc: "Comprehensive documentation support for all financial requirements." },
  { icon: ShieldCheck,  title: "Business Compliance",       desc: "End-to-end compliance management to keep your business worry-free." },
  { icon: Home,         title: "Property Tax Consultancy",  desc: "Expert guidance on property tax matters, assessments, and filings." },
  { icon: DollarSign,   title: "Tax Refund Cases",          desc: "Professional handling of tax refund claims and recovery processes." },
];

export default function AdditionalServices() {
  return (
    <section className="section-padding dot-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="badge mb-4">More Solutions</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Additional <span className="gold-text">Services</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg">Specialized services for every stage of your business journey.</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="card bg-white p-6 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)", boxShadow: "0 4px 14px rgba(255,210,0,0.3)" }}>
                <s.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
