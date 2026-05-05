import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Sectors We Serve", to: "/#industries" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";
  const isOpaque = !isHomePage || scrolled;

  const handleIndustriesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/#industries");
    }

    window.requestAnimationFrame(() => {
      const section = document.getElementById("industries");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const handleGetInTouchClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const footerCtaHiddenOnPage = ["/contact", "/careers"].includes(location.pathname);

    if (footerCtaHiddenOnPage) {
      navigate("/#footer-get-in-touch");
      return;
    }

    window.requestAnimationFrame(() => {
      const section = document.getElementById("footer-get-in-touch");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate("/#footer-get-in-touch");
      }
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-7"
          } ${isOpaque ? "glass-nav" : "bg-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <BrandLogo isLight={!isOpaque} />
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.to === "/#industries" ? (
                  <a
                    href={link.to}
                    onClick={handleIndustriesClick}
                    className={`font-body text-sm font-medium transition-colors duration-200 relative group ${isOpaque
                      ? "text-slate-mid hover:text-obsidian"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px bg-vault-cyan transition-all duration-300 w-0 group-hover:w-full" />
                  </a>
                ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-body text-sm font-medium transition-colors duration-200 relative group ${isActive
                      ? "text-vault-cyan"
                      : isOpaque
                        ? "text-slate-mid hover:text-obsidian"
                        : "text-white/80 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-vault-cyan transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex gap-1">
            <a
              href="/VRM-Associates-Company-Profile.pdf"
              download
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-display font-medium text-sm rounded transition-all duration-200 hover:shadow-md ${isOpaque
                  ? "border border-vault-cyan text-vault-cyan hover:bg-vault-cyan/10"
                  : "bg-white/10 text-white border border-white/40 hover:bg-white/20 backdrop-blur-sm"
                }`}
            >
              <FileText size={15} />
              Brochure
            </a>
            <a
              href="/#footer-get-in-touch"
              onClick={handleGetInTouchClick}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-display font-medium text-sm rounded transition-all duration-200 hover:shadow-md ${isOpaque
                  ? "bg-vault-cyan text-white hover:bg-vault-cyan/90"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
                }`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${isOpaque ? "text-obsidian" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-8 glass-nav lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  {link.to === "/#industries" ? (
                    <a
                      href={link.to}
                      onClick={handleIndustriesClick}
                      className="block py-3 px-2 font-body text-base font-medium border-b border-border transition-colors text-obsidian"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block py-3 px-2 font-body text-base font-medium border-b border-border transition-colors ${isActive ? "text-vault-cyan" : "text-obsidian"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/#footer-get-in-touch"
                  onClick={handleGetInTouchClick}
                  className="block w-full text-center px-5 py-3 bg-vault-cyan text-white font-display font-medium text-sm rounded hover:bg-vault-cyan/90 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/VRM-Associates-Company-Profile.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-vault-cyan text-vault-cyan font-display font-medium text-sm rounded hover:bg-vault-cyan/10 transition-colors"
                >
                  <FileText size={15} />
                  Brochure
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
