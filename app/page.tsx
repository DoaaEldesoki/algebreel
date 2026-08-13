import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Hammer, Award } from "lucide-react";
import {
  brands,
  heroImage,
  homeProjects,
  siteInfo,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { PlankReveal } from "@/components/plank-reveal";
import { LightboxGallery } from "@/components/lightbox-gallery";

const stats = [
  { icon: Hammer, label: "أكثر من 10 سنوات خبرة" },
  { icon: ShieldCheck, label: "ضمان يمتد 10 سنوات" },
  { icon: Award, label: "خامات تركية وألمانية وبولندية" },
];

function randomGalleryItems() {
  const items = brands.flatMap((brand) =>
    brand.images.map((src, index) => ({
      src,
      label: `${brand.name} — ${index + 1}`,
    }))
  );

  for (let i = items.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [items[i], items[randomIndex]] = [items[randomIndex], items[i]];
  }

  return items.slice(0, 12);
}

export default function Home() {
  const galleryItems = randomGalleryItems();
  return (
    <>
      <section className="relative overflow-hidden bg-walnut text-sand">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/85 to-walnut/40" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-24 sm:py-32">
          <span className="w-fit rounded-full border border-brass-bright/40 px-4 py-1.5 text-xs font-bold text-brass-bright">
            التجمع الخامس — ميجا مول التسعين الجنوبي
          </span>
          <h1 className="font-display max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            أرضيات باركيه HDF و SPC
            <span className="block text-brass-bright">تُركّب لتدوم.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-sand/80">
            {siteInfo.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="brass">
              <a href={siteInfo.phoneHref}>
                <Phone className="h-5 w-5" />
                اتصل بنا الآن
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sand/30 text-sand hover:bg-sand/10"
            >
              <a href={siteInfo.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                تواصل واتساب
              </a>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-sand/10 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-brass-bright" />
                <span className="text-sm font-semibold text-sand/85">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plank-seam mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="الماركات المعتمدة"
          title="اختر الخامة المناسبة لمساحتك"
          description="نوفر خمس ماركات عالمية، لكل منها صفحة مستقلة بعيّناتها وألوانها الكاملة."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, i) => (
            <PlankReveal key={brand.slug} from={i % 2 === 0 ? "start" : "end"} delay={i * 0.06}>
              <Link
                href={`/products/${brand.slug}`}
                className="group flex h-full flex-col justify-between rounded-xl border border-walnut/10 bg-white/40 p-6 transition-colors hover:border-brass/40 hover:bg-white/70"
              >
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-walnut">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-sm text-walnut/60">{brand.origin}</p>
                  <p className="mt-3 text-sm leading-relaxed text-walnut/70">
                    {brand.tagline}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brass">
                  عرض العينات
                  <span className="transition-transform group-hover:-translate-x-1">←</span>
                </span>
              </Link>
            </PlankReveal>
          ))}
        </div>
      </section>

      <section className="plank-seam bg-sand-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="مكتبة العينات"
            title="تشكيلة من الألوان والخامات"
            description="نماذج من عيّنات الباركيه المتوفرة لدينا — اضغط على أي عيّنة لتكبيرها."
          />
          <LightboxGallery
            galleryId="home-swatches"
            layout="grid"
            items={galleryItems.map((item) => ({
              src: item.src,
              label: item.label,
            }))}
          />
        </div>
      </section>

      <section className="plank-seam mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="من أعمالنا"
          title="جزء من أعمالنا لدى العملاء"
          description="لمحات من مشاريع تركيب فعلية قمنا بتنفيذها."
        />
        <LightboxGallery
          galleryId="home-projects"
          layout="masonry"
          items={homeProjects.map((src, i) => ({
            src,
            label: `تركيب لدى عميل ${i + 1}`,
          }))}
        />
      </section>

      <section className="plank-seam bg-walnut text-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              جاهزون لتركيب أرضيتك الجديدة؟
            </h2>
            <p className="mt-2 text-sand/70">
              {siteInfo.hours} — {siteInfo.address}
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" variant="brass">
              <a href={siteInfo.phoneHref}>
                <Phone className="h-5 w-5" />
                {siteInfo.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
