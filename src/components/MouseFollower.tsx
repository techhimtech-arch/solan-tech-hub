import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[99] h-8 w-8 rounded-full mix-blend-difference"
    >
      <div className="h-full w-full rounded-full bg-white/80" />
    </motion.div>
  );
}