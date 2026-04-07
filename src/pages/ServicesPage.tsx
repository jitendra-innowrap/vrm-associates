import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Shield, TrendingUp, FileText, Users, Building2, BookOpen, Briefcase, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

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

const serviceCategories = [
  {
    id: "audit",
    icon: Shield,
    label: "Audit & Assurance",
    tagline: "Independent. Rigorous. Trusted.",
    description: "Our team has the right mix of skills and competencies to fulfil their roles properly in order to provide best and quality audit and assurance services. We combine deep technical expertise with practical industry knowledge to deliver reliable, independent assessments.",
    items: [
      "Statutory Audit",
      "Tax Audit",
      "Internal Audit",
      "Due Diligence Audit",
      "Stock Audit",
      "Bank Audit",
      "Audit of Insurance Companies",
      "Management Audit",
      "GST Audit",
    ],
  },
  {
    id: "direct-tax",
    icon: TrendingUp,
    label: "Direct Tax Services",
    tagline: "Compliant. Strategic. Efficient.",
    description: "From filing to appeals, we manage every dimension of your direct tax obligations with precision. We handle both domestic and international tax matters for corporate and non-corporate clients, ensuring full compliance while minimizing your tax burden legally.",
    items: [
      "Filing of Income Tax Returns — Corporate & Non-Corporate",
      "Income Tax Assessment & Appeals before Commissioner",
      "Filing of TDS Returns",
      "Calculation of AMT/MAT",
      "Form 15CA & 15CB",
    ],
  },
  {
    id: "gst",
    icon: FileText,
    label: "Goods & Service Tax",
    tagline: "Migration. Compliance. Advisory.",
    description: "End-to-end GST services encompassing registration, return filing, audit, and transition advisory. We ensure your GST processes are accurate, timely, and fully compliant with the latest regulations.",
    items: [
      "GST Migration Procedure",
      "GST Impact Analysis",
      "Pricing Structure Review",
      "Consultation in Transition Period",
      "GST Implementation",
      "GST Compliances",
      "Filing of GST Returns",
      "GST Audit",
    ],
  },
  {
    id: "advisory",
    icon: Users,
    label: "Advisory Services",
    tagline: "Strategic. Forward-Looking. Personal.",
    description: "Advisory services that go beyond compliance — helping you plan, structure, and grow your business with the confidence of professional financial guidance. From business set-up for foreign clients to personal financial planning.",
    items: [
      "Preparing Business Plans",
      "Share Valuation",
      "Budget and Forecast",
      "Corporate Restructuring",
      "Feasibility Study of Projects",
      "Consultation for Public Issue Matters",
      "Project Report & Bank Liaison",
      "Consultation for Private Equity Matters",
      "Term Loan & Working Capital Arrangement",
      "Personal Financial Investment Planning & Family Settlement Issues",
      "Certification & Accounting Advisory (IFRS)",
      "Business Set-up Advisory for Foreign Clients",
      "Wills and Partnership Deeds",
      "Design, Implementation and Review of Accounting Manuals",
    ],
  },
  {
    id: "company-law",
    icon: Building2,
    label: "Company Law Matters",
    tagline: "Formation. Compliance. Conversion.",
    description: "Comprehensive company law services covering the full lifecycle from formation to annual compliance. We handle all ROC-related matters, secretarial compliances, and corporate restructuring with meticulous attention to detail.",
    items: [
      "Formation of Indian Private/Public/Section 8 Companies",
      "100% Subsidiary / Branch Office / Liaison Office",
      "Drafting Memorandum and Articles of Association",
      "Private to Public Conversion & Company to LLP Conversion",
      "Filing of Various Returns with ROC",
      "Annual Return Filing in XBRL Environment",
      "Conversion from Firm to Company",
      "Consultation on Buyback of Shares",
    ],
  },
  {
    id: "llp",
    icon: Briefcase,
    label: "LLP Services",
    tagline: "Formation. Compliance. Exit.",
    description: "Dedicated LLP formation and management services, from initial drafting to annual compliance, modifications, and smooth exit processes. Ideal for professional partnerships and convertible structures.",
    items: [
      "Formation of LLP",
      "Drafting of LLP Agreement",
      "Conversion of Firm into LLP and Vice Versa",
      "Modification in LLP",
      "Filing Annual Return of LLP",
      "Exit from LLP",
    ],
  },
  {
    id: "bookkeeping",
    icon: BookOpen,
    label: "Bookkeeping Services",
    tagline: "Accurate. Timely. Insightful.",
    description: "Outsourced bookkeeping for domestic and international clients. We are providing outsourcing services which includes in-house accounting compliant with local acts, financial statements, management reports, and complete tax accounting and compliance.",
    items: [
      "In-house Accounting, Compliant with Local Acts",
      "Financial Statements Preparation",
      "Management Reports",
      "Filing of Statutory Returns",
      "Accounting Supervision",
      "Accounting Record Review for Past Periods",
      "Tax Accounting and Compliance",
      "Preparation of MIS Reports",
      "Co-operative Society Accounting",
    ],
  },
  {
    id: "virtual-cfo",
    icon: Layers,
    label: "Virtual Office / Virtual CFO",
    tagline: "Lean Teams. Full Compliance.",
    description: "We offer virtual office services to small and medium enterprises. They just need not to employ one person in accounts and finance department, as we take care of all their statutory compliances, provide HR services and also offer office infrastructure.",
    items: [
      "Minimal Investment in Personnel",
      "Office Infrastructure for Day-to-Day Work & Meetings",
      "Best Suited for Clients Establishing Themselves in Gujarat",
      "Ideal for Testing Market Feasibility",
      "Savings in Money, Time and Infrastructure Cost",
      "Full Statutory Compliance Management",
      "HR Services",
    ],
  },
];

function ServiceAccordion({ category, index }: { category: typeof serviceCategories[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const { ref, inView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <div className="flex items-center gap-5">
          {/* Icon */}
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-vault-cyan" : "bg-alabaster border border-border group-hover:bg-vault-cyan/10"}`}>
            <category.icon size={18} className={`transition-colors duration-300 ${open ? "text-white" : "text-vault-cyan"}`} />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-body text-xs text-slate-light tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`font-display text-lg lg:text-xl font-semibold transition-colors ${open ? "text-vault-cyan" : "text-obsidian group-hover:text-vault-cyan"}`}>
                {category.label}
              </h3>
            </div>
            <p className="font-body text-xs text-slate-light mt-0.5">{category.tagline}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown size={18} className="text-slate-light" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-15 ml-[60px] grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <p className="font-body text-sm text-slate-mid leading-relaxed">{category.description}</p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 mt-5 text-vault-cyan font-body text-sm hover:gap-3 transition-all"
                >
                  Enquire about this service <ArrowRight size={12} />
                </Link>
              </div>
              <div className="lg:col-span-2">
                <p className="font-display font-semibold text-obsidian text-xs tracking-wider uppercase mb-4">Scope of Work</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-8">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-vault-cyan mt-1.5 flex-shrink-0" />
                      <span className="font-body text-sm text-slate-mid">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-obsidian">
        {/* Geometric SVG background — high contrast, no photo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Diagonal line grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-diag)" />
          </svg>
          {/* Large arc right */}
          <svg className="absolute -right-32 -top-32 w-[700px] h-[700px] opacity-[0.08]" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="700" cy="0" r="500" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="700" cy="0" r="380" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="700" cy="0" r="260" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="700" cy="0" r="140" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
          </svg>
          {/* Bottom-left small arc */}
          <svg className="absolute -left-16 bottom-0 w-[300px] h-[300px] opacity-[0.05]" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="300" r="250" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="0" cy="300" r="160" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
          </svg>
          {/* Cyan glow top-right */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-15"
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
              <span className="section-label">Our Services</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-2xl">
              Comprehensive solutions.{" "}
              <span className="text-vault-cyan">Zero compromise.</span>
            </h1>
            <p className="font-body text-base text-white/70 mt-6 max-w-xl leading-relaxed">
              From startup compliance to complex multi-jurisdictional advisory, we offer end-to-end financial services covering 8 major practice areas — designed around your specific needs.
            </p>
            <div className="flex flex-wrap gap-6 mt-10">
              {serviceCategories.map((cat) => (
                <span key={cat.id} className="font-body text-xs text-white/50 hover:text-vault-cyan transition-colors cursor-default">
                  {cat.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— SERVICES ACCORDION ——— */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left sticky label */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32">
                <span className="section-label">All Services</span>
                <p className="font-body text-xs text-slate-light mt-3 leading-relaxed">
                  Click any service to expand and explore the full scope of our offering.
                </p>
                <span className="cyan-rule mt-6 block" />
                <div className="mt-6 space-y-2">
                  {serviceCategories.map((cat, i) => (
                    <div key={cat.id} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-light rounded-full flex-shrink-0" />
                      <span className="font-body text-xs text-slate-light">{cat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian text-alabaster font-display font-medium text-xs rounded-sm transition-all hover:bg-slate-deep"
                  >
                    Get a Quote <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-4 border-t border-border">
              {serviceCategories.map((cat, i) => (
                <ServiceAccordion key={cat.id} category={cat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— PROCESS / WHY VRM ——— */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Our Approach</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">How We Work</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border z-0" />
            {[
              { step: "01", title: "Understand", desc: "Deep dive into your business, goals, and compliance requirements." },
              { step: "02", title: "Plan", desc: "Design a personalized roadmap with timelines and clear deliverables." },
              { step: "03", title: "Execute", desc: "Our expert team delivers all services with rigour and on-time." },
              { step: "04", title: "Review", desc: "Ongoing support, regular reviews, and proactive advisory." },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative z-10 text-center px-6">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full border-2 border-border flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-2xl text-vault-cyan">{step.step}</span>
                  </div>
                  <h3 className="font-display font-semibold text-obsidian mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
            >
              Book a Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
