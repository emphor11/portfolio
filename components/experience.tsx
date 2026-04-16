import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { experienceItems } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Learning fast, shipping faster."
            description="My timeline is less about titles and more about proof: building, competing, and growing through work that has real stakes."
          />
        </SectionReveal>

        <div className="relative ml-3 border-l border-border/70 pl-8 md:ml-6">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={`${item.title}-${item.period}`} delay={index * 0.08}>
                <div className="relative pb-8 last:pb-0">
                  <div className="absolute -left-[2.65rem] top-6 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="font-heading text-2xl font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm uppercase tracking-[0.22em] text-primary">
                            {item.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
