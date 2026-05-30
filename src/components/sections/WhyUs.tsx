import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, BadgePercent, Users, Zap, Award, Layers, Gift, Star } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Genuine Products", desc: "100% authentic devices with manufacturer warranty." },
  { icon: BadgePercent, title: "Best Prices", desc: "Competitive pricing across every brand we carry." },
  { icon: Users, title: "Experienced Team", desc: "A decade of mobile expertise at your service." },
  { icon: Zap, title: "Quick Service", desc: "Same-day repairs & instant store assistance." },
  { icon: Award, title: "Trusted Reputation", desc: "Solan's most-loved mobile destination." },
  { icon: Layers, title: "Latest Models", desc: "All new launches available, day one." },
  { icon: Gift, title: "Gift With Every Purchase", desc: "Premium gifts. Guaranteed. Always." },
  { icon: Star, title: "Excellent Reviews", desc: "Loved by thousands of happy customers." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Built on trust. <span className="text-gradient">Powered by passion.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-10 md:space-y-16">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`glass rounded-3xl p-8 md:p-10 relative ${i % 2 === 0 ? "" : "[direction:ltr]"}`}>
                  <div className="absolute -top-3 left-8 md:left-auto md:right-auto md:-right-3 md:left-auto h-6 w-6 rounded-full bg-brand-gradient glow-neon" />
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl glass border border-primary/30 shrink-0">
                      <it.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{it.title}</h3>
                      <p className="mt-2 text-muted-foreground">{it.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}