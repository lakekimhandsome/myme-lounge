import Image from "next/image";
import { menus, site } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

export function Menu() {
  return (
    <section id="menu" className="section-y section-pad bg-cream-deep/50">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl border-b border-border/80 pb-8">
          <p className="text-[0.78rem] font-medium tracking-[0.24em] text-ember">
            MENU
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            시그니처 메뉴
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            마이미라운지의 포근한 메뉴입니다. {site.microReview}
          </p>
        </FadeUp>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group flex h-full flex-col border border-border bg-card">
                <div className="relative aspect-[5/4] overflow-hidden border-b border-border bg-cream">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-0 top-0 bg-ink/90 px-3 py-1.5 text-xs font-medium tracking-wide text-cream">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
                  <div className="flex items-start justify-between gap-3 border-b border-dashed border-border pb-3">
                    <h3 className="font-heading text-lg font-semibold leading-snug text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-sm font-semibold text-wood">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {item.description}
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
