import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import img1 from "@/assets/gallery/storefront.png";
import img2 from "@/assets/gallery/store-interior.png";
import img3 from "@/assets/gallery/owner-store.png";
import img4 from "@/assets/gallery/owner-badge.png";

const items = [
  { src: img1, label: "Storefront", cls: "md:row-span-2 aspect-[3/4]" },
  { src: img2, label: "Inside Our Store", cls: "aspect-[4/3]" },
  { src: img3, label: "With Our Customers", cls: "aspect-[4/3]" },
  { src: img4, label: "Rinku Birsanta — Owner", cls: "md:col-span-2 aspect-[16/8]" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Store Gallery</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              A glimpse <span className="text-gradient">inside</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(it.src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl glass-strong ${it.cls}`}
            >
              <img src={it.src} alt={it.label} className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-primary">View</div>
                  <div className="font-display text-lg font-semibold mt-1">{it.label}</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-brand-gradient flex items-center justify-center text-background opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">+</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={active} alt="Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-luxury"
            />
            <button className="absolute top-6 right-6 h-12 w-12 rounded-full glass flex items-center justify-center">
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}