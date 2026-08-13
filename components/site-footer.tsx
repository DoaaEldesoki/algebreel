import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { siteInfo, navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="plank-seam mt-24 bg-walnut text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-brass-bright">
            {siteInfo.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-sand/70">
            {siteInfo.intro}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-sand/90">
            روابط سريعة
          </h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-sand/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-brass-bright">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-sand/90">
            تواصل معنا
          </h4>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-sand/70">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brass-bright" />
              {siteInfo.address}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brass-bright" />
              {siteInfo.hours}
            </li>
            <li>
              <a href={siteInfo.phoneHref} className="flex items-center gap-2 hover:text-brass-bright">
                <Phone className="h-4 w-4 shrink-0 text-brass-bright" />
                {siteInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteInfo.whatsappHref} className="flex items-center gap-2 hover:text-brass-bright">
                <MessageCircle className="h-4 w-4 shrink-0 text-brass-bright" />
                واتساب
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <iframe
          title="موقع الشركة على الخريطة"
          src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=30.027452,31.480355&output=embed&q=30.027573,31.480028&z=16"
          className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
          loading="lazy"
        />
      </div>

      <div className="border-t border-sand/10 px-5 py-5 text-center text-xs text-sand/50">
        جميع الحقوق محفوظة © {new Date().getFullYear()} {siteInfo.name}
      </div>
    </footer>
  );
}
