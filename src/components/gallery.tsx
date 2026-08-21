"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const open = index !== null;
  const current = index !== null ? galleryImages[index] : null;

  const showPrev = () => {
    if (index === null) return;
    setIndex((index - 1 + galleryImages.length) % galleryImages.length);
  };
  const showNext = () => {
    if (index === null) return;
    setIndex((index + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-y section-pad">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <p className="text-[0.78rem] font-medium tracking-[0.24em] text-ember">
            GALLERY
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            라운지 갤러리
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            사진을 누르면 크게 볼 수 있습니다.
          </p>
        </FadeUp>

        <Stagger className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => (
            <StaggerItem key={image.src} className="mb-3 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "group relative block w-full overflow-hidden border border-border bg-card text-left",
                  image.span === "tall" && "min-h-[22rem]",
                  image.span === "wide" && "min-h-[14rem]",
                  image.span === "normal" && "min-h-[16rem]"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={image.span === "tall" ? 1200 : 700}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {open && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="사진 확대 보기"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="닫기"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-sm border border-cream/25 bg-cream/10 text-cream hover:bg-cream/20"
            onClick={() => setIndex(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="이전 사진"
            className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-sm border border-cream/25 bg-cream/10 text-cream hover:bg-cream/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="다음 사진"
            className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-sm border border-cream/25 bg-cream/10 text-cream hover:bg-cream/20 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight className="size-5" />
          </button>
          <div
            className="relative max-h-[85svh] w-full max-w-4xl overflow-hidden border border-cream/15"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1400}
              height={1050}
              className="max-h-[85svh] w-full object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
