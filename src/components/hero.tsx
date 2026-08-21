"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/place/hero.jpg"
          alt="마이미라운지 라운지 내부"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end section-pad pb-16 pt-28 sm:pb-20 lg:justify-center lg:pb-24"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
            }}
            className="mb-5 text-[0.78rem] font-medium tracking-[0.28em] text-ember sm:text-sm"
          >
            SANGSU · HONGDAE · LOUNGE CAFE
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
            }}
            className="font-heading text-[2.85rem] font-semibold leading-[1.05] tracking-[0.02em] text-cream sm:text-6xl lg:text-[4.5rem]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-5 font-heading text-xl font-medium text-cream/95 sm:text-2xl"
          >
            {site.heroImpression}
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="mt-5 max-w-xl whitespace-pre-line text-[0.98rem] leading-relaxed text-cream/78 sm:text-lg"
          >
            {site.intro}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#location"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-sm bg-ember px-7 text-base text-accent-foreground hover:bg-ember/90"
              )}
            >
              <MapPin className="size-4" />
              방문하기
            </a>
            <a
              href={site.phoneTel}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 rounded-sm border-cream/40 bg-transparent px-7 text-base text-cream hover:bg-cream/10 hover:text-cream"
              )}
            >
              <Phone className="size-4" />
              전화하기
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-5 justify-center border border-cream/35"
        >
          <div className="mt-2 h-2 w-px bg-cream/70" />
        </motion.div>
      </div>
    </section>
  );
}
