import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import { mdToHtml } from "@/lib/md";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Toujours Présent`, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const html = mdToHtml(post.content);
  return (
    <article className="container-tp max-w-3xl py-16">
      <Link href="/blog" className="text-sm text-teal">
        ← Blog
      </Link>
      <p className="mt-6 text-xs text-mute">{post.date}</p>
      <h1 className="mt-2 text-3xl font-semibold text-marine">{post.title}</h1>
      <div className="prose-tp mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="mt-12 rounded-2xl bg-marine px-6 py-8 text-white">
        <p className="font-medium">Un audit ou une mission ?</p>
        <Link href="/contact" className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-medium text-marine">
          Contact
        </Link>
      </div>
    </article>
  );
}
