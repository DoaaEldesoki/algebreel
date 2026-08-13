import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";

import { siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "أسعار أرضيات HDF | سعر متر الباركيه HDF في مصر",
  description:
    "تعرف على أسعار أرضيات HDF وسعر متر الباركيه HDF والعوامل التي تحدد السعر. تواصل مع الجبريل للباركيه في التجمع الخامس لمعرفة الأسعار الحالية والعروض المتاحة.",
};

const faqs = [
  {
    question: "كم سعر متر أرضيات HDF؟",
    answer:
      "يختلف سعر متر أرضيات HDF حسب الماركة، بلد المنشأ، الموديل، درجة الجودة والمواصفات. تواصل معنا لمعرفة السعر الحالي للأنواع المتوفرة.",
  },
  {
    question: "كم سعر متر الباركيه HDF؟",
    answer:
      "سعر متر الباركيه HDF يختلف من نوع لآخر حسب الماركة والموديل والمنشأ. لدينا أنواع مستوردة من تركيا وألمانيا وبولندا، ويمكنك التواصل معنا لمعرفة السعر الحالي.",
  },
  {
    question: "ما الذي يحدد سعر أرضيات HDF؟",
    answer:
      "يتحدد السعر بناءً على الماركة، بلد المنشأ، جودة الخامة، درجة مقاومة الاستخدام، التصميم والموديل، بالإضافة إلى مساحة المكان وتكلفة التركيب.",
  },
  {
    question: "هل سعر الباركيه يشمل التركيب؟",
    answer:
      "يختلف ذلك حسب نوع الأرضية ومساحة المشروع. عند التواصل معنا يمكننا توضيح تكلفة الخامة والتركيب حسب احتياجات المكان.",
  },
  {
    question: "ما أفضل أنواع أرضيات HDF؟",
    answer:
      "يعتمد اختيار أفضل نوع على استخدام المكان والميزانية والتصميم المطلوب. نوفر ماركات HDF تركية وألمانية وبولندية ويمكننا مساعدتك في اختيار الأنسب.",
  },
];

const brands = [
  {
    name: "EGGER",
    href: "/products/egger",
    description: "أرضيات HDF ألماني بتصميمات وألوان متنوعة.",
  },
  {
    name: "AGT",
    href: "/products/agt",
    description: "أرضيات HDF تركي بتصميمات عصرية.",
  },
  {
    name: "FLOORPAN",
    href: "/products/floorpan",
    description: "أرضيات HDF مستوردة بتشكيلة متنوعة.",
  },
  {
    name: "camsan",
    href: "/products/camsan",
    description: "أرضيات HDF تركي بخيارات متعددة.",
  },
];

export default function HdfPricesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-walnut/10 bg-sand-deep/50">
        <div className="mx-auto max-w-5xl px-5 py-16">

          <span className="text-xs font-bold tracking-wide text-brass">
            أسعار أرضيات HDF
          </span>

          <h1 className="font-display mt-3 text-4xl font-extrabold leading-tight text-walnut sm:text-5xl">
            أسعار أرضيات HDF وسعر متر الباركيه
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-walnut/70">
            إذا كنت تبحث عن سعر متر أرضيات HDF أو تريد معرفة أسعار الباركيه
            قبل الشراء، تعرف على أهم العوامل التي تحدد السعر وتواصل معنا
            لمعرفة الأسعار الحالية والأنواع المتوفرة في التجمع الخامس.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Button asChild size="lg" variant="primary">
              <a href={siteInfo.phoneHref}>
                <Phone className="h-5 w-5" />
                اسأل عن السعر
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a
                href={siteInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                اسأل على واتساب
              </a>
            </Button>

          </div>
        </div>
      </section>

      {/* Price explanation */}
      <section className="mx-auto max-w-5xl px-5 py-16">

        <SectionHeading
          eyebrow="قبل معرفة السعر"
          title="سعر متر أرضيات HDF لا يكون ثابتًا"
          description="هناك عدة عوامل تؤثر على سعر المتر، لذلك نحدد السعر حسب النوع والموديل والمساحة."
        />

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              الماركة
            </h2>

            <p className="mt-3 text-sm leading-7 text-walnut/70">
              تختلف الأسعار حسب الشركة المصنعة وجودة الخامة والمواصفات.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              بلد المنشأ
            </h2>

            <p className="mt-3 text-sm leading-7 text-walnut/70">
              نوفر أنواعًا مستوردة من تركيا وألمانيا وبولندا، وتختلف
              الأسعار حسب المنتج والمنشأ.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              الموديل والتصميم
            </h2>

            <p className="mt-3 text-sm leading-7 text-walnut/70">
              تختلف الأسعار بين الموديلات والتصميمات والألوان المتاحة.
            </p>
          </div>

          <div className="rounded-xl border border-walnut/10 bg-white/40 p-6">
            <h2 className="font-display text-xl font-extrabold text-walnut">
              مساحة المكان
            </h2>

            <p className="mt-3 text-sm leading-7 text-walnut/70">
              تكلفة المشروع النهائية تعتمد أيضًا على المساحة المطلوبة
              وطريقة التركيب وتجهيز الأرضية.
            </p>
          </div>

        </div>
      </section>

      {/* Brands */}
      <section className="bg-sand-deep/50">

        <div className="mx-auto max-w-5xl px-5 py-16">

          <SectionHeading
            eyebrow="الأنواع المتوفرة"
            title="ماركات أرضيات HDF"
            description="تعرف على بعض الماركات المتوفرة لدينا وشاهد الألوان والعينات."
          />

          <div className="grid gap-4 sm:grid-cols-2">

            {brands.map((brand) => (
              <a
                key={brand.href}
                href={brand.href}
                className="rounded-xl border border-walnut/10 bg-white/50 p-6 transition hover:border-brass/40 hover:bg-white/80"
              >
                <h2 className="font-display text-xl font-extrabold text-walnut">
                  أرضيات HDF {brand.name}
                </h2>

                <p className="mt-2 text-sm leading-7 text-walnut/70">
                  {brand.description}
                </p>

                <span className="mt-4 inline-block text-sm font-bold text-brass">
                  مشاهدة الألوان والعينات ←
                </span>
              </a>
            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16">

        <SectionHeading
          eyebrow="أسئلة شائعة"
          title="أسئلة عن أسعار أرضيات HDF والباركيه"
        />

        <div className="space-y-4">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-walnut/10 bg-white/40 p-5"
            >
              <summary className="cursor-pointer list-none font-bold text-walnut">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-7 text-walnut/70">
                {faq.answer}
              </p>
            </details>
          ))}

        </div>

      </section>

      {/* Local CTA */}
      <section className="bg-walnut text-sand">

        <div className="mx-auto max-w-5xl px-5 py-16 text-center">

          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            عايز تعرف سعر متر الباركيه HDF؟
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-sand/70">
            تواصل مع الجبريل للباركيه في التجمع الخامس لمعرفة الأسعار
            الحالية والأنواع المتوفرة ومساعدتك في اختيار الأرضية المناسبة.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Button asChild size="lg" variant="brass">
              <a href={siteInfo.phoneHref}>
                <Phone className="h-5 w-5" />
                {siteInfo.phoneDisplay}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sand/30 text-sand hover:bg-sand/10"
            >
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
    </>
  );
}