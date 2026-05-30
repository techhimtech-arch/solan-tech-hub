import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Gift, Zap, Percent, Crown } from "lucide-react";

const offers = [
  { icon: Gift, tag: "Assured Gift", title: "Free Premium Gift", desc: "Receive a curated gift on every smartphone purchase.", accent: "from-primary/30 to-transparent" },
  { icon: Percent, tag: "Save Big", title: "Up to 30% Off", desc: "Exclusive store discounts on selected flagship models.", accent: "from-secondary/30 to-transparent" },
  { icon: Zap, tag: "Flash Deal", title: "Same-Day Exchange", desc: "Best buy-back value on your old phone, instantly.", accent: "from-primary/30 to-transparent" },
  { icon: Crown, tag: "VIP", title: "Lifetime Support", desc: "Personalized after-sales care from our experts.", accent: "from-secondary/30 to-transparent" },
];

const ticker = [
  "🎁 Assured gift on every purchase",
  "⚡ Same-day repairs",
  "💎 100% genuine devices",
  "🚀 New launches day one",
  "💚 Lifetime support",
];

export function Offers() {
  return (
    <section id="offers" className="relative py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Exclusive Offers</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
                Deals that <span className="text-gradient">delight.</span><br /> Gifts that <span className="text-gradient">surprise.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl glass p-10 min-h-[260px] flex flex-col justify-between"
            >
              <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-radial ${o.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative flex items-center justify-between">
                <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-primary">
                  <o.icon className="h-3.5 w-3.5" /> {o.tag}
                </div>
                <o.icon className="h-12 w-12 text-primary/30 group-hover:text-primary/60 group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="relative">
                <h3 className="font-display text-3xl md:text-4xl font-bold">{o.title}</h3>
                <p className="mt-3 text-muted-foreground">{o.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ticker */}
        <div className="mt-12 overflow-hidden rounded-full border border-primary/20 bg-primary/5 py-5">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="font-display text-lg text-foreground/80">
                {t} <span className="text-primary mx-6">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}