import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 rounded-lg bg-brand-gradient flex items-center justify-center font-display font-bold text-background glow-neon">
              U
            </div>
            <div className="font-display text-sm font-semibold tracking-wide leading-tight">
              UNIQUE
              <span className="block text-[10px] text-muted-foreground tracking-[0.2em]">COMMUNICATION</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-primary group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:8091221222" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gradient text-background text-sm font-semibold hover:scale-105 transition-transform glow-neon">
              <Phone className="h-4 w-4" /> 80912 21222
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-2 glass-strong rounded-2xl p-6 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">{l.label}</a>
            ))}
            <a href="tel:8091221222" className="mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-gradient text-background text-sm font-semibold">
              <Phone className="h-4 w-4" /> Call 80912 21222
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}