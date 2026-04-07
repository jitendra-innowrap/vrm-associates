import { motion } from "framer-motion";
import {
  ArrowRight, Shield, TrendingUp, Users, Award, BookOpen, Building2,
  CheckCircle, Phone, PieChart, Landmark
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroBg from "@/assets/hero-bg-DiEWF57j.jpg";
import hexPattern from "@/assets/hex-pattern-DgAosZTo.png";
const aboutTeam = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80";

const services = [
  {
    title: "Audit & Assurance",
    desc: "Statutory, Tax, Internal, Due Diligence, Bank & Management Audits — delivering independent, rigorous assessments.",
    icon: Shield,
    items: ["Statutory Audit", "Tax Audit", "Internal Audit", "Bank Audit", "GST Audit"],
  },
  {
    title: "Direct Tax Services",
    desc: "Filing of Income Tax Returns for Corporate & Non-Corporate clients, assessments, TDS returns, Form 15CA/15CB.",
    icon: TrendingUp,
    items: ["ITR Filing", "Tax Assessments", "TDS Returns", "AMT/MAT Calculation", "Form 15CA & 15CB"],
  },
  {
    title: "Goods & Service Tax",
    desc: "End-to-end GST services — migration, impact analysis, return filing, implementation, and audit.",
    icon: Award,
    items: ["GST Registration", "Return Filing", "GST Audit", "Impact Analysis", "GST Implementation"],
  },
  {
    title: "Advisory Services",
    desc: "Business plans, share valuation, corporate restructuring, project finance, and private equity consultation.",
    icon: Users,
    items: ["Business Plans", "Share Valuation", "Corporate Restructuring", "Project Reports", "IFRS Advisory"],
  },
  {
    title: "Company Law Matters",
    desc: "Formation of Private/Public/Section 8 Companies, ROC filings, conversions, and XBRL annual returns.",
    icon: Building2,
    items: ["Company Formation", "ROC Filings", "XBRL Returns", "Company to LLP Conversion", "Buyback Advisory"],
  },
  {
    title: "Virtual CFO / Bookkeeping",
    desc: "Complete outsourced accounting, MIS reports, HR services, and statutory compliance for lean SMEs.",
    icon: BookOpen,
    items: ["MIS Reports", "Statutory Returns", "Financial Statements", "Co-op Society Accounting", "HR Services"],
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence", sub: "Established expertise" },
  { value: "500+", label: "Clients Served", sub: "Across all sectors" },
  { value: "3", label: "Expert CA Partners", sub: "Multi-disciplinary team" },
  { value: "Pan India", label: "Reach", sub: "Domestic & International" },
];

const industries = [
  {
    name: "SMEs & Startups",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Banking & Finance",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    icon: Landmark,
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    icon: Building2,
  },
  {
    name: "Educational Institutions",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    icon: BookOpen,
  },
  {
    name: "Infrastructure",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Brokerage Houses",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    icon: TrendingUp,
  },
  {
    name: "NBFC",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    icon: PieChart,
  },
  {
    name: "Insurance Companies",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
];

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

export default function HomePage() {
  return (
    <main>
      {/* ——— HERO ——— */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-0">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Mumbai financial district skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/97 via-obsidian/90 to-obsidian/70" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-alabaster to-transparent" />
        </div>

        <div className="absolute top-0 right-0 w-[40%] h-full z-[1] opacity-10">
          <img src={hexPattern} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-8 h-px bg-vault-cyan" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-vault-cyan font-medium">
                Chartered Accountants · Mira Road, Mumbai
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white text-shadow-strong mt-0 leading-[1.05] tracking-tight"
            >
              We are a Partner in your{" "}
              <span className="text-vault-cyan relative">
                Growth
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-vault-cyan/40 rounded-full" />
              </span>{" "}
              Journey.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-body text-lg text-white/85 text-shadow-soft mt-7 leading-relaxed max-w-xl"
            >
              Virendra RM & Associates (VRM) is a professionally managed CA firm catering to domestic and international clients with a broad range of services in taxation, regulatory and advisory matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-vault-cyan/90 hover:shadow-xl hover:shadow-vault-cyan/30"
              >
                Schedule a Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/30 text-white font-display font-medium text-sm rounded-sm backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/15"
            >
              {["ICAI Registered", "Pan India Practice", "10+ Years Experience"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-vault-cyan" />
                  <span className="font-body text-xs text-white/60">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative z-10 w-full"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-border shadow-lg rounded-t-lg overflow-hidden">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-8 py-6 ${i < stats.length - 1 ? "border-r border-border" : ""}`}
                >
                  <p className="font-display text-3xl lg:text-4xl font-bold text-obsidian">{s.value}</p>
                  <p className="font-body text-sm font-medium text-obsidian mt-0.5">{s.label}</p>
                  <p className="font-body text-xs text-slate-light mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ——— ABOUT SUMMARY ——— */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <img
                  src={aboutTeam}
                  alt="VRM Associates team working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-lg p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-2xl text-obsidian">500+</p>
                      <p className="font-body text-xs text-slate-light">Clients across India</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="font-display font-bold text-2xl text-obsidian">10+</p>
                      <p className="font-body text-xs text-slate-light">Years in Practice</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="font-display font-bold text-2xl text-vault-cyan">VRM</p>
                      <p className="font-body text-xs text-slate-light">Chartered Accountants</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-vault-cyan/20 rounded-lg -z-10" />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <span className="section-label">About the Firm</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-obsidian mt-3 leading-tight">
                Excellence in providing Business Solutions.
              </h2>
              <span className="cyan-rule mt-5 mb-5 block" />
              <p className="font-body text-base text-slate-mid leading-relaxed">
                VIRENDRA RM & Associates (VRM) is a professionally managed firm catering to domestic and international clients with a broad range of services in domestic and international taxation, regulatory and advisory services.
              </p>
              <p className="font-body text-base text-slate-mid leading-relaxed mt-4">
                Our team comprises dedicated Chartered Accountants, Company Secretaries, and consultants providing end-to-end services. Our objective is to help clients focus on and achieve their business and financial goals through personalized, tailored services.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Honesty", desc: "Complete transparency, always" },
                  { label: "Punctuality", desc: "Deadlines are non-negotiable" },
                  { label: "Confidentiality", desc: "Your data, strictly protected" },
                ].map((v) => (
                  <div key={v.label} className="bg-alabaster rounded-lg p-4 border-l-2 border-vault-cyan">
                    <p className="font-display font-semibold text-obsidian text-sm">{v.label}</p>
                    <p className="font-body text-xs text-slate-light mt-1">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-vault-cyan text-white font-display font-medium text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
                >
                  Learn About VRM <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-slate-mid font-display font-medium text-sm rounded-sm transition-all hover:border-vault-cyan hover:text-vault-cyan"
                >
                  Meet Our Team
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ——— SERVICES GRID ——— */}
      <section className="py-24 bg-alabaster relative overflow-hidden">
        {/* SVG grid background graphic */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(197 75% 37%)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        {/* Radial glow top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-10"
          style={{ background: "radial-gradient(circle at 80% 10%, hsl(197 75% 37%) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <AnimatedSection>
              <span className="section-label">What We Offer</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-obsidian mt-3 leading-tight max-w-lg">
                Our Range of Services
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-slate-mid max-w-sm leading-relaxed">
                From startup compliance to complex multi-jurisdictional advisory — end-to-end financial services designed around your specific needs.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <div className="service-card bg-white rounded-lg p-8 border border-border h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-lg bg-alabaster flex items-center justify-center mb-5 border border-border group-hover:bg-vault-cyan group-hover:border-vault-cyan transition-all duration-300">
                    <svc.icon size={20} className="text-vault-cyan group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-obsidian mb-2 group-hover:text-vault-cyan transition-colors">{svc.title}</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed flex-1 mb-5">{svc.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {svc.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-vault-cyan flex-shrink-0" />
                        <span className="font-body text-xs text-slate-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-auto inline-flex items-center gap-1.5 text-vault-cyan font-body text-xs font-medium hover:gap-3 transition-all"
                  >
                    View full scope <ArrowRight size={12} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
            >
              View All 8 Service Categories
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— INDUSTRIES WE SERVE ——— */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Industries We Serve</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Our Client Universe</h2>
            <p className="font-body text-slate-mid mt-3 max-w-xl mx-auto">
              VRM successfully caters to clients across diverse sectors. For us, the sky is the limit in understanding the true potential of our clients' businesses.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[220px] gap-5">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 0.06} className={ind.className}>
                <div className="service-card group relative h-full min-h-[220px] rounded-xl overflow-hidden border border-border">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Always-on image shading for text legibility */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian/95 via-obsidian/35 to-transparent transition-colors duration-300" />
                  <div className="relative z-10 h-full flex items-end p-6">
                    <div>
                      <p className="font-display font-semibold text-base lg:text-lg text-white text-shadow-strong leading-snug">{ind.name}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ——— READY TO BEGIN CTA ——— */}
      <section className="relative overflow-hidden bg-white border-t border-border">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-alabaster to-transparent pointer-events-none" />
        {/* Geometric SVG background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large circle arcs */}
          <svg className="absolute -right-24 -top-24 w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="600" cy="0" r="400" stroke="hsl(27 87% 44%)" strokeWidth="1" />
            <circle cx="600" cy="0" r="300" stroke="hsl(27 87% 44%)" strokeWidth="1" />
            <circle cx="600" cy="0" r="200" stroke="hsl(27 87% 44%)" strokeWidth="1" />
            <circle cx="600" cy="0" r="100" stroke="hsl(27 87% 44%)" strokeWidth="1" />
          </svg>
          {/* Bottom-left arcs */}
          <svg className="absolute -left-24 -bottom-24 w-[400px] h-[400px] opacity-[0.04]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="400" r="300" stroke="hsl(27 87% 44%)" strokeWidth="1" />
            <circle cx="0" cy="400" r="200" stroke="hsl(27 87% 44%)" strokeWidth="1" />
          </svg>
          {/* Diagonal lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="hsl(27 87% 44%)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
          {/* Cyan glow blob top-right */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-20"
            style={{ background: "radial-gradient(circle, hsl(27 87% 44% / 0.32) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">Ready to Begin?</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-obsidian mt-4 leading-tight">
                Your financial clarity starts with one conversation.
              </h2>
              <p className="font-body text-slate-mid mt-5 text-base leading-relaxed">
                Whether you're a startup seeking compliance guidance or an established enterprise requiring audit support — our team of experienced Chartered Accountants is ready to help you achieve your financial goals.
              </p>
              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/30"
                >
                  Book a Free Consultation <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+917777067692"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-obsidian font-display font-medium text-sm rounded-sm transition-all hover:border-vault-cyan hover:text-vault-cyan"
                >
                  <Phone size={15} />
                  +91 7777067692
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Call Us", value: "+91 7777067692 / 9029509228", sub: "Mon–Sat, 10 AM – 7 PM" },
                  { label: "Email Us", value: "virendra@vrmca.in / priya@vrmca.in", sub: "Response within 1 business day" },
                  { label: "Visit Us", value: "Mira Road East, Thane 401107", sub: "002, Bldg C-8 Prahlad CHS, Shanti Nagar Sector 4" },
                ].map((info) => (
                  <div key={info.label} className="bg-white/80 border border-border rounded-lg p-5 hover:border-vault-cyan/40 transition-colors shadow-sm">
                    <p className="font-body text-xs text-vault-cyan uppercase tracking-wider font-medium">{info.label}</p>
                    <p className="font-display font-semibold text-obsidian mt-1 text-sm">{info.value}</p>
                    <p className="font-body text-xs text-slate-light mt-0.5">{info.sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
