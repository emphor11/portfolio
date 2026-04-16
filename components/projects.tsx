"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Real products, built with range."
            description="These projects show how I think about product quality, backend structure, AI workflow design, and interfaces people actually want to use."
          />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mb-8 flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  activeFilter === filter
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                )}
              >
                {filter === "AI" ? "Web + AI" : filter}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.06}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <Card className="group h-full overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className={cn(
                        "object-cover transition duration-500 group-hover:scale-105",
                        project.imageClassName
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
                    <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm leading-6 text-white/85">{project.learnings}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="font-heading text-2xl font-semibold">{project.name}</h3>
                      <Badge variant={project.category === "AI" ? "default" : "accent"}>
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.impact}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button asChild variant="secondary" className="flex-1">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      <Button asChild className="flex-1">
                        <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
