"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, TrendingUp, Lock, Award } from "lucide-react";

const features = [
  { icon: Shield,     title: "Professional Expertise",   desc: "Certified tax professionals with deep knowledge of Pakistan's tax framework." },
  { icon: Lock,       title: "Complete Confidentiality", desc: "Your financial data is protected with the highest levels of security and privacy." },
  { icon: Clock,      title: "Timely Delivery",          desc: "We meet every deadline, ensuring you never miss a compliance requirement." },
  { icon: Users,      title: "Personalized Service",     desc: "Tailored solutions designed to match your unique business objectives." },
  { icon: TrendingUp, title: "Growth-Focused",           desc: "We work proactively to maximize your financial efficiency and growth." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="badge mb-4"><Award className="w-3.5 h-3.5 text-gold-600" /> Why Choose Us</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            The <span className="gold-text">Trusted Choice</span> for Every Business
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`card bg-white p-8 group ${i === 4 ? "lg:col-start-2" : ""}`}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)", boxShadow: "0 4px 14px rgba(255,210,0,0.3)" }}>
                <f.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
