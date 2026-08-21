"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "#about", label: "소개" },
  { href: "#menu", label: "메뉴" },
  { href: "#gallery", label: "갤러리" },
  { href: "#location", label: "위치" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "glass-soft shadow-[0_1px_0_rgba(28,22,18,0.06)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between section-pad lg:h-[4.25rem]">
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span
            className={cn(
              "font-heading text-lg font-semibold tracking-[0.04em] sm:text-xl",
              solid ? "text-ink" : "text-cream"
            )}
          >
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                solid
                  ? "text-ink-soft hover:text-ink"
                  : "text-cream/80 hover:text-cream"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneTel}
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-9 rounded-sm bg-primary px-3.5 text-primary-foreground"
            )}
          >
            <Phone className="size-3.5" />
            전화하기
          </a>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-sm border md:hidden",
            solid
              ? "border-border bg-card text-ink"
              : "border-cream/35 bg-ink/35 text-cream"
          )}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-card px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-base text-ink-soft hover:bg-secondary hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneTel}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="size-4" />
              전화하기
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
