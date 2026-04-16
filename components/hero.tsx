"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/site";
import { rotatingTaglines } from "@/data/skills";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-grid absolute inset-0 bg-hero-grid opacity-40" />
      <div className="noise-overlay absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute left-[12%] top-28 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-20 right-[10%] h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <Badge className="gap-2 rounded-full px-4 py-1.5 text-sm text-emerald-400">
                <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />
                Open to Work
              </Badge>
              <Badge variant="secondary" className="gap-2 rounded-full px-4 py-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.location}
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-3 text-sm uppercase tracking-[0.35em] text-primary"
            >
              {personalInfo.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14 }}
              className="font-heading text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl"
            >
              Daksh Yadav
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-6 flex h-16 items-center overflow-hidden"
            >
              <div className="relative h-14 overflow-hidden">
                <motion.div
                  animate={{ y: ["0%", "-33.3333%", "-66.6666%", "0%"] }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                  className="space-y-4"
                >
                  {rotatingTaglines.map((tagline) => (
                    <p
                      key={tagline}
                      className="h-10 text-2xl font-medium text-muted-foreground sm:text-3xl"
                    >
                      {tagline}
                    </p>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
            >
              {personalInfo.heroIntro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  Let&apos;s Talk
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="panel hairline relative overflow-hidden rounded-[32px] p-6 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber-400/10" />
              <div className="relative rounded-[24px] border border-white/10 bg-black/40 p-6 dark:bg-white/5">
                <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span>Current Focus</span>
                  <span>2026</span>
                </div>
                <div className="space-y-5">
                  {[
                    "Full-stack product development",
                    "AI integration for real workflows",
                    "Shipping fast with strong UX"
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 dark:bg-white/[0.03]"
                    >
                      <p className="text-sm text-foreground">{item}</p>
                      <span className="font-heading text-xl text-primary">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
