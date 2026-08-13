"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

export function FloatingContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="fixed bottom-5 left-5 z-30 flex flex-col gap-3"
    >
      <a
        href={siteInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-walnut/20 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.02.29-3.42-.71-2.9-1.2-4.77-4.15-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.07.17-.2.72-.83.91-1.11.19-.29.38-.24.63-.15.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
        </svg>
      </a>
      <a
        href={siteInfo.phoneHref}
        aria-label="اتصل بنا"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-walnut text-brass-bright shadow-lg shadow-walnut/20 transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </motion.div>
  );
}
