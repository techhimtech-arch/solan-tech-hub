import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-mesh opacity-60" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <div className="font-display text-5xl md:text-7xl font-bold text-gradient tracking-tight">UNIQUE</div>
            <div className="mt-2 text-[10px] tracking-[0.5em] text-muted-foreground">COMMUNICATION</div>
            <div className="mt-8 mx-auto h-px w-40 bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full w-full bg-brand-gradient"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}