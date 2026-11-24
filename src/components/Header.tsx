"use client";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 text-marine backdrop-blur">
      <div className="container-tp flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Toujours Présent
        </Link>
        <nav className="flex items-center gap-4 text-sm md:gap-6">
          <Link href="/blog" className="text-mute hover:text-marine">
            Blog
          </Link>
          <Link href="/contact" className="text-mute hover:text-marine">
            Contact
          </Link>
          <a href={`tel:${SITE.phone}`} className="hidden text-teal sm:inline">
            {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
