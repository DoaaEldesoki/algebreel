import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, Phone } from "lucide-react";
import { guideImages, siteInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "أرضيات HDF: المميزات والعيوب | دليل الشراء",
  description:
    "تعرف على مميزات وعيوب أرضيات HDF، مقاومتها للرطوبة والخدوش، والفرق بينها وبين SPC، وأهم العوامل التي يجب معرفتها قبل شراء أرضيات HDF.",
};

const pros = [
  "سعر مناسب مقارنة بالباركيه الخشبي الطبيعي",
  "تركيب سريع بدون غبار أو مواد لاصقة",
  "تشكيلة واسعة من الألوان والتصميمات",
  "مقاومة جيدة للخدوش في الاستخدام اليومي",
  "عزل حراري وصوتي جيد للغرف",
];

const cons = [
  "أقل مقاومة للرطوبة من أنواع SPC",
  "لا يُنصح به في الحمامات أو الأماكن المعرضة للرطوبة المستمرة",
  "يحتاج إلى أرضية مستوية تمامًا قبل التركيب",
  "عمره الافتراضي أقل من الخشب الطبيعي الفاخر",
];

const faqs = [
  {
    question: "هل أرضيات HDF ضد المياه؟",
    answer:
      "تختلف مقاومة المياه حسب نوع وماركة أرضيات HDF. بعض الأنواع تتمتع بمقاومة أفضل للرطوبة، لكن يجب اختيار النوع المناسب حسب طبيعة المكان والاستخدام.",
  },
  {
    question: "هل أرضيات HDF مناسبة للمطابخ؟",
    answer:
      "يعتمد ذلك على نوع الأرضية ومستوى تعرض المكان للمياه والرطوبة. يُفضل اختيار نوع مناسب للاستخدام في الأماكن التي قد تتعرض للرطوبة.",
  },
  {
    question: "ما الفرق بين HDF وSPC؟",
    answer:
      "HDF يعطي شكلًا وإحساسًا قريبًا من الأرضيات الخشبية مع مجموعة كبيرة من الألوان والتصميمات، بينما يتميز SPC بمقاومة أعلى للمياه والرطوبة.",
  },
  {
    question: "ما العمر الافتراضي لأرضيات HDF؟",
    answer:
      "يعتمد العمر الافتراضي على جودة الخامة وطريقة التركيب ومستوى الاستخدام والعناية بالأرضية.",
  },
  {
    question: "ما سعر متر أرضيات HDF؟",
    answer:
      "يختلف سعر متر HDF حسب الماركة وبلد المنشأ والسمك والجودة ومواصفات الأرضية. يمكنك التواصل معنا لمعرفة الأسعار الحالية والأنواع المتوفرة.",
  },
];

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-walnut/10 bg-sand-deep/50">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <span className="text-xs font-bold tracking-wide text-brass">
            دليل شراء أرضيات HDF
          </span>

          <h1 className="font-display mt-3 text-4xl font-extrabold text-walnut sm:text-5xl">
            مميزات وعيوب أرضيات HDF | دليل شامل قبل الشراء
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-walnut/70">
            قبل اختيار أرضيات HDF المناسبة لمنزلك أو مكتبك، تعرف على أهم
            المميزات والعيوب، ومقاومة الرطوبة والخدوش، والفرق بينها وبين
            الأنواع الأخرى من الأرضيات.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        {/* Pros */}
        <SectionHeading
          eyebrow="المميزات"
          title="مميزات أرضيات HDF"
          description="لماذا يختار الكثيرون أرضيات HDF لمنازلهم ومكاتبهم؟"
        />

        <div className="mb-16 overflow-hidden rounded-xl border border-walnut/10">
          <Image
            src={guideImages[0]}
            alt="مميزات أرضيات HDF"
            width={1000}
            height={650}
            className="w-full object-cover"
            unoptimized
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {pros.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-lg border border-walnut/10 bg-white/40 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <span className="text-sm leading-relaxed text-walnut/80">
                {p}
              </span>
            </li>
          ))}
        </ul>

        {/* Price internal link */}
        <div className="mt-12 rounded-xl border border-brass/20 bg-brass/5 p-6">
          <h2 className="font-display text-2xl font-extrabold text-walnut">
            كم سعر متر أرضيات HDF؟
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-walnut/70">
            يختلف سعر متر أرضيات HDF حسب الماركة وبلد المنشأ والسمك والجودة
            ومواصفات الأرضية. تعرف على الأسعار الحالية والأنواع المتوفرة لدينا.
          </p>

          <Link
            href="/hdf-prices"
            className="mt-4 inline-flex font-bold text-brass underline-offset-4 hover:underline"
          >
            تعرف على أسعار أرضيات HDF ←
          </Link>
        </div>

        {/* Colors internal link */}
        <div className="mt-6 rounded-xl border border-walnut/10 bg-white/40 p-6">
          <h2 className="font-display text-2xl font-extrabold text-walnut">
            ألوان أرضيات HDF
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-walnut/70">
            تتوفر أرضيات HDF بمجموعة كبيرة من الألوان والتصميمات التي تناسب
            الديكورات العصرية والكلاسيكية.
          </p>

          <Link
            href="/hdf-colors"
            className="mt-4 inline-flex font-bold text-brass underline-offset-4 hover:underline"
          >
            شاهد ألوان وعينات أرضيات HDF ←
          </Link>
        </div>

        {/* Cons */}
        <div className="mt-16 mb-8">
          <SectionHeading
            eyebrow="العيوب"
            title="عيوب أرضيات HDF"
            description="أهم الأمور التي يجب معرفتها قبل اتخاذ قرار الشراء."
          />
        </div>

        <div className="mb-16 overflow-hidden rounded-xl border border-walnut/10">
          <Image
            src={guideImages[1]}
            alt="عيوب أرضيات HDF"
            width={1000}
            height={650}
            className="w-full object-cover"
            unoptimized
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {cons.map((c) => (
            <li
              key={c}
              className="flex items-start gap-3 rounded-lg border border-walnut/10 bg-white/40 p-4"
            >
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-walnut/50" />
              <span className="text-sm leading-relaxed text-walnut/80">
                {c}
              </span>
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="الأسئلة الشائعة"
            title="أسئلة شائعة عن أرضيات HDF"
            description="إجابات عن أكثر الأسئلة التي تهمك قبل اختيار أرضيات HDF."
          />

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-walnut/10 bg-white/40 p-5"
              >
                <summary className="cursor-pointer list-none font-bold text-walnut">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-brass transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-relaxed text-walnut/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-walnut p-8 text-center text-sand">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            محتار تختار HDF ولا SPC؟
          </h2>

          <p className="mt-2 text-sand/70">
            تواصل معنا وسنساعدك في اختيار الأرضية الأنسب لمساحتك واستخدامك،
            ومعرفة السعر الحالي للأنواع المتوفرة.
          </p>

          <Button asChild size="lg" variant="brass" className="mt-6">
            <a href={siteInfo.phoneHref}>
              <Phone className="h-5 w-5" />
              {siteInfo.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}