import Link from "next/link";
import { SITE } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="bg-marine text-white/80">
      <div className="container-tp py-12 text-sm">
        <p className={"font-semibold text-white"}>{SITE.name}</p>
        <p className={"mt-2"}>{SITE.address}</p>
        <a href={`mailto:${SITE.email}`} className={"mt-2 block"}>{SITE.email}</a>
        <p className="mt-4">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          {" · "}
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </p>
      </div>
    </footer>
  );
}
