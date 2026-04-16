"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6",
            scrolled
              ? "border-border bg-background/75 shadow-glow backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="#top" className="font-heading text-lg font-bold tracking-[0.18em]">
            DY
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button asChild>
              <a href={`mailto:${personalInfo.email}`}>Let&apos;s Talk</a>
            </Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              aria-label="Open menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              className="panel mt-4 overflow-hidden border border-border/80 p-4 shadow-glow md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-secondary/70 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2">
                  <a href={`mailto:${personalInfo.email}`} onClick={() => setOpen(false)}>
                    Let&apos;s Talk
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
