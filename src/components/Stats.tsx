"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Calendar, FileText, Award } from "lucide-react";

const stats = [
  { icon: Users,    value: 500,  suffix: "+", label: "Happy Clients"       },
  { icon: Calendar, value: 10,   suffix: "+", label: "Years Experience"    },
  { icon: FileText, value: 1000, suffix: "+", label: "Returns Filed"       },
  { icon: Award,    value: 99,   suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to }: { to: number }) {
  const count   = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) { const c = animate(count, to, { duration: 2, ease: "easeOut" }); return c.stop; }
  }, [inView, count, to]);

  useEffect(() => {
    return rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v.toString(); });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-1 bg-white pt-16 pb-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-gray-100"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
        >
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center p-8 bg-white group cursor-default relative overflow-hidden
                ${i < 3 ? "border-r border-gray-100" : ""}`}>
              {/* Hover bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg,rgba(255,210,0,0.06),rgba(255,210,0,0.02))" }} />
              <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)", boxShadow: "0 6px 20px rgba(255,210,0,0.35)" }}>
                <s.icon className="w-6 h-6 text-black" />
              </div>
              <div className="relative z-10 text-4xl md:text-5xl font-black tabular-nums text-gray-900">
                <Counter to={s.value} /><span style={{ color: "#FFD200" }}>{s.suffix}</span>
              </div>
              <div className="relative z-10 text-sm text-gray-400 mt-2 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
