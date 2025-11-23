const tools = [
    { slug: "intro", title: "Вступ" },
    { slug: "tutorial-1", title: "Приклад 1" },
    { slug: "tutorial-2", title: "Приклад 2" },
    { slug: "tutorial-3", title: "Приклад 3" }

];

export default function ToolsPage() {
    return (
        <main className="container mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-8">Навчання</h1>

            <ul className="space-y-4">
                {tools.map(g => (
                    <li key={g.slug}>
                        <a className="text-blue-600 underline" href={`/tutorials/${g.slug}`}>
                            {g.title}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
