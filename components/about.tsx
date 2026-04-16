import Image from "next/image";
import { aboutHighlights, highlightStats, quickFacts } from "@/data/experience";
import { personalInfo } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="About"
            title="Built around execution, not just experimentation."
            description="I care about making difficult products real, with sharp engineering, thoughtful UX, and systems that hold up outside demos."
          />
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal>
            <Card className="overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/15 via-transparent to-primary/10" />
                <Image
                  src="/images/profile-daksh.png"
                  alt="Daksh Yadav portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Card>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-7">
                  <p className="text-lg leading-8 text-muted-foreground">{personalInfo.about}</p>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlightStats.map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="p-6">
                      <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-3 font-heading text-3xl font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                <Card>
                  <CardContent className="space-y-4 p-6">
                    {aboutHighlights.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <p className="leading-7">{item}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="grid gap-4">
                  {quickFacts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <Card key={fact.title}>
                        <CardContent className="flex gap-4 p-6">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{fact.title}</p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {fact.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
