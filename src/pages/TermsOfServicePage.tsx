import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-alabaster min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-obsidian tracking-tight">
            Terms of Service
          </h1>
          <p className="font-body text-slate-mid mt-4 text-sm uppercase tracking-wider">
            Last Updated: March 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12 space-y-8 bg-white p-8 lg:p-12 rounded-xl border border-border shadow-sm">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">1. Acceptance of Terms</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              By accessing and using the website of Virendra R M & Associates ("VRM"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">2. Informational Purposes Only</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              The materials on this website have been prepared by VRM for informational purposes only and are not intended to be, nor should they be construed as, professional accounting, tax, legal, or other advisory services. The transmission and receipt of information contained on this website do not form or constitute a client-CPA or client-CA relationship.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">3. Intellectual Property</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              The content published on this website (digital downloads, images, texts, graphics, logos) is the property of Virendra R M & Associates and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of VRM. You may not reproduce, duplicate, copy, or otherwise exploit material on our website for a commercial purpose without our express written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">4. User Obligations</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              As a user of our website, you agree not to use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful. If you provide false, misleading, or inappropriate information through our contact or career submission forms, we reserve the right to delete such entries and ignore future requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">5. Limitation of Liability</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              In no event shall Virendra R M & Associates, nor any of its partners, managers, or employees, be liable for any direct, indirect, special, incidental, or consequential damages arising out of or in connection with the use or inability to use the information and materials provided on this website. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">6. Governing Law</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              These terms will be governed by and construed in accordance with the laws of India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Mumbai/Thane, Maharashtra.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
