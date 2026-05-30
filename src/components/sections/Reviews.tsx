import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  { name: "Aman Sharma", role: "Solan", text: "Best mobile shop in Solan! Got my iPhone at the best price with a free gift. Rinku ji is very helpful." },
  { name: "Priya Thakur", role: "Bajoral", text: "Genuine products and amazing customer service. I always recommend Unique Communication to my friends." },
  { name: "Rahul Verma", role: "Kandaghat", text: "Fast screen replacement, same-day delivery. Trustworthy team and reasonable pricing." },
  { name: "Neha Gupta", role: "Solan", text: "Bought a Samsung Galaxy here. Wonderful experience and they helped me set up everything." },
  { name: "Vikas Negi", role: "Subathu", text: "Top notch service. Latest models always in stock. Loved the gift I received with my OnePlus." },
  { name: "Ananya Rana", role: "Solan", text: "Premium store experience right in our town. The team really cares about customers." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Customer Reviews</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Loved by <span className="text-gradient">thousands</span>.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* infinite marquee rows */}
      <div className="relative space-y-6 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <Row reviews={reviews} duration={50} />
        <Row reviews={[...reviews].reverse()} duration={60} reverse />
      </div>
    </section>
  );
}

function Row({ reviews, duration, reverse }: { reviews: typeof reviews; duration: number; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 w-max"
      >
        {[...reviews, ...reviews].map((r, i) => (
          <article key={i} className="glass-strong rounded-3xl p-8 w-[360px] sm:w-[420px] shrink-0 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed text-[15px]">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/5">
              <div className="h-10 w-10 rounded-full bg-brand-gradient flex items-center justify-center text-background font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}