import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";

import { brands, siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { LightboxGallery } from "@/components/lightbox-gallery";

type Props = {
  params: Promise<{ brand: string }>;
};

const originMap: Record<string, string> = {
  egger: "الألماني",
  agt: "التركي",
  floorpan: "البولندي",
  camsan: "التركي",
};

export function generateStaticParams() {
  return brands.map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { brand: slug } = await params;

  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return {};
  }

  const isSpc = brand.slug === "spc";

  const productType = isSpc ? "SPC" : "HDF";

  const originLabel =
    originMap[brand.slug] ?? brand.origin;

  return {
    title: `أرضيات ${productType} ${brand.name} ${originLabel} | الألوان والأسعار`,

    description:
      `تعرف على أرضيات ${productType} ${brand.name} ${originLabel}، ` +
      `الألوان والتصميمات والعينات المتوفرة لدى شركة ال جبريل للباركيه ` +
      `في التجمع الخامس. تواصل معنا لمعرفة الأسعار الحالية.`,

    keywords: [
      `أرضيات ${productType} ${brand.name}`,
      `باركيه ${brand.name}`,
      `${productType} ${brand.name}`,
      `سعر ${productType} ${brand.name}`,
      `ألوان ${productType} ${brand.name}`,
      `أرضيات ${productType} ${originLabel}`,
    ],
  };
}

export default async function BrandPage({
  params,
}: Props) {
  const { brand: slug } = await params;

  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const isSpc = brand.slug === "spc";

  const productType = isSpc ? "SPC" : "HDF";

  const originLabel =
    originMap[brand.slug] ?? brand.origin;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-walnut/10 bg-sand-deep/50">
        <div className="mx-auto max-w-6xl px-5 py-16">

          <span className="text-xs font-bold tracking-wide text-brass">
            {brand.origin}
          </span>

          <h1 className="font-display mt-3 text-4xl font-extrabold text-walnut sm:text-5xl">
            أرضيات {productType} {brand.name} {originLabel}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-walnut/70">
            {brand.tagline}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-walnut/60">
            تعرف على ألوان وعينات أرضيات {productType} {brand.name}
            المتوفرة لدينا، وتواصل معنا لمعرفة السعر الحالي والتفاصيل.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Button asChild size="lg" variant="primary">
              <a href={siteInfo.phoneHref}>
                <Phone className="h-5 w-5" />
                استفسر عن السعر
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a
                href={siteInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                واتساب
              </a>
            </Button>

          </div>
        </div>
      </section>

      {/* Samples */}
      <section className="mx-auto max-w-6xl px-5 py-16">

        <SectionHeading
          eyebrow={`ألوان ${productType} ${brand.name}`}
          title={`ألوان وعينات ${productType} ${brand.name}`}
          description="شاهد مجموعة من العينات والألوان المتوفرة لدينا."
        />

        <LightboxGallery
          galleryId={`brand-${brand.slug}`}
          layout="grid"
          items={brand.images.map((src, i) => ({
            src,
            label: `${productType} ${brand.name} - عينة ${i + 1}`,
          }))}
        />

      </section>

      {/* Product Information */}
      <section className="border-y border-walnut/10 bg-sand-deep/40">

        <div className="mx-auto max-w-5xl px-5 py-16">

          <SectionHeading
            eyebrow="عن المنتج"
            title={`أرضيات ${productType} ${brand.name}`}
            description={brand.tagline}
          />

          <div className="rounded-xl border border-walnut/10 bg-white/50 p-6 sm:p-8">

            <p className="text-base leading-8 text-walnut/75">
              توفر شركة ال جبريل للباركيه أرضيات{" "}
              <strong className="text-walnut">
                {productType} {brand.name}
              </strong>{" "}
              من المنشأ {originLabel}.
            </p>

            <p className="mt-4 text-base leading-8 text-walnut/75">
              نوفر مجموعة من التصميمات والألوان المختلفة، ويمكنك مشاهدة
              العينات المتوفرة على الصفحة واختيار التصميم المناسب لمساحتك.
            </p>

            <p className="mt-4 text-base leading-8 text-walnut/75">
              يختلف سعر الأرضيات حسب الموديل والمواصفات والمساحة المطلوبة.
              تواصل معنا لمعرفة السعر الحالي والعروض المتاحة.
            </p>

          </div>
        </div>

      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-5xl px-5 py-16">

        <SectionHeading
          eyebrow="لماذا تختارنا؟"
          title={`اختيار أرضيات ${productType} المناسبة`}
        />

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              تشكيلة متنوعة
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              مجموعة متنوعة من الألوان والتصميمات لتناسب أنماط الديكور
              المختلفة.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              خامات مستوردة
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              نوفر خامات مستوردة من تركيا وألمانيا وبولندا حسب نوع المنتج.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              تركيب احترافي
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              خبرة أكثر من 10 سنوات في تركيب الأرضيات وتنفيذ المشاريع.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              استشارة قبل الشراء
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              نساعدك في اختيار النوع واللون المناسب حسب مساحة المكان
              والاستخدام والميزانية.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-walnut text-sand">

        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              عايز تعرف سعر {productType} {brand.name}؟
            </h2>

            <p className="mt-2 text-sand/70">
              تواصل معنا لمعرفة السعر الحالي والألوان المتوفرة.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Button asChild size="lg" variant="brass">
              <a
                href={siteInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                واتساب
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sand/30 text-sand hover:bg-sand/10"
            >
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