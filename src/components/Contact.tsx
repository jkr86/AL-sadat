"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, User, Building, MessageSquare, ArrowRight } from "lucide-react";

function WhatsAppLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#25D366"/>
      <path fill="#fff" d="M24 10.4C16.5 10.4 10.4 16.5 10.4 24c0 2.4.6 4.7 1.8 6.7L10 38l7.5-2.2c1.9 1 4.1 1.6 6.5 1.6 7.5 0 13.6-6.1 13.6-13.6S31.5 10.4 24 10.4zm0 24.9c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.5 1.3 1.3-4.3-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2s11.2 5 11.2 11.2-5 11.1-11 11.1zm6.1-8.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-.9-.9-1.6-2-1.7-2.3-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.5-.1-.2-.7-1.8-1-2.5-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.5 5.4 4.8.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/>
    </svg>
  );
}

const contactInfo = [
  { icon: Phone,  label: "Call Us",       value: "0300-5515985",                               href: "tel:03005515985" },
  { icon: Mail,   label: "Email Us",      value: "Alsaddattaxadvisors@gmail.com",               href: "mailto:Alsaddattaxadvisors@gmail.com" },
  { icon: MapPin, label: "Office",        value: "Office No. 112, Al Makkah Tower, Opposite Farid Jinnah Hospital, Abbottabad Road, Mansehra", href: "https://maps.google.com/?q=Al+Makkah+Tower+Mansehra" },
  { icon: Clock,  label: "Working Hours", value: "Monday - Saturday: 9:00 AM - 7:00 PM",       href: null },
];

const iClass = "w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all";
const lClass  = "block text-sm font-semibold text-gray-700 mb-2";

const WA_NUMBER = "923005515985";

export default function Contact() {
  const [fd, setFd] = useState({ name: "", phone: "", service: "", message: "" });
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFd({ ...fd, [e.target.name]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `*New Inquiry — AL SADDAT Website*`,
      `👤 Name: ${fd.name}`,
      `📞 Phone: ${fd.phone}`,
      fd.service ? `🏷️ Service: ${fd.service}` : "",
      fd.message  ? `💬 Message: ${fd.message}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding dot-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="badge mb-4">Get In Touch</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Let&apos;s Discuss Your <span className="gold-text">Tax Needs</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg">Fill the form and your message will be sent directly to our WhatsApp.</motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Left: Contact Info ── */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-3">
            {contactInfo.map((item, i) => {
              const Tag = item.href ? "a" : "div";
              return (
                <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <Tag
                    {...(item.href ? { href: item.href } : {})}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-soft group hover:border-yellow-300 hover:shadow-gold transition-all block">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: "linear-gradient(135deg,#FFD200,#E6BC00)", boxShadow: "0 4px 14px rgba(255,210,0,0.3)" }}>
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-sm font-medium text-gray-700 group-hover:text-yellow-600 transition-colors">{item.value}</div>
                    </div>
                  </Tag>
                </motion.div>
              );
            })}

            {/* WhatsApp direct link */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-green-200 group hover:shadow-lg transition-all block"
                style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)" }}>
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform"><WhatsAppLogo size={44} /></div>
                <div className="flex-1">
                  <div className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-sm font-medium text-gray-700">+92 300-5515985</div>
                </div>
                <ArrowRight className="w-4 h-4 text-green-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Form → WhatsApp ── */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-soft">

              {/* Header */}
              <div className="flex items-center gap-3 mb-7 pb-6 border-b border-gray-100">
                <WhatsAppLogo size={36} />
                <div>
                  <div className="font-black text-gray-900">Send via WhatsApp</div>
                  <div className="text-xs text-gray-400">Fill the form — we&apos;ll receive it on WhatsApp instantly</div>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={lClass}>Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      <input type="text" name="name" value={fd.name} onChange={change} required placeholder="Your full name" className={iClass} />
                    </div>
                  </div>
                  <div>
                    <label className={lClass}>Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      <input type="tel" name="phone" value={fd.phone} onChange={change} required placeholder="0300-XXXXXXX" className={iClass} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={lClass}>Service Required</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                    <select name="service" value={fd.service} onChange={change} className={`${iClass} appearance-none`}>
                      <option value="">Select a service</option>
                      <option>FBR Services</option>
                      <option>KPRA Services</option>
                      <option>SECP Services</option>
                      <option>NTN Registration</option>
                      <option>Income Tax Return</option>
                      <option>Company Registration</option>
                      <option>ATL Restoration</option>
                      <option>Tax Refund Case</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={lClass}>Your Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-300" />
                    <textarea name="message" value={fd.message} onChange={change} rows={4} placeholder="How can we help you?" className={`${iClass} pl-12 resize-none`} />
                  </div>
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-white text-base transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", boxShadow: "0 8px 28px rgba(37,211,102,0.35)" }}>
                  Send on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Clicking the button will open WhatsApp with your message pre-filled.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
