"use client";

import Link from "next/link";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { socialLinks, personalInfo } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      // Add these values in a local `.env.local` file before using the form:
      // NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
      // NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
      // NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          project_type: formData.get("projectType"),
          message: formData.get("message")
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
        }
      );

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="If there’s something worth building, I’m interested."
            description="I’m currently open to internships, freelance projects, and full-time roles. If you have a product, problem, or idea that needs strong execution, let’s talk."
          />
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionReveal>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-7">
                <div>
                  <h3 className="font-heading text-3xl font-semibold">Start the conversation</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    I reply best to clear ideas, messy drafts, ambitious plans, and products that
                    need someone who can actually build.
                  </p>

                  <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                    <p>{personalInfo.location}</p>
                    <a href={`mailto:${personalInfo.email}`} className="block hover:text-primary">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="mt-10 flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    const isEmail = social.href.startsWith("mailto:");
                    return (
                      <Button key={social.name} asChild variant="secondary" size="icon">
                        <a
                          href={social.href}
                          target={isEmail ? undefined : "_blank"}
                          rel={isEmail ? undefined : "noreferrer"}
                          aria-label={social.name}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <Card>
              <CardContent className="p-7">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium">
                      Project Type
                    </label>
                    <Input
                      id="projectType"
                      name="projectType"
                      placeholder="Internship, freelance build, product idea..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me what you're building or what you need help with."
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={status === "loading"}>
                    <Send className="h-4 w-4" />
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>

                  {status === "success" ? (
                    <p className="text-sm text-emerald-400">
                      Message sent successfully. I&apos;ll get back to you soon.
                    </p>
                  ) : null}

                  {status === "error" ? (
                    <p className="text-sm text-red-400">
                      The form couldn&apos;t send right now. Double-check your EmailJS keys in
                      `.env.local`.
                    </p>
                  ) : null}
                </form>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
