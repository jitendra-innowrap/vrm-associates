import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import {
  ArrowRight, Target, Eye, Users, TrendingUp, Globe, Award,
} from "lucide-react";
import hexPattern from "@/assets/hex-pattern-DgAosZTo.png";
import officeInterior from "@/assets/office-interior-_0x9MCGU.jpg";
const aboutTeam = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80";

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

const coreValues = [
  {
    icon: Users,
    name: "Safe Work Environment",
    desc: "We foster a safe, inclusive, and supportive workspace where every team member can thrive and contribute their best work without fear or prejudice.",
    size: "lg:col-span-2",
    highlight: false,
  },
  {
    icon: Eye,
    name: "Honesty",
    desc: "Complete transparency in all our client engagements. We present facts and findings as they are, without filters or favourable distortions.",
    size: "",
    highlight: true,
  },
  {
    icon: Award,
    name: "Punctuality",
    desc: "Deadlines in compliance are non-negotiable. We build our practice on the foundation of timely delivery, every single time.",
    size: "",
    highlight: false,
  },
  {
    icon: Globe,
    name: "Confidentiality",
    desc: "Your financial information is a sacred trust. All client data is handled with the highest levels of discretion and professional secrecy.",
    size: "",
    highlight: false,
  },
  {
    icon: TrendingUp,
    name: "Equality",
    desc: "Every client — from a solo entrepreneur to a multi-national — receives the same quality of attention, rigor, and respect.",
    size: "lg:col-span-2",
    highlight: false,
  },
];

const industries = [
  {
    name: "SMEs & Startups",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Banking & Finance",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Educational Institutions",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Infrastructure",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Brokerage Houses",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "NBFC",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Insurance Companies",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* ——— HERO ——— */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={officeInterior}
            alt="VRM Associates office"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/76 to-white/46" />
          {/* subtle hex overlay */}
          <div className="absolute inset-0 opacity-[0.07]">
            <img src={hexPattern} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Geometric accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="300" r="350" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="400" cy="300" r="250" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
            <circle cx="400" cy="300" r="150" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-vault-cyan" />
                <span className="section-label">About the Firm</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-obsidian mt-2 leading-tight">
                Professionals you can trust.{" "}
                <span className="text-vault-cyan">Completely.</span>
              </h1>
              <p className="font-body text-slate-mid mt-6 text-base leading-relaxed">
                A professionally managed CA firm delivering end-to-end taxation, audit, and advisory services to domestic and international clients from Mira Road, Mumbai.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90"
                >
                  Explore Our Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-obsidian font-display font-medium text-sm rounded-sm transition-all border-vault-cyan text-vault-cyan backdrop-blur-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— WHO WE ARE ——— */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <AnimatedSection className="lg:col-span-2 lg:sticky top-32">
              <span className="section-label">Who We Are</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-obsidian mt-3 leading-tight">
                A firm built on trust and expertise.
              </h2>
              <span className="cyan-rule mt-5 mb-6 block" />
              <div className="rounded-lg overflow-hidden">
                <img src={aboutTeam} alt="VRM Associates team" className="w-full object-cover aspect-[4/3]" />
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="space-y-6 font-body text-base text-slate-mid leading-relaxed">
                <p>
                  VIRENDRA R M & Associates (VRM) firm is a professionally managed firm catering to domestic and international clients with a broad range of services in domestic and international taxation, regulatory and advisory services.
                </p>
                <p>
                  The team at the firm has dedicated and experienced professionals and associates like Chartered Accountants, Company Secretary and consultants to provide end-to-end services to your business.
                </p>
                <p>
                  Our objective is to help our clients to focus on and achieve their business and financial goals by providing them services that are personalized and tailored to meet our clients' requirements. Over the years, we have managed to earn the trust of our worthy clients.
                </p>
                <p>
                  Our firm is successfully catering to various clients across industries like Banking & Finance, Educational Institutions, Real Estate and Infrastructure, Brokers etc. For us, sky is the limit in understanding the true potential of our clients' businesses so as to achieve their business and financial goals.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-border">
                {[
                  { val: "10+", label: "Years in Practice" },
                  { val: "500+", label: "Clients Served" },
                  { val: "3", label: "Expert Partners" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-bold text-vault-cyan">{s.val}</p>
                    <p className="font-body text-sm text-slate-light mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ——— MISSION & VISION ——— */}
      <section className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Our Purpose</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Mission & Vision</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-[#FFF7EE] to-white border border-[#F2D7BF] rounded-lg p-10 overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-vault-cyan/10 blur-2xl" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-vault-cyan/60 via-vault-cyan/20 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-vault-cyan/20 rounded-lg flex items-center justify-center">
                      <Target size={20} className="text-vault-cyan" />
                    </div>
                    <span className="section-label">Our Mission</span>
                  </div>
                  <p className="font-display text-2xl lg:text-3xl font-bold text-obsidian leading-snug">
                    "We are a Partner in your Growth Journey."
                  </p>
                  <span className="cyan-rule mt-6 block" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative bg-gradient-to-br from-white to-[#FFF3E8] rounded-lg p-10 border border-[#EFD9C7] overflow-hidden h-full">
                <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-vault-cyan/15 rounded-full" />
                <div className="absolute -top-12 left-1/3 w-40 h-40 rounded-full bg-vault-cyan/8 blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-alabaster rounded-lg flex items-center justify-center border border-border">
                      <Eye size={20} className="text-vault-cyan" />
                    </div>
                    <span className="section-label">Our Vision</span>
                  </div>
                  <p className="font-display text-2xl lg:text-3xl font-bold text-obsidian leading-snug">
                    "Excellence in providing Business Solutions to our Clients."
                  </p>
                  <span className="cyan-rule mt-6 block" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ——— CORE VALUES — BENTO GRID ——— */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-14">
            <span className="section-label">What Guides Us</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Our Core Values</h2>
            <p className="font-body text-slate-mid mt-3 max-w-lg leading-relaxed">
              The principles that shape every engagement, every decision, and every relationship we build.
            </p>
          </AnimatedSection>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {/* Safe Work Environment — wide card */}
            <AnimatedSection className="md:col-span-2" delay={0}>
              <div className="h-full bg-gradient-to-br from-white to-[#FFF6EE] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group border border-[#EFD9C7] hover:border-vault-cyan transition-colors">
                <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-vault-cyan/10 blur-2xl" />
                <div className="absolute -bottom-6 left-8 w-32 h-32 rounded-full border border-vault-cyan/20" />
                <div className="w-11 h-11 bg-vault-cyan/20 rounded-xl flex items-center justify-center mb-4">
                  <Users size={20} className="text-vault-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-obsidian text-lg mb-1">Safe Work Environment</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    We foster a safe, inclusive, and supportive workspace where every team member can thrive and contribute without fear or prejudice.
                  </p>
                </div>
                <span className="cyan-rule mt-4 block" />
              </div>
            </AnimatedSection>

            {/* Honesty — accent card */}
            <AnimatedSection delay={0.06}>
              <div className="h-full bg-vault-cyan rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Eye size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">Honesty</h3>
                  <p className="font-body text-sm text-white/80 leading-relaxed">
                    Complete transparency in all client engagements — facts as they are.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Punctuality */}
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-alabaster rounded-2xl p-8 flex flex-col justify-between border border-border relative overflow-hidden group hover:border-vault-cyan transition-colors">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 border border-border">
                  <Award size={20} className="text-vault-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-obsidian text-lg mb-1">Punctuality</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    Deadlines are non-negotiable. Timely delivery, every single time.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Confidentiality */}
            <AnimatedSection delay={0.14}>
              <div className="h-full bg-alabaster rounded-2xl p-8 flex flex-col justify-between border border-border relative overflow-hidden group hover:border-vault-cyan transition-colors">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 border border-border">
                  <Globe size={20} className="text-vault-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-obsidian text-lg mb-1">Confidentiality</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    Your financial information is a sacred trust, handled with utmost discretion.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Equality — wide card */}
            <AnimatedSection className="md:col-span-1" delay={0.18}>
              <div className="h-full bg-alabaster border border-border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-vault-cyan transition-colors">
                <div className="w-11 h-11 bg-vault-cyan/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={20} className="text-vault-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-obsidian text-lg mb-1">Equality</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    Every client — startup to enterprise — receives the same rigor and respect.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ——— INDUSTRIES — IMAGE BENTO GRID ——— */}
      <section className="py-24 bg-alabaster relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="hsl(197 75% 37%)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="mb-12">
            <span className="section-label">Industries We Serve</span>
            <h2 className="font-display text-4xl font-bold text-obsidian mt-3">Our Client Universe</h2>
            <p className="font-body text-slate-mid mt-3 max-w-xl leading-relaxed">
              We successfully cater to clients across diverse industries, delivering personalized solutions for each sector.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[220px] gap-5">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 0.06} className={ind.className}>
                <div className="service-card group relative h-full min-h-[220px] rounded-xl overflow-hidden border border-border">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian/95 via-obsidian/65 to-transparent transition-colors duration-300" />
                  <div className="relative z-10 h-full flex items-end p-6">
                    <p className="font-display font-semibold text-base lg:text-lg text-white text-shadow-strong leading-snug">{ind.name}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-vault-cyan text-white font-display font-semibold text-sm rounded-sm transition-all hover:bg-vault-cyan/90 hover:shadow-lg"
            >
              Meet Our Expert Team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
