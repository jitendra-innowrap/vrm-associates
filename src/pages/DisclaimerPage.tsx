import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
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

export default function DisclaimerPage() {
  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-alabaster min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
            <AlertCircle className="text-red-600" size={24} />
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-obsidian tracking-tight">
            Legal Disclaimer
          </h1>
          <p className="font-body text-slate-mid mt-4 text-sm uppercase tracking-wider">
            Important Information
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12 space-y-8 bg-white p-8 lg:p-12 rounded-xl border border-border shadow-sm">
          <section className="space-y-4">
            <p className="font-body text-slate-mid leading-relaxed text-lg font-medium text-obsidian">
              Pursuant to the rules formulated by the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to solicit work and advertise in any manner.
            </p>
            <p className="font-body text-slate-mid leading-relaxed">
              By accessing this website (<strong className="font-bold">vrmca.in</strong> or its subsidiaries), the user fully accepts that they are seeking information of their own accord and volition and that no form of solicitation has taken place by Virendra R M & Associates (VRM) or its partners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">No Client Relationship</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. We are not liable for any consequence of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal, financial, or tax issues, they in all cases must seek independent professional advice.
            </p>
            <p className="font-body text-slate-mid leading-relaxed">
              The transmission, receipt, or use of the website does not constitute or create a client-Chartered Accountant relationship. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">Website Content</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              While we make every effort to ensure the accuracy of the information provided on this website, VRM does not guarantee its completeness or correctness. The tax laws, compliance guidelines, and government notifications frequently change, and while we endeavor to keep the information up to date, there may be delays, omissions, or inaccuracies in the information.
            </p>
            <p className="font-body text-slate-mid leading-relaxed">
              Any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">External Links</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              This website may contain links to diverse external, third-party sites that are not provided or maintained by or in any way affiliated with Virendra R M & Associates. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
