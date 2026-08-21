import Image from "next/image";
import {
  Clock,
  MapPinned,
  Navigation,
  ParkingCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { site } from "@/lib/site";
import { FadeUp } from "@/components/motion";
import { InstagramIcon } from "@/components/instagram-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Location() {
  return (
    <section id="location" className="section-y section-pad">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <p className="text-[0.78rem] font-medium tracking-[0.24em] text-ember">
            LOCATION
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            오시는 길
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            {site.roadGuide}
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeUp className="overflow-hidden border border-border bg-card">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
              <Image
                src="/images/place/hero.jpg"
                alt="마이미라운지 내부"
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="object-cover"
                loading="lazy"
              />
              <iframe
                title="마이미라운지 네이버지도"
                src={site.mapEmbedUrl}
                className="absolute inset-0 z-10 h-full w-full border-0 bg-card"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={site.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-sm bg-ink/85 px-3.5 py-2 text-xs font-medium text-cream transition hover:bg-ink"
              >
                <MapPinned className="size-3.5" />
                지도 크게 보기
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="border border-border bg-card p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-ink">
              {site.fullName}
            </h3>
            <ul className="mt-6 space-y-5 text-[0.95rem] text-ink-soft">
              <li className="flex gap-3 border-b border-border/70 pb-5">
                <MapPinned className="mt-0.5 size-5 shrink-0 text-ember" />
                <div>
                  <p className="font-medium text-ink">주소</p>
                  <p className="mt-1 leading-relaxed">{site.address}</p>
                  <p className="mt-1 text-sm text-ink-soft/75">{site.addressJibun}</p>
                </div>
              </li>
              <li className="flex gap-3 border-b border-border/70 pb-5">
                <Clock className="mt-0.5 size-5 shrink-0 text-ember" />
                <div>
                  <p className="font-medium text-ink">영업시간</p>
                  <p className="mt-1">{site.hours}</p>
                  <p className="mt-1 text-sm text-wood">{site.closed}</p>
                </div>
              </li>
              <li className="flex gap-3 border-b border-border/70 pb-5">
                <Phone className="mt-0.5 size-5 shrink-0 text-ember" />
                <div>
                  <p className="font-medium text-ink">전화번호</p>
                  <a href={site.phoneTel} className="mt-1 inline-block hover:text-ember">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 border-b border-border/70 pb-5">
                <ParkingCircle className="mt-0.5 size-5 shrink-0 text-ember" />
                <div>
                  <p className="font-medium text-ink">주차</p>
                  <p className="mt-1 whitespace-pre-line">{site.parking}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-ember" />
                <div>
                  <p className="font-medium text-ink">이용 안내</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {site.conveniences.map((item) => (
                      <span
                        key={item}
                        className="border border-border bg-cream/80 px-2.5 py-1 text-xs tracking-wide text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 grid gap-2">
              <a
                href={site.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "h-11 w-full rounded-sm bg-primary text-primary-foreground"
                )}
              >
                <MapPinned className="size-4" />
                네이버지도 열기
              </a>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 w-full rounded-sm border-border bg-background"
                )}
              >
                <Navigation className="size-4" />
                길찾기
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 w-full rounded-sm border-border bg-background"
                )}
              >
                <InstagramIcon className="size-4" />
                {site.instagramHandle}
              </a>
              <a
                href={site.phoneTel}
                className={cn(
                  buttonVariants(),
                  "h-11 w-full rounded-sm bg-ember text-accent-foreground hover:bg-ember/90"
                )}
              >
                <Phone className="size-4" />
                전화하기
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
