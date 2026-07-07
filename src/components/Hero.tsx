"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Shield, TrendingUp, Award, FileCheck2, Building2, Landmark } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+",  label: "Years Experience" },
  { value: "99%",  label: "Success Rate" },
  { value: "3",    label: "Govt. Authorities" },
];

const services = [
  { icon: FileCheck2, label: "FBR Services",  color: "#FFD200" },
  { icon: Landmark,   label: "KPRA Services", color: "#FFD200" },
  { icon: Building2,  label: "SECP Services", color: "#FFD200" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg2.jpg"
          alt="Professional finance background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(10,10,20,0.75) 50%, rgba(0,0,0,0.65) 100%)"
        }} />
        {/* Yellow accent glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(255,210,0,0.12) 0%, transparent 60%)" }} />
        {/* Top-right subtle glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(255,210,0,0.07) 0%, transparent 60%)" }} />
      </div>

      {/* ── Yellow top accent bar ── */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{ background: "linear-gradient(90deg,#FFD200,#E6BC00,#FFD200)" }} />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-12">
        <div className="container-custom w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: Text ── */}
            <div>
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(255,210,0,0.15)", border: "1px solid rgba(255,210,0,0.4)", color: "#FFD200" }}>
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Pakistan&apos;s Trusted Tax Consultants
              </motion.div>

              {/* Headline */}
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tight mb-6">
                <span className="text-white">AL SADDAT</span><br />
                <span style={{ color: "#FFD200" }}>TAX ADVISORS</span>
              </motion.h1>

              {/* Sub */}
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                className="text-xl text-gray-300 font-light mb-3">
                Your Partner in Tax Compliance &amp; Business Success
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }}
                className="text-base text-gray-400 mb-10 max-w-lg leading-relaxed">
                Complete FBR, KPRA &amp; SECP solutions under one roof — trusted by
                500+ businesses and individuals across Pakistan.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.36 }}
                className="flex flex-wrap gap-4 mb-10">
                <a href="#contact" className="btn-primary group text-base">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:03005515985"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 border-white/30 text-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
                  <Phone className="w-5 h-5" /> 0300-5515985
                </a>
              </motion.div>

              {/* Trust pills */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.44 }}
                className="flex flex-wrap gap-4">
                {["FBR Registered", "KPRA Authorized", "SECP Compliant"].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#FFD200" }} /> {p}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Floating Cards ── */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block relative">

              {/* Main glass card */}
              <div className="relative rounded-3xl overflow-hidden p-8"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.4)"
                }}>
                <div className="flex items-center gap-4 mb-8">
                  <Image src="/logo.png" alt="Logo" width={52} height={52} className="object-contain" />
                  <div>
                    <div className="text-white font-black text-lg">AL SADDAT</div>
                    <div className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#FFD200" }}>TAX ADVISORS</div>
                  </div>
                </div>

                {/* Service pills */}
                <div className="space-y-3 mb-8">
                  {services.map(({ icon: Icon, label }, i) => (
                    <motion.div key={label}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#FFD200" }}>
                        <Icon className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-white font-semibold text-sm">{label}</span>
                      <ArrowRight className="w-4 h-4 ml-auto" style={{ color: "#FFD200" }} />
                    </motion.div>
                  ))}
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "500+", l: "Clients" },
                    { v: "10+",  l: "Years" },
                    { v: "99%",  l: "Success" },
                  ].map(({ v, l }) => (
                    <div key={l} className="text-center rounded-xl py-3"
                      style={{ background: "rgba(255,210,0,0.1)", border: "1px solid rgba(255,210,0,0.2)" }}>
                      <div className="font-black text-lg" style={{ color: "#FFD200" }}>{v}</div>
                      <div className="text-gray-400 text-xs">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 flex items-center gap-2"
                style={{ background: "#FFD200", boxShadow: "0 8px 24px rgba(255,210,0,0.4)" }}>
                <Award className="w-5 h-5 text-black" />
                <div>
                  <div className="text-black font-black text-xs">Certified</div>
                  <div className="text-black/60 text-[10px]">Tax Advisor</div>
                </div>
              </motion.div>

              {/* Floating badge bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}
                className="absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>
                <Shield className="w-5 h-5" style={{ color: "#FFD200" }} />
                <div>
                  <div className="text-white font-black text-xs">100% Secure</div>
                  <div className="text-gray-400 text-[10px]">Data Protected</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 border-t border-white/10"
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black" style={{ color: "#FFD200" }}>{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
