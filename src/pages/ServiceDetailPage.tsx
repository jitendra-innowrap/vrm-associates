import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
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
            <span className="section-label">Service Hierarchy</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Service Deliverables</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.detailSections.map((section, index) => (
              <AnimatedSection key={section.title} delay={index * 0.08}>
                <div className="service-card bg-white rounded-lg p-6 border border-border h-full">
                  <span className="font-display font-bold text-3xl text-vault-cyan/25 block mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-obsidian font-semibold leading-snug">{section.title}</h3>
                  {section.content && (
                    <p className="font-body text-sm text-slate-mid leading-relaxed mt-3">{section.content}</p>
                  )}
                  {section.points && section.points.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-vault-cyan mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-slate-mid leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
