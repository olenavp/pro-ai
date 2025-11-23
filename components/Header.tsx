import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-gray-800">
        Про AI
        </Link>

        <nav className="space-x-6 hidden md:flex">
          <Link href="/use-cases" className="text-gray-700 hover:text-gray-900">
            Сценарії
          </Link>
          <Link href="/tools" className="text-gray-700 hover:text-gray-900">
            Інструменти
          </Link>
          <Link href="/tutorials" className="text-gray-700 hover:text-gray-900">
            Навчання
          </Link>
          <Link href="/guides" className="text-gray-700 hover:text-gray-900">
            Гайди
          </Link>
        </nav>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Пошук..."
            className="border rounded-md py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
}
