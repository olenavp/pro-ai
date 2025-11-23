import Link from "next/link";
import { articles } from "@/content/articles";

export default function ArticlesPage() {
  return (
    <main className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Статті по ШІ</h1>
      <ul className="space-y-4">
        {articles.map(a => (
          <li key={a._id}>
            <Link href={`/articles/${a.slug}`} className="text-blue-600 underline">
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
