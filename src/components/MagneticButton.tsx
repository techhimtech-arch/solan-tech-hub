import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
}

export function MagneticButton({ children, className = "", onClick, href, variant = "primary" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const reset = () => { x.set(0); y.set(0); };

  const base = "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium tracking-wide text-sm uppercase transition-colors overflow-hidden group cursor-pointer";
  const styles = {
    primary: "bg-brand-gradient text-background glow-neon",
    ghost: "glass text-foreground hover:bg-white/10",
    outline: "border border-primary/40 text-primary hover:bg-primary/10",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-white/10" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-block">
        {inner}
      </a>
    );
  }
  return inner;
}