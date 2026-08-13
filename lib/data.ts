export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  origin: string;
  images: string[];
};

const swatchCount = 6;

function imgs(dir: string, count: number) {
  return Array.from({ length: count }, (_, i) =>
    `/images/${dir}/${dir}-${String(i + 1).padStart(2, "0")}.svg`
  );
}

function numberedImages(dir: string, count: number, ext: string) {
  return Array.from({ length: count }, (_, i) =>
    `/images-optimized/${dir}/${String(i + 1)}.${ext}`
  );
}

export const brands: Brand[] = [
  {
    slug: "spc",
    name: "SPC",
    tagline: "أرضيات حجرية مقاومة للماء بالكامل",
    origin: "تركي / بولندي",
    images: Array.from({ length: 20 }, (_, i) => `/images/spc/${i + 1}.jpg`),
  },
  {
    slug: "egger",
    name: "EGGER",
    tagline: "خامة ألمانية فاخرة بتدرجات خشب طبيعية",
    origin: "ألماني",
    images: numberedImages("egger", 10, "webp"),
  },
  {
    slug: "agt",
    name: "AGT",
    tagline: "تصميمات عصرية بمقاومة عالية للخدش",
    origin: "تركي",
    images: numberedImages("agt", 35, "webp"),
  },
  {
    slug: "floorpan",
    name: "FLOORPAN",
    tagline: "تركيب سريع وثبات ممتاز في الاستخدام اليومي",
    origin: "بولندي",
    images: numberedImages("floorpan", 41, "webp"),
  },
  {
    slug: "camsan",
    name: "camsan",
    tagline: "خامة اقتصادية بجودة تصنيع موثوقة",
    origin: "تركي",
    images: numberedImages("camsan", 6, "webp"),
  },
];

export const homeSwatches = imgs("home-swatches", 8);
export const homeProjects = Array.from({ length: 8 }, (_, i) => `/images/home-projects/${i + 1}.jpg`);
export const heroImage = "/images/home-hero/hero-01.svg";
export const guideImages = [
  "/images-optimized/agt/1.webp",
  "/images-optimized/floorpan/12.webp",
];

export const siteInfo = {
  name: "شركة ال جبريل للباركيه",
  phoneDisplay: "01148392040",
  phoneHref: "tel:+201148392040",
  whatsappHref: "https://wa.me/message/VVS7U45Y4LUEH1",
  address: "التجمع الخامس، ميجا مول التسعين الجنوبي",
  hours: "كل أيام الأسبوع ما عدا الجمعة، من الساعة 12 إلى 9 مساءً",
  intro:
    "شركة ال جبريل للباركيه تقدّم لكم أفضل أنواع الباركيه HDF و SPC المستورد من تركيا وألمانيا وبولندا، بخبرة أكثر من 10 سنوات في التركيب، وضمان يمتد لـ 10 سنوات على كل أعمالنا.",
};

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/guide", label: "دليل الشراء" },
  { href: "/hdf-prices", label: "أسعار HDF" },
  { href: "/parquet-prices", label: "أسعار الباركيه" },
  { href: "/hdf-colors", label: "ألوان HDF" },
];
