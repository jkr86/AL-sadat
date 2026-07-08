"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check, LayoutGrid } from "lucide-react";

function LogoTab({ s, on, onClick }: { s: SC; on: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <button onClick={onClick}
        className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
          on ? "scale-105 shadow-gold border-2 border-yellow-300" : "bg-white text-gray-500 border border-gray-200 hover:border-gold-300 hover:text-gray-900"
        }`}
        style={on ? { background: "linear-gradient(135deg,#FFD200,#E6BC00)" } : {}}>
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-6 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center"
          style={{ background: s.logoBg }}>
          <Image src={s.logo} alt={s.title} width={24} height={24} className="object-contain w-full h-full" />
        </motion.div>
        {s.title}
      </button>

      {/* Hover popup — enlarged logo */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex items-center justify-center"
              style={{ minWidth: 130 }}>
              <Image src={s.logo} alt={s.title} width={120} height={80} className="object-contain max-h-20 w-auto" />
            </div>
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -mt-1.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type SC = { id: string; title: string; logo: string; logoBg: string; description: string; sections: { title: string; items: string[] }[] };

const services: SC[] = [
  {
    id: "fbr", title: "FBR Services", logo: "/fbr-logo.png", logoBg: "#1a5fa8",
    description: "Complete Federal Board of Revenue services including tax registration, return filing, ATL management, and full compliance support.",
    sections: [
      { title: "Income Tax Registration (NTN)", items: ["New NTN Registration", "Individual NTN", "Business NTN", "Company NTN"] },
      { title: "Income Tax Return Filing",      items: ["Salaried Persons Returns", "Business Returns", "Property Income Returns", "Partnership Firm Returns", "Company Tax Returns"] },
      { title: "ATL (Active Taxpayer List)",    items: ["ATL Inclusion", "ATL Restoration", "ATL Status Verification"] },
      { title: "Withholding Tax Matters",       items: ["Tax Certificates", "Tax Adjustments", "Refund Claims"] },
      { title: "FBR Compliance Services",       items: ["Tax Notices Reply", "Audit Assistance", "Tax Record Maintenance", "Tax Planning & Advisory"] },
    ],
  },
  {
    id: "kpra", title: "KPRA Services", logo: "/kpra-logo.png", logoBg: "#fff",
    description: "Khyber Pakhtunkhwa Revenue Authority services covering sales tax on services, registrations, e-services, and full compliance.",
    sections: [
      { title: "KPRA Registration",     items: ["New Registration", "Registration Amendment", "Business Profile Updates"] },
      { title: "Sales Tax on Services", items: ["Monthly Return Filing", "Nil Return Filing", "Tax Calculation & Adjustment"] },
      { title: "KPRA Compliance",       items: ["Notice Handling", "Audit Assistance", "Tax Advisory Services", "Record Keeping Support"] },
      { title: "KPRA E-Services",       items: ["Online Registration", "Return Submission", "Tax Payment Guidance"] },
    ],
  },
  {
    id: "secp", title: "SECP Services", logo: "/secp-logo.jpg", logoBg: "#fff",
    description: "Complete Securities and Exchange Commission services — from company incorporation to corporate compliance and legal documentation.",
    sections: [
      { title: "Company Registration",          items: ["Single Member Company (SMC)", "Private Limited Company", "Partnership Registration"] },
      { title: "Corporate Compliance",          items: ["Annual Returns Filing", "Form-A Filing", "Form-29 Filing", "Share Transfer Documentation"] },
      { title: "Business Legal Documentation", items: ["Memorandum of Association (MOA)", "Articles of Association (AOA)", "Company Amendments"] },
      { title: "Company Closure & Changes",    items: ["Change of Directors", "Change of Address", "Change of Company Name", "Company Dissolution Assistance"] },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("fbr");
  const svc = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="badge mb-4"><LayoutGrid className="w-3.5 h-3.5 text-gold-600" /> Our Services</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Complete Tax &amp; Business <span className="gold-text">Solutions</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg">End-to-end FBR, KPRA, and SECP coverage for every business type.</motion.p>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {services.map((s) => (
            <LogoTab key={s.id} s={s} on={active === s.id} onClick={() => setActive(s.id)} />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}>

            {/* Description */}
            <div className="bg-amber-50 border border-gold-200 rounded-2xl p-7 mb-7 flex items-center gap-5">
              <div className="hidden md:flex w-20 h-14 rounded-xl items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200 bg-white p-1.5"
                style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }}>
                <Image src={svc.logo} alt={svc.title} width={80} height={56} className="object-contain w-full h-full" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed">{svc.description}</p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {svc.sections.map((sec, i) => (
                <motion.div key={sec.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="card p-6 group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg,#FEF3D0,#FDE49A)" }}>
                    <span className="font-black text-sm text-gold-700">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-4 leading-tight">{sec.title}</h4>
                  <ul className="space-y-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-10 text-center">
              <a href="#contact" className="btn-primary group inline-flex">
                Discuss Your Requirements
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
