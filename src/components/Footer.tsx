import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-marine text-white/80">
      <div className="container-tp flex flex-col gap-4 py-12 text-sm sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className={"font-semibold text-white"}>{SITE.name}</p>
          <p className={"mt-2"}>{SITE.address}</p>
          <a href={`mailto:${SITE.email}`} className="mt-2 block">
            {SITE.email}
          </a>
        </div>
        <div className="flex gap-4">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
