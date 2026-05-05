import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import hexPattern from "@/assets/hex-pattern-DgAosZTo.png";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: "New Contact Enquiry from VRM Website",
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Enquiry sent successfully!");
      } else {
        toast.error("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.8]">
          <img src={heroBackdrop} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={hexPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/76 to-white/46" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-vault-cyan" />
              <span className="section-label">Contact Us</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-obsidian mt-2 leading-tight max-w-2xl">
              Start the conversation.{" "}
              <span className="text-vault-cyan">We respond fast.</span>
            </h1>
            <p className="font-body text-slate-mid mt-6 max-w-xl leading-relaxed">
              Whether you have a specific compliance question or want to explore how VRM can support your business — our team is ready to help. Reach out and we'll respond within one business day.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href="tel:+91777706692"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90"
              >
                <Phone size={15} /> Call Now: +91 777706692
              </a>
              <a
                href="mailto:office@vrmca.in"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border font-display font-medium text-sm rounded-sm transition-all border-vault-cyan text-vault-cyan"
              >
                <Mail size={15} /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— CONTACT DETAILS BAR ——— */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+91 777706692"],
                sub: "Mon–Sat: 10 AM – 7 PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["office@vrmca.in"],
                sub: "Response within 1 business day",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["002, Bldg No C-8 Prahlad CHS"],
                sub: "Shanti Nagar Sector 4, Mira Road East, Thane 401107",
              },
            ].map((info) => (
              <div key={info.title} className="flex items-start gap-4 py-7 px-4 md:px-8">
                <div className="w-10 h-10 bg-alabaster border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon size={18} className="text-vault-cyan" />
                </div>
                <div>
                  <p className="font-display font-semibold text-obsidian text-sm mb-1">{info.title}</p>
                  {info.lines.map((line) => (
                    <p key={line} className="font-body text-sm text-slate-mid">{line}</p>
                  ))}
                  <p className="font-body text-xs text-slate-light mt-1">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FORM + MAP ——— */}
      <section className="py-16 lg:py-24 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Map + Office info */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              {/* Google Maps */}
              <div>
                <p className="font-display font-semibold text-obsidian text-sm mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-vault-cyan" /> Find Us on Map
                </p>
                <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                  <iframe
                    title="VRM Associates Office Location"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=19.280167,72.860472&z=15&output=embed"
                  />
                </div>
                <p className="font-body text-xs text-slate-light mt-2">
                  Prahlad CHS, Shanti Nagar Sector 4, Mira Road East
                </p>
              </div>

              {/* Hours card */}
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-alabaster border border-border rounded-lg flex items-center justify-center">
                    <Clock size={16} className="text-vault-cyan" />
                  </div>
                  <p className="font-display font-semibold text-obsidian text-sm">Office Hours</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-slate-mid">Monday – Friday</span>
                    <span className="font-body text-sm font-medium text-obsidian">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-slate-mid">Saturday</span>
                    <span className="font-body text-sm font-medium text-obsidian">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-slate-mid">Sunday</span>
                    <span className="font-body text-sm text-slate-light">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick contact card */}
              <div className="relative bg-white border border-border rounded-lg p-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]">
                  <img src={hexPattern} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <MessageSquare size={20} className="text-vault-cyan mb-3" />
                  <p className="font-display font-semibold text-obsidian text-base mb-2">
                    Need urgent assistance?
                  </p>
                  <p className="font-body text-sm text-slate-mid mb-4">
                    Call us directly for time-sensitive compliance or tax matters.
                  </p>
                  <a
                    href="tel:+91777706692"
                    className="inline-flex items-center gap-2 text-vault-cyan font-body text-sm hover:gap-3 transition-all"
                  >
                    +91 777706692 <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="bg-white border border-border rounded-lg p-8 lg:p-10">
                <div className="mb-8">
                  <span className="section-label">Send a Message</span>
                  <h2 className="font-display text-2xl font-bold text-obsidian mt-2">
                    Tell us how we can help you.
                  </h2>
                  <p className="font-body text-sm text-slate-light mt-2">
                    We review every enquiry and respond within one business day.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 bg-alabaster rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight size={24} className="text-vault-cyan" />
                    </div>
                    <p className="font-display text-xl font-semibold text-obsidian">
                      Message received!
                    </p>
                    <p className="font-body text-sm text-slate-light mt-2">
                      We'll respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          minLength={2}
                          maxLength={50}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="vault-input"
                          placeholder="Your full name"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit mobile number"
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, phone: value });
                          }}
                          className="vault-input"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      <div>
                        <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                          Service Required
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger className="vault-input h-auto shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-vault-cyan">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="audit-and-assurance">Audit and Assurance</SelectItem>
                            <SelectItem value="compliance-assistance">Compliance Assistance</SelectItem>
                            <SelectItem value="tax-solution">Tax Solution</SelectItem>
                            <SelectItem value="book-keeping">Book keeping</SelectItem>
                            <SelectItem value="business-set-up">Business set up</SelectItem>
                            <SelectItem value="company-law-mattes">Company law matters</SelectItem>
                            <SelectItem value="value-added-services">Value added services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="font-display text-xs font-medium text-slate-light uppercase tracking-wider mb-2 block">
                        Message *
                      </label>
                      <textarea
                        required
                        minLength={10}
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="vault-input resize-none"
                        placeholder="Describe your requirements — the more context you provide, the better we can help you."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all duration-200 hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message — We'll Respond in 24 Hours"}
                      {!isSubmitting && <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                    <p className="font-body text-xs text-slate-light text-center">
                      Your information is kept strictly confidential per our privacy policy.
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
