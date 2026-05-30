import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Reveal, RevealText } from "@/components/Reveal";
import ownerImg from "@/assets/gallery/owner-store.png";
import badgeImg from "@/assets/gallery/owner-badge.png";

const highlights = [
  "Trusted Store",
  "Affordable Pricing",
  "Latest Devices",
  "Excellent Customer Support",
  "Premium Experience",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px]">
            <motion.div style={{ y: y1 }} className="absolute left-0 top-0 w-[70%] aspect-[3/4] rounded-3xl overflow-hidden glass-strong">
              <img src={ownerImg} alt="Rinku Birsanta inside Unique Communication store" className="h-full w-full object-cover hover:scale-110 transition-transform duration-[1.2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute right-0 bottom-0 w-[55%] aspect-square rounded-3xl overflow-hidden glass-strong border border-primary/20 glow-neon">
              <img src={badgeImg} alt="Rinku Birsanta owner badge" className="h-full w-full object-cover hover:scale-110 transition-transform duration-[1.2s]" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-primary/40 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <defs><path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
                <text className="fill-primary text-[10px] tracking-[0.3em] uppercase font-display">
                  <textPath href="#circ">Since 2014 • Trusted • Premium • Since 2014 • </textPath>
                </text>
              </svg>
              <div className="font-display text-xs text-primary text-center">EST<br/>2014</div>
            </motion.div>
          </div>

          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Story</div>
            </Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              <RevealText text="A decade of" />
              <br />
              <RevealText text="trust, quality &" className="text-gradient" />
              <br />
              <RevealText text="genuine devices." />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
                Founded by <span className="text-foreground">Rinku Birsanta</span>, Unique Communication has
                grown into one of the most loved mobile destinations in Himachal Pradesh. We
                bring you flagship smartphones, accessories, expert repairs and an experience
                designed around you — backed by assured gifts on every purchase.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <Reveal key={h} delay={0.1 + i * 0.08}>
                  <div className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/40 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-brand-gradient flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-background" />
                    </div>
                    <span className="text-sm font-medium">{h}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}