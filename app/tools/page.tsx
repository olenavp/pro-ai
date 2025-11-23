const tools = [
    { slug: "chatgpt", title: "ChatGPT" },
    { slug: "midjourney", title: "Midjourney" },
    { slug: "dalle", title: "DALL-E" },


];

export default function ToolsPage() {
    return (
        <main className="container mx-auto py-16 px-6">
            <h1 className="text-3xl font-bold mb-8">Інструменти ШІ</h1>

            <ul className="space-y-4">
                {tools.map(g => (
                    <li key={g.slug}>
                        <a className="text-blue-600 underline" href={`/tools/${g.slug}`}>
                            {g.title}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
