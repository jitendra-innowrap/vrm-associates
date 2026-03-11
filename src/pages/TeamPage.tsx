import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Mail, Briefcase, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

import caVirendra from "@/assets/ca-virendra-DpFgvJoN.jpg";
import caPriya from "@/assets/ca-priya-C5CTwqwN.jpg";
import caNaman from "@/assets/ca-naman-Bf2Or9or.jpg";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const teamMembers = [
  {
    name: "CA Virendra Mishra",
    designation: "Founder & In-Charge",
    credentials: "B.Com., FCA",
    experience: "10+ Years",
    photo: caVirendra,
    specializations: ["GST", "Domestic Taxation", "International Taxation", "Statutory Audit", "Business Consultancy"],
    bio: "CA Virendra Mishra is the founder and in-charge of the Firm. He has an all-round experience of more than 10 years in the field of GST, Domestic Taxation, International Taxation, Statutory Audit and Consultancy. His mission for the firm is to provide businesses, entrepreneurs and individuals with the highest quality accounting, auditing, tax planning and business advisory services delivered in a timely, efficient, and innovative manner with the assistance of a professional team.",
    contact: "virendra@vrmca.in",
  },
  {
    name: "CA Priya Mishra",
    designation: "Partner — Audit & Assurance",
    credentials: "CA, M.Com",
    experience: "8+ Years",
    photo: caPriya,
    specializations: ["Audit & Assurance", "Banks & PSU Audit", "Internal Audit", "SOP Design", "Risk-Based Audit"],
    bio: "CA Priya Mishra has deep exposure and expertise in Audit and Assurance services in the Corporate sector and PSUs operating in the financial industry — including Banks, Depository Participants, Broking Houses, NBFCs, and Financial Intermediaries. She brings a background of large corporate client audits including banks, insurance sector, brokers, and DPs. She specializes in management/operational audits, designing Standard Operating Procedures, and managing risk-based internal audits for large clients across different industries.",
    contact: "priya@vrmca.in",
  },
  {
    name: "CA Naman Jha",
    designation: "Partner — Advisory & Compliance",
    credentials: "CA, B.Com.",
    experience: "5+ Years",
    photo: caNaman,
    specializations: ["SME Taxation", "GST", "Banking Advisory", "Business Management", "Domestic & International Tax"],
    bio: "CA Naman Jha brings 5+ years of focused consultancy experience to Small and Medium Businesses in the fields of Taxation, GST, Banking, and day-to-day Business Management. He specializes in providing holistic Business Solutions with a unique approach that blends expertise in Domestic Taxation, International Taxation, GST, Audit & Assurance, and Accounting. His strength lies in making complex compliance frameworks accessible and manageable for growing businesses.",
    contact: "virendra@vrmca.in",
  },
];

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border rounded-lg overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Photo — top section */}
        <div className="w-full relative overflow-hidden h-64 sm:h-72 shrink-0">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-obsidian/20 to-transparent" />
          {/* Mobile experience badge */}
          <div className="absolute bottom-3 left-3 bg-obsidian/80 backdrop-blur-sm rounded px-3 py-1.5 border border-white/10">
            <span className="font-display font-medium text-white text-sm"><span className="text-vault-cyan font-bold">{member.experience}</span> Exp.</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-body text-xs text-slate-light uppercase tracking-wider mb-1.5">
                  Chartered Accountant
                </p>
                <h3 className="font-display text-2xl font-bold text-obsidian">{member.name}</h3>
                <p className="font-body text-sm text-slate-mid mt-1 font-medium">{member.designation}</p>
                <p className="font-body text-xs text-slate-light mt-1">{member.credentials}</p>
              </div>
            </div>

            {/* Specialization tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {member.specializations.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-alabaster border border-border rounded-full font-body text-xs text-slate-mid"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
            <a
              href={`mailto:${member.contact}`}
              className="inline-flex items-center gap-2 text-vault-cyan font-body text-sm hover:gap-3 transition-all"
            >
              <Mail size={14} />
              {member.contact}
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center justify-between w-full text-slate-light font-body text-sm hover:text-obsidian transition-colors mt-2"
            >
              {expanded ? "Hide Bio" : "Read Full Bio"}
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={16} />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable bio */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-0 border-t border-border bg-alabaster">
              <p className="font-body text-sm text-slate-mid leading-relaxed pt-6">{member.bio}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-obsidian">
        {/* Geometric SVG hero — high clarity on dark bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="team-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" />
          </svg>
          {/* Arc right */}
          <svg className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.08]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="250" r="380" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="500" cy="250" r="270" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="500" cy="250" r="160" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
          </svg>
          {/* Cyan glow */}
          <div className="absolute top-0 right-0 w-80 h-80 opacity-15"
            style={{ background: "radial-gradient(circle, hsl(197 75% 37% / 0.5) 0%, transparent 65%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-vault-cyan" />
              <span className="section-label">Our Partners</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-3xl">
              The minds behind your{" "}
              <span className="text-vault-cyan">financial clarity.</span>
            </h1>
            <p className="font-body text-base text-white/70 mt-6 max-w-xl leading-relaxed">
              A team of dedicated Chartered Accountants with deep expertise across audit, taxation, and advisory — committed to your business success.
            </p>
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: Briefcase, label: "Multi-disciplinary Team" },
                { icon: Award, label: "ICAI Registered Professionals" },
                { icon: ArrowRight, label: "Pan India & International Clients" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon size={14} className="text-vault-cyan" />
                  <span className="font-body text-sm text-white/70">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— TEAM CARDS ——— */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ——— WHY CLIENTS CHOOSE VRM ——— */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-14">
            <span className="section-label">Firm Strength</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">
              Why Clients Choose VRM
            </h2>
            <p className="font-body text-slate-mid mt-3 max-w-lg leading-relaxed">
              From SMEs to large corporates — our clients trust us for one simple reason: we deliver exactly what we promise, on time, every time.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Multi-Disciplinary", desc: "CA, CS and business consultants under one roof — covering audit, tax, company law, and advisory." },
              { title: "Pan-India Reach", desc: "Serving domestic and international clients from our base in Mira Road, Mumbai with a digital-first delivery model." },
              { title: "Tech-Enabled", desc: "Modern, digital-first delivery of compliance and advisory. XBRL filings, cloud accounting, and online advisory." },
              { title: "Client-First", desc: "Personalized services designed around your goals, not generic templates. Every client receives equal rigor and respect." },
            ].map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.08}>
                <div className="service-card bg-alabaster rounded-lg p-7 border border-border h-full">
                  <span className="font-display font-bold text-4xl text-vault-cyan opacity-20 block mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-semibold text-obsidian mb-2">{point.title}</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">{point.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-alabaster font-display font-semibold text-sm rounded-sm transition-all hover:bg-slate-deep hover:shadow-lg"
            >
              Schedule a Consultation with Our Partners
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
