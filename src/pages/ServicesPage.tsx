import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";
const heroBackdrop = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80&auto=format&fit=crop";

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

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative py-20 lg:py-32 overflow-hidden lg:max-h-[80vh] border-b border-border">
        <div className="absolute inset-0 opacity-[0.93]">
          <img src={heroBackdrop} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-black/76 to-black/50" />
        {/* Geometric SVG background — high contrast, no photo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Diagonal line grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-diag)" />
          </svg>
          {/* Large arc right */}
          <svg className="absolute -right-32 -top-32 w-[700px] h-[700px] opacity-[0.08]" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="700" cy="0" r="500" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
            <circle cx="700" cy="0" r="380" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
            <circle cx="700" cy="0" r="260" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
            <circle cx="700" cy="0" r="140" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
          </svg>
          {/* Bottom-left small arc */}
          <svg className="absolute -left-16 bottom-0 w-[300px] h-[300px] opacity-[0.05]" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="300" r="250" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
            <circle cx="0" cy="300" r="160" stroke="hsl(27 87% 44%)" strokeWidth="1"/>
          </svg>
          {/* Cyan glow top-right */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-15"
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
              <span className="section-label">Our Services</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-obsidian mt-2 leading-tight max-w-2xl">
              Comprehensive solutions.{" "}
              <span className="text-vault-cyan">Zero compromise.</span>
            </h1>
            <p className="font-body text-base text-slate-mid mt-6 max-w-xl leading-relaxed">
              From audit and taxation to business setup and CFO support, explore our core services and choose the one aligned with your current business priorities.
            </p>
            <div className="flex flex-wrap gap-6 mt-10">
              {servicesData.map((cat) => (
                <span key={cat.id} className="font-body text-xs text-vault-cyan transition-colors cursor-default">
                  {cat.title}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— SERVICES GRID ——— */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">All Services</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Choose a Service</h2>
            <p className="font-body text-slate-mid mt-3 max-w-xl mx-auto">
              Click any service card to view the dedicated service page with detailed scope and deliverables.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 0.07}>
                <Link to={`/services/${svc.id}`} className="service-card bg-white rounded-lg p-8 border border-border h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-lg bg-alabaster flex items-center justify-center mb-5 border border-border group-hover:bg-vault-cyan group-hover:border-vault-cyan transition-all duration-300">
                    <svc.icon size={20} className="text-vault-cyan group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-obsidian mb-2 group-hover:text-vault-cyan transition-colors">{svc.title}</h3>
                  <ul className="font-body text-sm text-slate-mid leading-relaxed flex-1 mb-5 space-y-1.5">
                    {svc.cardPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-vault-cyan mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-vault-cyan font-body text-xs font-medium hover:gap-3 transition-all">
                    View details <ArrowRight size={12} />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
            >
              Talk to Our Team
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
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

        </div>
      </section>
    </main>
  );
}
