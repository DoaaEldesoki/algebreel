import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { brands, siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { LightboxGallery } from "@/components/lightbox-gallery";

export const metadata: Metadata = {
  title: "ألوان أرضيات HDF | كتالوج ألوان الباركيه",
  description:
    "شاهد مجموعة من ألوان وتصميمات أرضيات HDF والباركيه المتوفرة لدى الجبريل للباركيه. اختر اللون المناسب لمنزلك من مجموعة متنوعة من الماركات التركية والألمانية والبولندية.",
};

const hdfBrands = brands.filter((brand) => brand.slug !== "spc");

export default function HdfColorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-walnut/10 bg-sand-deep/50">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <span className="text-xs font-bold tracking-wide text-brass">
            كتالوج ألوان HDF
          </span>

          <h1 className="font-display mt-3 max-w-4xl text-4xl font-extrabold text-walnut sm:text-5xl">
            ألوان أرضيات HDF والباركيه
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-walnut/70">
            اكتشف مجموعة متنوعة من ألوان وتصميمات أرضيات HDF والباركيه
            المتوفرة لدينا. اختر اللون والتصميم المناسب لديكور منزلك أو
            مكتبك، وتواصل معنا لمعرفة الأنواع والأسعار المتاحة.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="brass">
              <a
                href={siteInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                اسأل عن الألوان المتوفرة
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href={siteInfo.phoneHref}>
                <Phone className="h-5 w-5" />
                اتصل بنا
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand sections */}
      {hdfBrands.map((brand) => (
        <section
          key={brand.slug}
          className="mx-auto max-w-6xl px-5 py-16"
        >
          <SectionHeading
            eyebrow={`${brand.origin} — ${brand.name}`}
            title={`ألوان أرضيات HDF ${brand.name}`}
            description={brand.tagline}
          />

          <LightboxGallery
            galleryId={`hdf-colors-${brand.slug}`}
            layout="grid"
            items={brand.images.map((src, i) => ({
              src,
              label: `أرضيات HDF ${brand.name} — عينة ${i + 1}`,
            }))}
          />

          <div className="mt-6 text-center">
            <Link
              href={`/products/${brand.slug}`}
              className="text-sm font-bold text-brass hover:underline"
            >
              شاهد كل تفاصيل ماركة {brand.name} ←
            </Link>
          </div>
        </section>
      ))}

      {/* Choosing color */}
      <section className="border-y border-walnut/10 bg-sand-deep/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <SectionHeading
            eyebrow="اختيار اللون"
            title="كيف تختار لون أرضيات HDF المناسب؟"
            description="اختيار اللون المناسب يساعد على إبراز مساحة المكان وتناسقها مع باقي عناصر الديكور."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-walnut/10 bg-white/50 p-6">
              <h2 className="font-display text-xl font-extrabold text-walnut">
                الألوان الفاتحة
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-walnut/70">
                يمكن أن تساعد الألوان الفاتحة في إعطاء إحساس بمساحة أكبر
                وإضاءة أفضل، خصوصًا في الغرف الصغيرة.
              </p>
            </div>

            <div className="rounded-xl border border-walnut/10 bg-white/50 p-6">
              <h2 className="font-display text-xl font-extrabold text-walnut">
                الألوان الداكنة
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-walnut/70">
                تمنح الألوان الداكنة إحساسًا بالفخامة والدفء ويمكن تنسيقها
                مع مجموعة متنوعة من أنماط الديكور.
              </p>
            </div>

            <div className="rounded-xl border border-walnut/10 bg-white/50 p-6">
              <h2 className="font-display text-xl font-extrabold text-walnut">
                ألوان الخشب الطبيعي
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-walnut/70">
                درجات الخشب الطبيعية من الخيارات الشائعة لأنها تتناسب مع
                العديد من ألوان الأثاث والحوائط.
              </p>
            </div>

            <div className="rounded-xl border border-walnut/10 bg-white/50 p-6">
              <h2 className="font-display text-xl font-extrabold text-walnut">
                اختيار اللون حسب الديكور
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-walnut/70">
                من الأفضل اختيار لون الأرضية بعد النظر إلى لون الحوائط
                والأبواب والأثاث والإضاءة الموجودة في المكان.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          eyebrow="اكتشف المزيد"
          title="أرضيات HDF والأسعار"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/hdf-prices"
            className="rounded-xl border border-walnut/10 bg-white/40 p-6 transition-colors hover:border-brass/40 hover:bg-white/70"
          >
            <h2 className="font-display text-xl font-extrabold text-walnut">
              أسعار أرضيات HDF
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-walnut/65">
              تعرف على سعر متر أرضيات HDF والعوامل التي تؤثر على السعر.
            </p>

            <span className="mt-4 inline-block text-sm font-bold text-brass">
              تعرف على الأسعار ←
            </span>
          </Link>

          <Link
            href="/guide"
            className="rounded-xl border border-walnut/10 bg-white/40 p-6 transition-colors hover:border-brass/40 hover:bg-white/70"
          >
            <h2 className="font-display text-xl font-extrabold text-walnut">
              مميزات وعيوب أرضيات HDF
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-walnut/65">
              اقرأ دليل الشراء قبل اختيار نوع الأرضية.
            </p>

            <span className="mt-4 inline-block text-sm font-bold text-brass">
              اقرأ الدليل ←
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-walnut text-sand">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              عايز تشوف الألوان على الطبيعة؟
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-sand/70">
              تواصل معنا لمعرفة العينات المتوفرة والأسعار واختيار اللون
              المناسب لمساحتك.
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