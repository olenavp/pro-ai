import Link from "next/link";

interface ArticleCardProps {
    id: string;
    title: string;
    summary: string;
    date: string;
}

export default function ArticleCard({ id, title, summary, date }: ArticleCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">{summary}</p>
            <p className="text-gray-400 text-sm">{date}</p>
            <Link href={`/articles/${id}`} className="text-blue-500 mt-2 inline-block hover:underline">
                Читати далі
            </Link>
        </div>
    );
}
