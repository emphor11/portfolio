import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Built for teams, founders, and clients who need someone reliable."
            description="Whether it’s a product feature, a system rebuild, or an AI capability that actually has to work, I can help take it from idea to execution."
          />
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SectionReveal key={service.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-7">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
