import { motion } from "framer-motion";
import { Instagram as IG, Heart, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import img1 from "@/assets/gallery/storefront.png";
import img2 from "@/assets/gallery/store-interior.png";
import img3 from "@/assets/gallery/owner-store.png";
import img4 from "@/assets/gallery/owner-badge.png";

const posts = [
  { img: img1, likes: 482, comments: 36, caption: "Welcome to Unique Communication ✨" },
  { img: img2, likes: 612, comments: 48, caption: "OPPO flagship arrivals 🔥" },
  { img: img3, likes: 358, comments: 22, caption: "Happy faces, happy us ❤️" },
  { img: img4, likes: 921, comments: 74, caption: "Meet our founder, Rinku Birsanta 👑" },
];

export function InstagramSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">@unique_communicationss</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Follow the <span className="text-gradient">journey</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="https://www.instagram.com/unique_communicationss/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full hover:border-primary/40 transition-colors">
              <IG className="h-4 w-4 text-primary" /> Follow on Instagram
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/unique_communicationss/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl glass-strong"
            >
              <img src={p.img} alt={p.caption} className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
                <IG className="h-7 w-7 text-primary mb-3" />
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="flex items-center gap-1"><Heart className="h-4 w-4" /> {p.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4" /> {p.comments}</span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground line-clamp-2">{p.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}