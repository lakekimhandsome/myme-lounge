import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Menu } from "@/components/menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Location />
      </main>
      <SiteFooter />
    </>
  );
}
