const guides = [
    { slug: "intro", title: "Вступ" },
    { slug: "prompts", title: "Як писати промпти" },
    { slug: "images", title: "Генерація зображень" }
];

export default function GuidesPage() {
    return (
        <main className="container mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-8">Гайди по ШІ</h1>

            <ul className="space-y-4">
                {guides.map(g => (
                    <li key={g.slug}>
                        <a className="text-blue-600 underline" href={`/guides/${g.slug}`}>
                            {g.title}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
