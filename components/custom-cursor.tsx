"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 28, stiffness: 260, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 260, mass: 0.4 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 14);
      cursorY.set(event.clientY - 14);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      mediaQuery.removeEventListener("change", update);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-7 w-7 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    />
  );
}
