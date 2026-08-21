import { ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-wood/30 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 section-pad py-12 sm:flex-row sm:items-end sm:justify-between sm:py-14">
        <div>
          <p className="font-heading text-2xl font-semibold tracking-[0.04em]">
            {site.name}
          </p>
          <p className="mt-2 text-sm tracking-wide text-cream/70">{site.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/58">
            {site.address}
            <br />
            {site.phone}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-cream/30 pb-0.5 text-sm text-cream/80 transition-colors hover:border-cream hover:text-cream"
          >
            <InstagramIcon className="size-3.5" />
            {site.instagramHandle}
          </a>
          <a
            href={site.naverPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-cream/30 pb-0.5 text-sm text-cream/80 transition-colors hover:border-cream hover:text-cream"
          >
            네이버 플레이스
            <ExternalLink className="size-3.5" />
          </a>
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {site.nameKo}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
