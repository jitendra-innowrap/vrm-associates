import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Briefcase, Award, ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
const heroBackdrop = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80&auto=format&fit=crop";

import caVirendra from "@/assets/ca-virendra-DpFgvJoN.jpg";
import caPriya from "@/assets/ca-priya-C5CTwqwN.jpg";
const caAdvisoryLead = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80";

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
    designation: "Managing Partner",
    credentials: "B.Com",
    experience: "10+ Years",
    photo: caVirendra,
    bio: "With 10+ years of experience, Virendra Mishra, the Founding and Managing Partner of VRM, has been the visionary driving force behind the firm's establishment and growth. His expertise spans strategic leadership, tax advisory, and corporate finance. His dedication to building long-term client relationships and creating innovative solutions has transformed the firm into a leading professional services practice. He specializes in areas of Direct and Indirect taxes including representation before revenue authorities.",
    contact: "office@vrmca.in",
  },
  {
    name: "CA Priya Mishra",
    designation: "Partner",
    credentials: "M.Com, NISM certified (Broking and DP)",
    experience: "10+ Years",
    photo: caPriya,
    bio: "She specializes in Assurance services to the BFSI sector and brings expertise in conducting audits of PMS companies, NBFC compliance, Stock Brokers, Research Analyst and Investment Advisors. Prior to joining the firm, she was associated with one of the leading stock brokers. She also specializes in management and operational audits, designing Standard Operating Procedures, and managing risk-based internal audits across industries.",
    contact: "office@vrmca.in",
  },
  {
    name: "CA Naman",
    designation: "Partner - Taxation & Business Advisory",
    credentials: "B.Com, FCA",
    experience: "10+ Years",
    photo: caAdvisoryLead,
    bio: "A Chartered Accountant based in Mumbai with over 10 years of experience consulting Small and Medium Businesses (SMEs) across Taxation, GST, Banking, and day-to-day Business Management. He specializes in delivering practical business solutions and cost optimization through a holistic approach, backed by strong expertise in Domestic and International Taxation, GST, Audit and Assurance, Accounting, and Advisory services.",
    contact: "office@vrmca.in",
  },
];

const whyVrmPoints = [
  { title: "Multi-Disciplinary", desc: "CA, CS and business consultants under one roof — covering audit, tax, company law, and advisory." },
  { title: "PAN-India Reach", desc: "Serving domestic and international clients from Mumbai base in Mira Road with a digital-first delivery model." },
  { title: "Tech-Enabled", desc: "Modern, digital-first delivery of compliance and advisory. XBRL filings, cloud accounting, and online advisory." },
  { title: "Client-First", desc: "Personalized services designed around your goals, not generic templates. Every client receives equal rigor and respect." },
  { title: "Compliance Assurance", desc: "Stay ahead of regulations, avoiding costly penalties." },
  { title: "Tax Planning", desc: "Maximize profits with tailored tax strategies and precise bookkeeping." },
  { title: "Smooth Business Set up", desc: "Navigate the complexities of starting a business with ease." },
  { title: "Confidentiality Focus", desc: "We prioritize your privacy with strict data security measures, ensuring all your financial and business information remains protected at every step." },
  { title: "Proactive Advisory", desc: "Beyond compliance, we provide forward-thinking advisory, helping you anticipate market trends and drive sustainable growth." },
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
        {/* Photo */}
        <div className="w-full relative overflow-hidden h-72 sm:h-80 shrink-0 bg-alabaster">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-contain object-center absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent" />
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
          <div>
            <div>
              <p className="font-body text-xs text-slate-light uppercase tracking-wider mb-1.5">
                Chartered Accountant
              </p>
              <h3 className="font-display text-2xl font-bold text-obsidian">{member.name}</h3>
              <p className="font-body text-sm text-slate-mid mt-1 font-medium">{member.designation}</p>
              <p className="font-body text-xs text-slate-light mt-1">{member.credentials}</p>
              <p className="font-body text-xs text-vault-cyan mt-2 font-medium">{member.experience} of experience</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <a
              href={`mailto:${member.contact}`}
              className="inline-flex items-center gap-2 text-vault-cyan font-body text-sm hover:gap-3 transition-all"
            >
              <Mail size={14} />
              {member.contact}
            </a>
            <div className="mt-4">
              {!expanded ? (
                <p className="font-body text-sm text-slate-mid leading-relaxed line-clamp-2">{member.bio}</p>
              ) : null}
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-vault-cyan font-body text-xs font-medium mt-3 hover:gap-2 transition-all"
              >
                {expanded ? "Hide Summary" : "Read Full Summary"}
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-slate-mid leading-relaxed mt-3">{member.bio}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.88]">
          <img src={heroBackdrop} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/76 to-white/46" />
        {/* Geometric SVG hero — high clarity on dark bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="team-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" />
          </svg>
          {/* Arc right */}
          <svg className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.08]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="250" r="380" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
            <circle cx="500" cy="250" r="270" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
            <circle cx="500" cy="250" r="160" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
          </svg>
          {/* Cyan glow */}
          <div className="absolute top-0 right-0 w-80 h-80 opacity-15"
            style={{ background: "radial-gradient(circle, hsl(27 87% 44% / 0.28) 0%, transparent 65%)" }} />
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
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-obsidian mt-2 leading-tight max-w-3xl">
              The minds behind your{" "}
              <span className="text-vault-cyan">financial clarity.</span>
            </h1>
            <p className="font-body text-base text-slate-mid mt-6 max-w-xl leading-relaxed">
              A team of dedicated Chartered Accountants with deep expertise across audit, taxation, and advisory — committed to your business success.
            </p>
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-border">
              {[
                { icon: Briefcase, label: "Multi-disciplinary Team" },
                { icon: Award, label: "ICAI Registered Professionals" },
                { icon: ArrowRight, label: "Pan India & International Clients" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon size={14} className="text-vault-cyan" />
                  <span className="font-body text-sm text-slate-mid">{item.label}</span>
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
            <span className="section-label">Why VRM?</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">
            Multi-Disciplinary
            </h2>
            <p className="font-body text-slate-mid mt-3 max-w-lg leading-relaxed">
            CA, CS and business consultants under one roof — covering audit, tax, company law, and advisory.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVrmPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.08}>
                <div
                  className={`service-card bg-alabaster rounded-lg p-7 border border-border h-full ${
                    i === whyVrmPoints.length - 1 && whyVrmPoints.length % 3 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
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
              className="group inline-flex items-center gap-2 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
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
