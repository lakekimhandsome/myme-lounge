import Image from "next/image";
import { aboutCards, site } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

export function About() {
  return (
    <section id="about" className="section-y section-pad">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <p className="text-[0.78rem] font-medium tracking-[0.24em] text-ember">
            ABOUT
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            머무르고 싶은 라운지
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            {site.nameKo}는 마이미 호텔 감성을 담은 카페·디저트 라운지입니다.
            원목의 온기와 부드러운 조명 아래, 시그니처 한 잔으로 하루의 결을
            바꿉니다.
          </p>
        </FadeUp>

        <Stagger className="mt-12 grid gap-8 md:grid-cols-3 md:gap-7">
          {aboutCards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col border border-t-0 border-border bg-card px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {card.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
