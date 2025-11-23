import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import { articles } from "@/content/articles";

interface RawParams {
  slug?: string;
  [key: string]: any;
}

interface ArticlePageProps {
  params: unknown;
}

function isThenable(x: any): x is Promise<any> {
  return !!x && (typeof x === "object" || typeof x === "function") && typeof x.then === "function";
}

export async function generateStaticParams() {
  return (articles ?? []).map(article => ({
    slug: article.slug
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {

  let resolvedParams: RawParams;
  try {
    if (isThenable(params)) {
      resolvedParams = await (params as Promise<RawParams>);
    } else {
      resolvedParams = params as RawParams;
    }
  } catch (err) {
    resolvedParams = {};
  }

  const slug = resolvedParams?.slug;
  if (!slug || typeof slug !== "string") {
    return (
      <main className="container mx-auto py-16 px-6">
        <p>Стаття не знайдена (slug відсутній)</p>
      </main>
    );
  }

  const filePath = path.join(process.cwd(), "content", "articles", `${slug}.md`);

  try {
    const content = await fs.readFile(filePath, "utf-8");
    const maybeHtml = marked.parse(content);
    const html = (isThenable(maybeHtml) ? await maybeHtml : maybeHtml) as string;

    return (
      <main className="container mx-auto py-16 px-6">

        <Link
          href="/articles"
          className="inline-block mb-8 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          ← Повернутися до всіх статей
        </Link>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    );
  } catch (err) {
    return (
      <main className="container mx-auto py-16 px-6">
        <p>Стаття не знайдена або помилка при рендері</p>
      </main>
    );
  }
}
