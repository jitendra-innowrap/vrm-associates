import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Phone, Check
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { servicesData, homeServiceIds } from "@/data/services";
import { sectorsData } from "@/data/sectors";
import heroBg from "@/assets/hero-bg.jpg";
import hexPattern from "@/assets/hex-pattern-DgAosZTo.png";
const aboutTeam = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80";
const serviceCardImages: Record<string, string> = {
  "audit-and-assurance":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  "compliance-assistance":
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
  "tax-solution":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  "book-keeping":
    "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80",
  "business-set-up":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  "company-law-mattes":
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  "value-added-services":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
};
const homeServices = homeServiceIds
  .map((id) => servicesData.find((service) => service.id === id))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));

const stats = [
  { value: "10+", label: "Years of Excellence", sub: "Established expertise" },
  { value: "500+", label: "Clients Served", sub: "Across all sectors" },
  { value: "3", label: "Expert CA Partners", sub: "Multi-disciplinary team" },
  { value: "PAN", label: "India", sub: "Practise" },
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/97 via-obsidian/90 to-obsidian/70" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-alabaster to-transparent" />
        </div>

        {/* <div className="absolute top-0 right-0 w-[40%] h-full z-[1] opacity-10">
          <img src={hexPattern} alt="" className="w-full h-full object-cover" />
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24">
          <div className="max-w-3xl">

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
              Virendra R M & Associates (VRM) is a professionally managed CA firm catering to domestic and international clients with a broad range of services in taxation, regulatory and advisory matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <Link
                to="#footer-get-in-touch"
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
                Virendra R M & Associates (VRM) is a professionally managed firm catering to domestic and international clients with a broad range of services in domestic and international taxation, regulatory and advisory services. We offer bouquet of services under one roof. The Firm provides holistic and implementable advice to clients.
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
            {homeServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <Link to={`/services/${svc.id}`} className="service-card bg-white rounded-lg border border-border h-full flex flex-col overflow-hidden group">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                    <img
                      src={serviceCardImages[svc.id]}
                      alt={`${svc.title} service`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold text-obsidian mb-2 group-hover:text-vault-cyan transition-colors">{svc.title}</h3>
                    <p className="font-body text-sm text-slate-mid leading-relaxed flex-1 mb-5 xl:line-clamp-3">
                      {svc.description}
                    </p>
                  <span
                    className="mt-auto inline-flex items-center gap-1.5 text-vault-cyan font-body text-xs font-medium hover:gap-3 transition-all"
                  >
                    Explore this service <ArrowRight size={12} />
                  </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
            >
              View All {servicesData.length} Service Categories
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— INDUSTRIES WE SERVE ——— */}
      <section id="industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Industries We Support</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Sectors we serve</h2>
            <p className="font-body text-slate-mid mt-3 max-w-xl mx-auto">
              Banks and financial services, service providers, construction and infrastructure, educational institutions, media, and mutual funds.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectorsData.map((sector, i) => (
              <AnimatedSection key={sector.title} delay={i * 0.06}>
                <div className="service-card group relative rounded-xl overflow-hidden border border-border min-h-[320px] flex items-end">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/55 to-obsidian/20" />
                  <div className="relative z-10 p-6 w-full">
                    {sector.points.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {sector.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <Check size={14} className="text-vault-cyan mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm text-white/90">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="font-display font-semibold text-lg text-white text-shadow-strong leading-snug">
                      {sector.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
