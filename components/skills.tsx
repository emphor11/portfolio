import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillGroups, toolsAndPlatforms } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Skills"
            title="Strong web fundamentals, sharpened by AI product work."
            description="I work across frontend, backend, and applied AI, with a bias toward tools that can ship fast and scale cleanly."
          />
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <SectionReveal key={group.title} delay={groupIndex * 0.08}>
              <Card className="h-full">
                <CardContent className="p-7">
                  <div className="mb-8">
                    <h3 className="font-heading text-2xl font-semibold">{group.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="rounded-3xl border border-border/70 bg-secondary/40 p-4"
                        >
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-medium">{skill.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.12}>
          <Card className="mt-6">
            <CardContent className="flex flex-col gap-4 p-7 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-heading text-2xl font-semibold">Tools & Platforms</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Shipping infrastructure and deployment tools I use regularly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolsAndPlatforms.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-4 py-2 text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}
