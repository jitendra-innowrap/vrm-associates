import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Audit & Assurance", href: "/services" },
    { label: "Direct Tax", href: "/services" },
    { label: "GST Services", href: "/services" },
    { label: "Advisory", href: "/services" },
    { label: "Company Law", href: "/services" },
    { label: "Virtual CFO", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Legal Disclaimer", href: "/disclaimer" },
  ],
};

function GetInTouchForm() {
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
          subject: "New Enquiry from Footer Form",
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-12 text-center fade-in">
        <span className="cyan-rule mx-auto mb-4" />
        <p className="font-display text-xl font-semibold text-obsidian mt-4">
          Thank you. We'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          required
          minLength={2}
          maxLength={50}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-transparent border-b-2 border-vault-cyan/30 py-4 px-0 font-body text-obsidian placeholder:text-slate-light outline-none focus:border-vault-cyan transition-colors"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-transparent border-b-2 border-vault-cyan/30 py-4 px-0 font-body text-obsidian placeholder:text-slate-light outline-none focus:border-vault-cyan transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="tel"
          placeholder="Phone Number"
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          value={formData.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
            setFormData({ ...formData, phone: value });
          }}
          className="w-full bg-transparent border-b-2 border-vault-cyan/30 py-4 px-0 font-body text-obsidian placeholder:text-slate-light outline-none focus:border-vault-cyan transition-colors"
        />
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger className="w-full h-auto bg-transparent border-x-0 border-t-0 border-b-2 border-vault-cyan/30 py-4 px-0 font-body text-slate-mid outline-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-vault-cyan transition-colors shadow-none rounded-none">
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="audit">Audit & Assurance</SelectItem>
            <SelectItem value="tax">Direct Tax</SelectItem>
            <SelectItem value="gst">GST Services</SelectItem>
            <SelectItem value="advisory">Advisory</SelectItem>
            <SelectItem value="company-law">Company Law</SelectItem>
            <SelectItem value="virtual-cfo">Virtual CFO</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <textarea
        placeholder="Brief description of your requirements"
        required
        minLength={10}
        rows={3}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full bg-transparent border-b-2 border-vault-cyan/30 py-4 px-0 font-body text-obsidian placeholder:text-slate-light outline-none focus:border-vault-cyan transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex items-center gap-3 px-7 py-3.5 bg-vault-cyan text-white font-display font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-vault-cyan/90 hover:shadow-lg hover:shadow-vault-cyan/25 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
        {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
      </button>
    </form>
  );
}

export default function Footer() {
  const { ref, inView } = useScrollReveal();

  return (
    <footer className="bg-alabaster relative overflow-hidden border-t border-border">
      {/* Subtle cyan geometric accent top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 10%, hsl(197 75% 37% / 0.18) 0%, transparent 65%)",
        }}
      />
      {/* Decorative corner shape */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="320" cy="0" r="240" stroke="hsl(197 75% 37%)" strokeWidth="1.5" />
          <circle cx="320" cy="0" r="180" stroke="hsl(197 75% 37%)" strokeWidth="1" />
          <circle cx="320" cy="0" r="120" stroke="hsl(197 75% 37%)" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Get in Touch Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="border-b border-border/80 max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="section-label">Let's Talk</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-obsidian mt-3 leading-tight">
              Get in Touch
            </h2>
            <p className="font-body text-slate-mid mt-4 leading-relaxed">
              Tell us about your financial goals and compliance needs. Our team will respond within one business day.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+917777067692"
                className="flex items-center gap-3 text-slate-mid hover:text-vault-cyan transition-colors font-body text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-vault-cyan/10 flex items-center justify-center group-hover:bg-vault-cyan/20 transition-colors flex-shrink-0">
                  <Phone size={14} className="text-vault-cyan" />
                </div>
                +91 7777067692 / 9029509228
              </a>
              <a
                href="mailto:virendra@vrmca.in"
                className="flex items-center gap-3 text-slate-mid hover:text-vault-cyan transition-colors font-body text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-vault-cyan/10 flex items-center justify-center group-hover:bg-vault-cyan/20 transition-colors flex-shrink-0">
                  <Mail size={14} className="text-vault-cyan" />
                </div>
                virendra@vrmca.in
              </a>
              <div className="flex items-start gap-3 text-slate-mid font-body text-sm">
                <div className="w-8 h-8 rounded-full bg-vault-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-vault-cyan" />
                </div>
                002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4, Mira Road East, Thane 401107
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <GetInTouchForm />
          </div>
        </div>
      </motion.div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1">
                <span className="block w-2 h-2 rounded-full bg-vault-cyan" />
                <span className="block w-2 h-6 rounded-sm bg-obsidian" />
              </span>
              <span className="font-display font-bold text-obsidian">
                Virendra RM <span className="text-vault-cyan">&</span> Associates
              </span>
            </Link>
            <p className="font-body text-sm text-slate-mid leading-relaxed max-w-xs">
              Virendra RM & Associates — Chartered Accountants. Your trusted partner in growth, compliance, and financial excellence.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="tel:+917777067692"
                className="inline-flex items-center gap-2 text-xs font-body text-slate-mid hover:text-vault-cyan transition-colors"
              >
                <Phone size={12} className="text-vault-cyan" /> +91 7777067692
              </a>
              <span className="text-border">·</span>
              <a
                href="mailto:virendra@vrmca.in"
                className="inline-flex items-center gap-2 text-xs font-body text-slate-mid hover:text-vault-cyan transition-colors"
              >
                <ExternalLink size={12} className="text-vault-cyan" /> virendra@vrmca.in
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-obsidian text-sm mb-4 tracking-wide">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-slate-mid hover:text-vault-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-light">
            © {new Date().getFullYear()} Virendra RM & Associates. All rights reserved. | CA Firm Mira Road, Mumbai.
          </p>
          <p className="font-body text-xs text-slate-light">
            Serving clients across Mumbai, Mira Road & Pan India
          </p>
        </div>
      </div>
    </footer>
  );
}
