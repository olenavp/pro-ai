export default function Footer() {
    return (
        <footer className="w-full border-t bg-white mt-16">
            <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} AI Guides. Усі права захищено.
            </div>
        </footer>
    );
}
