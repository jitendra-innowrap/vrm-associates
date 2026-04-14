import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Layers } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { servicesData } from "@/data/services";

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

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="pt-24">
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <span className="section-label">Service Details</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-obsidian mt-3 leading-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="font-body text-vault-cyan mt-3 text-sm uppercase tracking-[0.14em]">
              {service.tagline}
            </p>
            <p className="font-body text-slate-mid mt-6 max-w-3xl leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20"
              >
                Enquire Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-slate-mid font-display font-semibold text-sm rounded-sm transition-all hover:border-vault-cyan hover:text-vault-cyan"
              >
                Back to Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-12">
            <span className="section-label">Key Focus Areas</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Where We Add Value</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.highlights.map((highlight, index) => (
              <AnimatedSection key={highlight} delay={index * 0.08}>
                <div className="service-card bg-white rounded-lg p-6 border border-border h-full">
                  <span className="font-display font-bold text-3xl text-vault-cyan/25 block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-obsidian font-semibold leading-snug">{highlight}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-12">
            <span className="section-label">Scope of Work</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Service Deliverables</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.scope.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.05}>
                <div className="service-card bg-alabaster rounded-lg p-6 border border-border h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-vault-cyan" />
                  </div>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <div className="service-card bg-white rounded-lg border border-border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-alabaster border border-border flex items-center justify-center">
                  <Layers size={18} className="text-vault-cyan" />
                </div>
                <p className="font-body text-sm text-slate-mid">
                  Need a customized scope? We can tailor this service to your exact business requirements.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90"
              >
                Request Custom Proposal
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
