export function mdToHtml(md: string): string {
  const lines = md.split(/\n/);
  const out: string[] = [];
  let para: string[] = [];
  const inline = (s: string) =>
    s
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-marine">$1</strong>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-teal underline-offset-2 hover:underline">$1</a>');
  const flush = () => {
    if (!para.length) return;
    const t = para.join(" ").trim();
    if (t) out.push(`<p class="mt-4 text-mute leading-relaxed">${inline(t)}</p>`);
    para = [];
  };
  for (const line of lines) {
    if (line.startsWith("## ")) {
      flush();
      out.push(`<h2 class="mt-10 text-xl font-semibold text-marine">${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("- ")) {
      flush();
      if (!out.length || !out[out.length - 1].includes("<ul")) {
        out.push('<ul class="mt-4 list-disc space-y-2 pl-5 text-mute">');
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
    } else if (!line.trim()) {
      flush();
    } else {
      para.push(line);
    }
  }
  flush();
  return out.join("\n");
}
