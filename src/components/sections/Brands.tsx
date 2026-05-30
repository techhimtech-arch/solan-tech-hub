import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const brands = ["Apple", "Samsung", "OnePlus", "Vivo", "Oppo", "Realme", "Xiaomi", "Nothing", "Motorola"];

export function Brands() {
  return (
    <section id="brands" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Featured Brands</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              World-class <span className="text-gradient">smartphones</span><br />under one roof.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-8 sm:p-10 flex items-center justify-center overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/40 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ mask: "linear-gradient(#000,#000) content-box,linear-gradient(#000,#000)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1px" }} />
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-500 group-hover:text-gradient group-hover:scale-110">
                {b}
              </span>
            </motion.div>
          ))}
        </div>

        {/* marquee */}
        <div className="mt-16 overflow-hidden glass rounded-full py-4">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/60">
                {b} <span className="text-primary mx-6">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}