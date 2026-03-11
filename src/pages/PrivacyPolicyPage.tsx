import { motion } from "framer-motion";
import { Shield } from "lucide-react";
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

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 lg:pt-32 pb-20 bg-alabaster min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <div className="w-12 h-12 bg-vault-cyan/10 rounded-lg flex items-center justify-center mb-6">
            <Shield className="text-vault-cyan" size={24} />
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-obsidian tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body text-slate-mid mt-4 text-sm uppercase tracking-wider">
            Last Updated: March 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12 space-y-8 bg-white p-8 lg:p-12 rounded-xl border border-border shadow-sm">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">1. Introduction</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              Virendra RM & Associates ("VRM", "we", "our", or "us") is committed to protecting your privacy and ensuring that your personal data is handled securely and in accordance with applicable Indian laws. This Privacy Policy outlines how we collect, use, and safeguard personal information obtained through our website and interactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">2. Information We Collect</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, submitting forms (Contact, Careers), or otherwise contacting us. The personal information that we collect depends on the context of your interactions with us and may include:
            </p>
            <ul className="list-disc pl-5 font-body text-slate-mid space-y-2">
              <li>Names, email addresses, and phone numbers.</li>
              <li>Job titles, firm names, and business requirements.</li>
              <li>Professional history, qualifications, and curriculum vitae (CVs) submitted through our Careers portal.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">3. How We Use Your Information</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use the information to:
            </p>
            <ul className="list-disc pl-5 font-body text-slate-mid space-y-2">
              <li>Respond to your inquiries and provide professional advisory or auditing services.</li>
              <li>Evaluate candidates and manage the recruitment process.</li>
              <li>Send administrative information, updates, and communications related to your engagement with VRM.</li>
              <li>Improve our website performance and user experience.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">4. Data Sharing and Protection</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We employ appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. All sensitive data exchanged between the site and its users happens over a SSL secured communication channel.
            </p>
            <p className="font-body text-slate-mid leading-relaxed mt-2">
              We may share your information only when legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-obsidian">5. Contact Us</h2>
            <p className="font-body text-slate-mid leading-relaxed">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <div className="bg-alabaster p-4 rounded-lg border border-border mt-4">
              <p className="font-display font-semibold text-obsidian">Virendra RM & Associates</p>
              <p className="font-body text-slate-mid text-sm mt-1">002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4, Mira Road East, Thane 401107</p>
              <p className="font-body text-slate-mid text-sm mt-1">Phone: +91 77770 67692</p>
              <p className="font-body text-slate-mid text-sm mt-1">Email: virendra@vrmca.in</p>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
