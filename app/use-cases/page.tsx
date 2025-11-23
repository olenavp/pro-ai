
const cases = [
    { slug: "intro", title: "Вступ" },
    { slug: "text-generation", title: "Генерація тексту" },
    { slug: "image-generation", title: "Генерація зображень" },
    { slug: "video-generation", title: "Генерація відео" },
    { slug: "automation", title: "Автоматизації" },

];

export default function ToolsPage() {
    return (
        <main className="container mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-8">Приклади використання</h1>

            <ul className="space-y-4">
                {cases.map(g => (
                    <li key={g.slug}>
                        <a className="text-blue-600 underline" href={`/use-cases/${g.slug}`}>
                            {g.title}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
