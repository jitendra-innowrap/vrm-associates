import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-7"
          } ${isOpaque ? "glass-nav" : "bg-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <span className="flex items-center gap-1.5">
              <span className="block w-2 h-2 rounded-full bg-vault-cyan" />
              <span className={`block w-2 h-6 rounded-sm transition-colors duration-300 ${isOpaque ? "bg-obsidian" : "bg-white"}`} />
            </span>
            <span className="font-display font-700">
              <span className={`font-bold tracking-tight transition-colors duration-300 ${isOpaque ? "text-obsidian" : "text-white"}`}>VRM</span>
              <span className="text-vault-cyan font-semibold"> & Associates</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
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
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/contact"
            className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-display font-medium text-sm rounded transition-all duration-200 hover:shadow-md ${isOpaque
                ? "bg-vault-cyan text-white hover:bg-vault-cyan/90"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
              }`}
          >
            Get in Touch
          </a>

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
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-3 px-2 font-body text-base font-medium border-b border-border transition-colors ${isActive ? "text-vault-cyan" : "text-obsidian"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-vault-cyan text-white font-display font-medium text-sm rounded hover:bg-vault-cyan/90 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
