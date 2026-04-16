import Link from "next/link";
import { personalInfo, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {personalInfo.name} © {new Date().getFullYear()}. Built with Next.js, intent, and a lot
          of care.
        </p>
        <div className="flex gap-5">
          {socialLinks.map((social) => {
            const isEmail = social.href.startsWith("mailto:");
            return (
              <a
                key={social.name}
                href={social.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noreferrer"}
              >
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
