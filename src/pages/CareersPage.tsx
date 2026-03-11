import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, ArrowRight, Shield, Users, Star, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import hexPattern from "@/assets/hex-pattern-DgAosZTo.png";
import officeInteriorHero from "@/assets/office-interior-_0x9MCGU.jpg";
import { toast } from "sonner";
const officeInterior = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";

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

const workplaceValues = [
  {
    icon: Shield,
    title: "Safe Work Environment",
    desc: "We are committed to maintaining a physically and psychologically safe workplace. Every team member can voice concerns, share ideas, and work without fear of any form of harassment or discrimination. This is a non-negotiable at VRM.",
  },
  {
    icon: Users,
    title: "Equality for All",
    desc: "We believe in equal opportunity — regardless of gender, background, or experience level. Every individual at VRM is valued, heard, and given fair opportunities to grow professionally.",
  },
  {
    icon: Star,
    title: "Professional Growth",
    desc: "We invest in our people. Continuous learning, exposure to diverse client engagements across audit, tax, and advisory, plus mentorship from experienced CAs help you build a career that compounds year over year.",
  },
  {
    icon: Heart,
    title: "Work-Life Harmony",
    desc: "We respect boundaries. Professional excellence doesn't require burning out. We support a culture of focused, efficient work and personal well-being — because great work is sustainable work.",
  },
];

export default function CareersPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", mobile: "", email: "", qualification: "",
  });

  const handleFile = (file: File) => {
    setFileName(file.name);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formSubmitData = new FormData();
    formSubmitData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formSubmitData.append("subject", `New Job Application: ${formData.firstName} ${formData.lastName}`);
    formSubmitData.append("from_name", `${formData.firstName} ${formData.lastName}`);
    formSubmitData.append("replyto", formData.email);
    
    for (const key in formData) {
      formSubmitData.append(key, formData[key as keyof typeof formData]);
    }
    
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files[0]) {
      formSubmitData.append("attachment", fileInput.files[0]);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formSubmitData,
      });
      
      if (response.ok) {
        setSubmitted(true);
        toast.success("Application submitted successfully!");
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background office image */}
        <div className="absolute inset-0 z-0">
          <img
            src={officeInteriorHero}
            alt="VRM Associates modern office"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/85 to-obsidian/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-vault-cyan" />
              <span className="section-label">Join Our Team</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-3xl">
              Build a career you're{" "}
              <span className="text-vault-cyan">proud of.</span>
            </h1>
            <p className="font-body text-base text-white/60 mt-6 max-w-xl leading-relaxed">
              At VRM Associates, we are always looking for talented, driven professionals who share our commitment to excellence, integrity, and client success. Join a firm that values your growth as much as our clients'.
            </p>
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { label: "Multi-disciplinary Practice", val: "CA, CS & Consultants" },
                { label: "Client Exposure", val: "Banks, NBFCs, SMEs & More" },
                { label: "Work Culture", val: "Safe, Equal & Growth-Focused" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display font-bold text-white text-base">{item.val}</p>
                  <p className="font-body text-xs text-white/40 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— CULTURE / VALUES ——— */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-14 max-w-2xl">
            <span className="section-label">Our Culture</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">
              Why Work With VRM?
            </h2>
            <p className="font-body text-slate-mid mt-3 leading-relaxed">
              We've built a workplace rooted in equality, growth, and human dignity — because we know that the best work comes from people who feel respected and valued.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workplaceValues.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.08}>
                <div className="service-card bg-alabaster rounded-lg p-8 border border-border h-full flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg border border-border flex items-center justify-center">
                    <val.icon size={20} className="text-vault-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-obsidian mb-2 text-lg">{val.title}</h3>
                    <p className="font-body text-sm text-slate-mid leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ——— EQUALITY COMMITMENT ——— */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          {/* Office image at lower brightness so text reads clearly */}
          <img
            src={officeInterior}
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.22) saturate(0.6)" }}
          />
          {/* Additional dark overlay for guaranteed contrast */}
          <div className="absolute inset-0 bg-obsidian/70" />
          {/* Subtle hex grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="commit-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#commit-grid)" />
          </svg>
          {/* Cyan glow left */}
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-15"
            style={{ background: "radial-gradient(circle, hsl(197 75% 37% / 0.4) 0%, transparent 65%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">Our Commitment</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mt-3 leading-tight">
                An equal opportunity employer — always.
              </h2>
              <span className="cyan-rule mt-6 block" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-body text-white/85 leading-relaxed">
                At Virendra RM & Associates, we are committed to building a team that reflects the diversity of the clients we serve. We do not discriminate based on caste, religion, gender, age, or disability. Every candidate is evaluated solely on their professional merit, attitude, and alignment with our firm's core values.
              </p>
              <p className="font-body text-white/85 leading-relaxed mt-4">
                We actively encourage applications from women, differently-abled individuals, and candidates from all backgrounds. At VRM, your talent and dedication are what matter.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Gender Inclusive", "Merit-Based", "Disability-Friendly", "All Backgrounds Welcome"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 border border-white/30 rounded-full font-body text-xs text-white/80 bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ——— APPLICATION FORM ——— */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info */}
            <AnimatedSection className="lg:col-span-2">
              <span className="section-label">Apply Now</span>
              <h2 className="font-display text-3xl font-bold text-obsidian mt-3 leading-tight">
                Send us your application.
              </h2>
              <p className="font-body text-sm text-slate-mid mt-4 leading-relaxed">
                We review every application carefully. If there's a fit — current or future — we'll reach out. Even if there's no open position, don't hesitate to express your interest.
              </p>

              {/* Open roles */}
              <div className="mt-8 space-y-3">
                <p className="font-display font-semibold text-obsidian text-xs tracking-wider uppercase mb-4">Roles We Hire For</p>
                {[
                  "Article Assistants (CA Students)",
                  "Audit Associates",
                  "Tax Consultants",
                  "Company Secretary (CS)",
                  "Interns — CA Foundation / Inter",
                  "Bookkeeping / Accounts Executives",
                ].map((role) => (
                  <div key={role} className="flex items-center gap-3 py-2.5 border-b border-border last:border-b-0">
                    <CheckCircle2 size={14} className="text-vault-cyan flex-shrink-0" />
                    <span className="font-body text-sm text-slate-mid">{role}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border border-border rounded-lg p-5">
                <p className="font-body text-xs text-slate-light">For direct queries about opportunities:</p>
                <a
                  href="mailto:virendra@vrmca.in"
                  className="font-body text-sm text-vault-cyan hover:underline mt-1 block"
                >
                  virendra@vrmca.in
                </a>
              </div>
            </AnimatedSection>

            {/* Application Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="bg-white border border-border rounded-lg p-8 lg:p-10">
                <div className="mb-8">
                  <span className="section-label">Application Form</span>
                  <h3 className="font-display text-xl font-bold text-obsidian mt-2">Submit your details below.</h3>
                </div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <CheckCircle2 size={48} className="text-vault-cyan mx-auto mb-4" />
                    <p className="font-display text-xl font-semibold text-obsidian">Application Submitted!</p>
                    <p className="font-body text-sm text-slate-light mt-2">
                      We'll review your application and get back to you within 5 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="vault-input"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="vault-input"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="vault-input"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="vault-input"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                        Highest Qualification *
                      </label>
                      <select
                        required
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="vault-input bg-transparent"
                      >
                        <option value="">Select your qualification</option>
                        <option value="ca-final">CA Final</option>
                        <option value="ca-inter">CA Inter / IPCC</option>
                        <option value="ca-foundation">CA Foundation</option>
                        <option value="qualified-ca">Qualified CA (FCA/ACA)</option>
                        <option value="cs">Company Secretary (CS)</option>
                        <option value="bcom">B.Com / M.Com</option>
                        <option value="mba-finance">MBA Finance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-3 block">
                        Resume / CV *
                      </label>
                      <div
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-all duration-200 ${
                          dragOver || fileName
                            ? "border-vault-cyan bg-alabaster"
                            : "border-border hover:border-vault-cyan hover:bg-alabaster"
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                          required={!fileName}
                        />
                        {fileName ? (
                          <>
                            <CheckCircle2 size={28} className="text-vault-cyan mx-auto mb-2" />
                            <p className="font-display font-semibold text-obsidian text-sm">{fileName}</p>
                            <p className="font-body text-xs text-slate-light mt-1">Click to change file</p>
                          </>
                        ) : (
                          <>
                            <Upload size={28} className="text-slate-light mx-auto mb-2" />
                            <p className="font-display font-semibold text-obsidian text-sm">Drop your resume here</p>
                            <p className="font-body text-xs text-slate-light mt-1">or click to browse — PDF, DOC, DOCX accepted</p>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-display font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-vault-cyan hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      {!isSubmitting && <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                    <p className="font-body text-xs text-slate-light text-center">
                      We review every application. Your data is kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
