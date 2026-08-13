import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

import { siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "سعر متر الباركيه 2026 | أسعار الباركيه",
  description:
    "تعرف على سعر متر الباركيه وأسعار الباركيه حسب النوع والماركة وبلد المنشأ والجودة. تواصل مع الجبريل للباركيه لمعرفة الأسعار الحالية في التجمع الخامس والقاهرة الجديدة.",
};

const factors = [
  "نوع الباركيه والخامة",
  "الماركة وبلد المنشأ",
  "سمك الأرضية وجودة التصنيع",
  "مقاومة الخدوش والاستخدام",
  "التصميم واللون",
  "مساحة المكان وتكلفة التركيب",
];

const features = [
  "تشكيلة متنوعة من التصميمات والألوان",
  "خامات مستوردة من عدة دول",
  "خيارات تناسب المنازل والمكاتب",
  "تركيب احترافي للأرضيات",
  "ضمان حسب نوع ومواصفات المنتج",
];

export default function ParquetPricesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-walnut/10 bg-sand-deep/50">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <span className="text-xs font-bold tracking-wide text-brass">
            أسعار الباركيه
          </span>

          <h1 className="font-display mt-3 max-w-4xl text-4xl font-extrabold text-walnut sm:text-5xl">
            سعر متر الباركيه وأسعار الباركيه 2026
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-walnut/70">
            يختلف سعر متر الباركيه حسب نوع الأرضية والماركة وبلد المنشأ
            والسمك والجودة والتصميم. تعرف على أهم العوامل التي تحدد سعر
            المتر وتواصل معنا لمعرفة الأسعار الحالية والأنواع المتوفرة.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="brass">
              <a
                href={siteInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                اسأل عن السعر على واتساب
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

      {/* Price */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          eyebrow="سعر المتر"
          title="كم سعر متر الباركيه؟"
          description="لا يوجد سعر واحد ثابت للباركيه، لأن السعر يختلف حسب مواصفات كل نوع."
        />

        <div className="rounded-xl border border-walnut/10 bg-white/40 p-6 sm:p-8">
          <p className="text-base leading-8 text-walnut/75">
            يعتمد سعر متر الباركيه على عدة عوامل، منها نوع الخامة والماركة
            وبلد المنشأ وسمك الأرضية ومستوى الجودة ومقاومة الخدوش والرطوبة،
            بالإضافة إلى التصميم واللون وتكلفة التركيب.
          </p>

          <p className="mt-4 text-base leading-8 text-walnut/75">
            لذلك عند مقارنة{" "}
            <strong className="text-walnut">
              أسعار الباركيه
            </strong>
            ، من المهم مقارنة نفس المواصفات وليس السعر فقط.
          </p>

          <p className="mt-4 text-base leading-8 text-walnut/75">
            تواصل معنا لمعرفة{" "}
            <strong className="text-walnut">
              سعر المتر الحالي
            </strong>{" "}
            للأنواع والماركات المتوفرة لدينا.
          </p>
        </div>
      </section>

      {/* Factors */}
      <section className="border-y border-walnut/10 bg-sand-deep/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <SectionHeading
            eyebrow="العوامل المؤثرة في السعر"
            title="ما الذي يحدد أسعار الباركيه؟"
            description="تعرف على أهم العوامل التي يجب وضعها في الاعتبار عند اختيار الباركيه."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <div
                key={factor}
                className="flex items-start gap-3 rounded-xl border border-walnut/10 bg-white/50 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass" />

                <span className="text-sm font-semibold leading-relaxed text-walnut/80">
                  {factor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          eyebrow="أنواع الباركيه"
          title="اختيارات متنوعة من الباركيه"
          description="نساعدك في اختيار النوع المناسب حسب طبيعة المكان والميزانية والتصميم المطلوب."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              باركيه HDF
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              خيار عملي بتصميمات وألوان متنوعة، ومناسب للعديد من المساحات
              السكنية والتجارية.
            </p>

            <Link
              href="/hdf-prices"
              className="mt-4 inline-block text-sm font-bold text-brass hover:underline"
            >
              تعرف على أسعار HDF ←
            </Link>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              باركيه SPC
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              يتميز بمقاومة أعلى للمياه والرطوبة، ويمكن أن يكون مناسبًا
              للمساحات التي تحتاج إلى هذه الخاصية.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              الباركيه الخشبي
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-walnut/70">
              خيار لمن يبحث عن المظهر الطبيعي للخشب وإحساسه المميز.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-walnut/10 bg-sand-deep/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <SectionHeading
            eyebrow="لماذا تختار الجبريل؟"
            title="باركيه بخامات وتصميمات متنوعة"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-walnut/10 bg-white/50 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass" />

                <span className="text-sm leading-relaxed text-walnut/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading
          eyebrow="اكتشف المزيد"
          title="أرضيات HDF والباركيه"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/hdf-prices"
            className="group rounded-xl border border-walnut/10 bg-white/40 p-6 transition-colors hover:border-brass/40 hover:bg-white/70"
          >
            <h2 className="font-display text-xl font-extrabold text-walnut">
              أسعار أرضيات HDF
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-walnut/65">
              تعرف على سعر متر أرضيات HDF والعوامل التي تحدد السعر.
            </p>

            <span className="mt-4 inline-block text-sm font-bold text-brass">
              تعرف على أسعار HDF ←
            </span>
          </Link>

          <Link
            href="/guide"
            className="group rounded-xl border border-walnut/10 bg-white/40 p-6 transition-colors hover:border-brass/40 hover:bg-white/70"
          >
            <h2 className="font-display text-xl font-extrabold text-walnut">
              مميزات وعيوب أرضيات HDF
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-walnut/65">
              اقرأ دليل الشراء قبل اختيار أرضيات HDF.
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
              عايز تعرف سعر متر الباركيه؟
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-sand/70">
              تواصل معنا لمعرفة الأسعار الحالية والأنواع المتوفرة، وسنساعدك
              في اختيار الأرضية المناسبة لمساحتك.
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