import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "@/components/Particles";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";
import { RevealText } from "@/components/Reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-20">
      {/* mesh + grid bg */}
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="absolute inset-0 grid-bg" />
      <Particles density={70} />
      {/* floating glows */}
      <motion.div style={{ y }} className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <motion.div style={{ y }} className="absolute top-40 -right-40 h-[600px] w-[600px] rounded-full bg-secondary/20 blur-[140px] animate-glow-pulse" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Trusted in Solan, Himachal Pradesh
            </motion.div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight">
              <RevealText text="Solan's Most" className="block" />
              <RevealText text="Trusted Mobile" className="block text-gradient" />
              <RevealText text="Store." className="block" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Latest smartphones. Best deals. Expert services. Assured gifts with
              every purchase — crafted with care by <span className="text-foreground">Rinku Birsanta</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href="#contact" variant="primary">
                Visit Store <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="tel:8091221222" variant="outline">
                <Phone className="h-4 w-4" /> Call Now
              </MagneticButton>
              <MagneticButton href="#brands" variant="ghost">
                Explore Collection
              </MagneticButton>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-xl"
            >
              {[
                { v: 5000, s: "+", l: "Happy Customers" },
                { v: 10, s: "+", l: "Years Experience" },
                { v: 100, s: "%", l: "Genuine Products" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 sm:p-5">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative h-[520px] hidden lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[480px]">
                {/* phone mockup */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-[44px] glass-strong border border-white/10 overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black/80" />
                  <div className="absolute inset-6 top-16 rounded-3xl glass p-5 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-primary">Unique</div>
                      <div className="mt-2 font-display text-2xl font-bold text-gradient">iPhone<br/>Galaxy<br/>OnePlus</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-brand-gradient" /></div>
                      <div className="h-1.5 rounded-full bg-white/10"><div className="h-full w-1/2 rounded-full bg-brand-gradient" /></div>
                    </div>
                  </div>
                </motion.div>

                {/* floating cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-20 top-12 glass rounded-2xl p-3 w-44 shadow-luxury"
                >
                  <div className="text-[10px] uppercase text-primary tracking-wider">Gift With Every</div>
                  <div className="font-display font-bold mt-1">Purchase 🎁</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -right-16 bottom-16 glass rounded-2xl p-3 w-44 shadow-luxury"
                >
                  <div className="text-[10px] uppercase text-secondary tracking-wider">100% Genuine</div>
                  <div className="font-display font-bold mt-1">Best Prices ⚡</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-20 -top-6 glass rounded-full px-4 py-2 shadow-luxury"
                >
                  <div className="flex items-center gap-1.5 text-xs"><MapPin className="h-3 w-3 text-primary" /> Mall Road, Solan</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}