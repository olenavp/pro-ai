import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDir = path.join(
  process.cwd(),
  "content/articles"
);

export async function getArticle(slug: string) {
  const filePath = path.join(articlesDir, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");

  if (!file || file.trim().length === 0) {
    throw new Error(
      `Файл порожній або не прочитаний: ${filePath}`
    );
  }

  const { data, content } = matter(file);

  const processed = await remark()
    .use(html)
    .process(content);

  const htmlContent = processed.toString();

  return { meta: data, htmlContent };
}
