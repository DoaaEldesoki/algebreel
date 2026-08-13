"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-walnut/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/file.png"
            alt={siteInfo.name}
            width={220}
            height={90}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold text-walnut/70 transition-colors hover:text-walnut",
                  active && "text-walnut"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-brass" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteInfo.phoneHref}
            className="flex items-center gap-2 rounded-full bg-walnut px-5 py-2.5 text-sm font-bold text-sand transition-colors hover:bg-walnut-soft"
          >
            <Phone className="h-4 w-4" />
            {siteInfo.phoneDisplay}
          </a>
        </div>

        <button
          className="rounded-full p-2 text-walnut lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-walnut/10 bg-sand px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-semibold text-walnut/80",
                    pathname === link.href && "bg-walnut/5 text-walnut"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteInfo.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-walnut px-5 py-2.5 text-sm font-bold text-sand"
              >
                <Phone className="h-4 w-4" />
                {siteInfo.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
