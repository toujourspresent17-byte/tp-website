import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Toujours Présent",
  description: "Parties communes, sous-traitance propreté, Nouvelle-Aquitaine.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <section className="container-tp py-16">
      <h1 className="text-3xl font-semibold text-marine">Blog</h1>
      <p className="mt-2 max-w-xl text-mute">Notes terrain pour syndics, gestionnaires et partenaires propreté.</p>
      <ul className="mt-10 space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-xs text-mute">{p.date}</p>
            <Link href={`/blog/${p.slug}`} className="mt-1 block text-lg font-semibold text-marine hover:text-teal">
              {p.title}
            </Link>
            {p.excerpt ? <p className="mt-2 text-sm text-mute">{p.excerpt}</p> : null}
            <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-sm text-teal">
              Lire →
            </Link>
          </li>
        ))}
      </ul>
      {posts.length === 0 ? <p className="mt-8 text-mute">Aucun article pour le moment.</p> : null}
    </section>
  );
}
